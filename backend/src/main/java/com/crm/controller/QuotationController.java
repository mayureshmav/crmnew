package com.crm.controller;

import com.crm.dto.request.QuotationRequest;
import com.crm.dto.response.ApiResponse;
import com.crm.model.Quotation;
import com.crm.service.QuotationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/quotations")
@RequiredArgsConstructor
public class QuotationController {

    private final QuotationService quotationService;

    @PostMapping
    public ResponseEntity<ApiResponse<Quotation>> create(
            @RequestBody QuotationRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(ApiResponse.success(
                quotationService.createQuotation(request, userDetails.getUsername()),
                "Quotation created"));
    }

    @PostMapping("/{id}/approve")
    public ResponseEntity<ApiResponse<Quotation>> approve(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(ApiResponse.success(
                quotationService.approveQuotation(id, userDetails.getUsername()),
                "Quotation approved"));
    }

    @PostMapping("/{id}/reject")
    public ResponseEntity<ApiResponse<Quotation>> reject(
            @PathVariable Long id, @RequestParam String comments) {
        return ResponseEntity.ok(ApiResponse.success(
                quotationService.rejectQuotation(id, comments), "Quotation rejected"));
    }

    @GetMapping("/pending-approvals")
    public ResponseEntity<ApiResponse<List<Quotation>>> pending() {
        return ResponseEntity.ok(ApiResponse.success(
                quotationService.getPendingApprovals(), "Success"));
    }
}