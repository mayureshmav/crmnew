package com.crm.repository;
import com.crm.enums.QuotationStatus;
import com.crm.model.Quotation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface QuotationRepository extends JpaRepository<Quotation, Long> {
    List<Quotation> findByStatus(QuotationStatus status);
    List<Quotation> findByLeadId(Long leadId);
    List<Quotation> findByCustomerId(Long customerId);
}
