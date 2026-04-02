package com.crm.controller;

import com.crm.dto.request.LeadRequest;
import com.crm.dto.response.ApiResponse;
import com.crm.enums.LeadStatus;
import com.crm.model.Lead;
import com.crm.service.LeadService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/leads")
@RequiredArgsConstructor
public class LeadController {

    private final LeadService leadService;

    @PostMapping
    public ResponseEntity<ApiResponse<Lead>> createLead(@RequestBody LeadRequest request) {
        return ResponseEntity.ok(ApiResponse.success(leadService.createLead(request), "Lead created"));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Lead>>> getAllLeads() {
        return ResponseEntity.ok(ApiResponse.success(leadService.getAllLeads(), "Success"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Lead>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(leadService.getLeadById(id), "Success"));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<Lead>> updateStatus(
            @PathVariable Long id, @RequestParam LeadStatus status) {
        return ResponseEntity.ok(ApiResponse.success(
                leadService.updateLeadStatus(id, status), "Status updated"));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Lead>>> search(@RequestParam String query) {
        return ResponseEntity.ok(ApiResponse.success(leadService.searchLeads(query), "Results"));
    }

    @GetMapping("/by-status")
    public ResponseEntity<ApiResponse<List<Lead>>> byStatus(@RequestParam LeadStatus status) {
        return ResponseEntity.ok(ApiResponse.success(leadService.getLeadsByStatus(status), "Success"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteLead(@PathVariable Long id) {
        leadService.deleteLead(id);
        return ResponseEntity.ok(ApiResponse.success(null, "Lead deleted"));
    }
}