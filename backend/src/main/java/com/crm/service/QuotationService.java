package com.crm.service;

import com.crm.dto.request.QuotationRequest;
import com.crm.enums.QuotationStatus;
import com.crm.exception.ResourceNotFoundException;
import com.crm.model.*;
import com.crm.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuotationService {

    private final QuotationRepository quotationRepository;
    private final LeadRepository leadRepository;
    private final CustomerRepository customerRepository;
    private final VendorRepository vendorRepository;
    private final UserRepository userRepository;

    public Quotation createQuotation(QuotationRequest request, String creatorEmail) {
        User creator = userRepository.findByEmail(creatorEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Lead lead = request.getLeadId() != null
                ? leadRepository.findById(request.getLeadId()).orElse(null) : null;
        Customer customer = request.getCustomerId() != null
                ? customerRepository.findById(request.getCustomerId()).orElse(null) : null;

        List<QuotationItem> items = request.getItems().stream().map(i -> {
            BigDecimal sub = i.getUnitPrice().multiply(BigDecimal.valueOf(i.getQuantity()));
            BigDecimal tax = sub.multiply(i.getTaxPercent().divide(BigDecimal.valueOf(100)));
            Vendor vendor = i.getVendorId() != null
                    ? vendorRepository.findById(i.getVendorId()).orElse(null) : null;
            return QuotationItem.builder()
                    .itemName(i.getItemName())
                    .description(i.getDescription())
                    .quantity(i.getQuantity())
                    .unitPrice(i.getUnitPrice())
                    .taxPercent(i.getTaxPercent())
                    .subtotal(sub.add(tax))
                    .suggestedVendor(vendor)
                    .build();
        }).collect(Collectors.toList());

        BigDecimal subtotal = items.stream()
                .map(QuotationItem::getSubtotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal discount = request.getDiscount() != null ? request.getDiscount() : BigDecimal.ZERO;
        BigDecimal total = subtotal.subtract(discount);

        Quotation quotation = Quotation.builder()
                .quoteNumber("QT-" + System.currentTimeMillis())
                .lead(lead)
                .customer(customer)
                .createdBy(creator)
                .items(items)
                .subtotal(subtotal)
                .discount(discount)
                .totalAmount(total)
                .paymentSchedule(request.getPaymentSchedule())
                .notes(request.getNotes())
                .build();

        items.forEach(item -> item.setQuotation(quotation));
        return quotationRepository.save(quotation);
    }

    public Quotation approveQuotation(Long id, String approverEmail) {
        Quotation q = quotationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quotation not found"));
        User approver = userRepository.findByEmail(approverEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Approver not found"));
        q.setStatus(QuotationStatus.APPROVED);
        q.setApprovedBy(approver);
        q.setApprovedAt(LocalDateTime.now());
        return quotationRepository.save(q);
    }

    public Quotation rejectQuotation(Long id, String comments) {
        Quotation q = quotationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quotation not found"));
        q.setStatus(QuotationStatus.REJECTED);
        q.setApproverComments(comments);
        return quotationRepository.save(q);
    }

    public List<Quotation> getPendingApprovals() {
        return quotationRepository.findByStatus(QuotationStatus.PENDING_APPROVAL);
    }
}
