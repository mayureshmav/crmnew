package com.crm.service;

import com.crm.dto.request.LeadRequest;
import com.crm.enums.LeadStatus;
import com.crm.exception.ResourceNotFoundException;
import com.crm.model.*;
import com.crm.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LeadService {

    private final LeadRepository leadRepository;
    private final UserRepository userRepository;

    public Lead createLead(LeadRequest request) {
        // Duplicate detection
        List<Lead> duplicates = leadRepository.findDuplicates(request.getEmail(), request.getPhone());
        if (!duplicates.isEmpty()) {
            throw new RuntimeException("Duplicate lead detected: similar email or phone already exists");
        }

        User owner = null;
        if (request.getOwnerId() != null) {
            owner = userRepository.findById(request.getOwnerId())
                    .orElseThrow(() -> new ResourceNotFoundException("Owner not found"));
        }

        Lead lead = Lead.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .company(request.getCompany())
                .jobTitle(request.getJobTitle())
                .source(request.getSource())
                .campaign(request.getCampaign())
                .productInterest(request.getProductInterest())
                .budgetMin(request.getBudgetMin())
                .budgetMax(request.getBudgetMax())
                .timeline(request.getTimeline())
                .designStyle(request.getDesignStyle())
                .projectType(request.getProjectType())
                .siteArea(request.getSiteArea())
                .owner(owner)
                .preferredContactMethod(request.getPreferredContactMethod())
                .preferredContactTime(request.getPreferredContactTime())
                .build();

        Lead saved = leadRepository.save(lead);
        // Auto-calculate lead score
        saved.setLeadScore(calculateLeadScore(saved));
        return leadRepository.save(saved);
    }

    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    public Lead getLeadById(Long id) {
        return leadRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lead not found with id: " + id));
    }

    public Lead updateLeadStatus(Long id, LeadStatus status) {
        Lead lead = getLeadById(id);
        lead.setStatus(status);
        return leadRepository.save(lead);
    }

    public List<Lead> searchLeads(String query) {
        return leadRepository.searchLeads(query);
    }

    public List<Lead> getLeadsByStatus(LeadStatus status) {
        return leadRepository.findByStatus(status);
    }

    public void deleteLead(Long id) {
        Lead lead = getLeadById(id);
        leadRepository.delete(lead);
    }

    // Basic lead scoring logic — can be upgraded with ML
    private int calculateLeadScore(Lead lead) {
        int score = 0;
        if (lead.getBudgetMin() != null && lead.getBudgetMin().doubleValue() > 500000) score += 30;
        if (lead.getTimeline() != null && lead.getTimeline().contains("3")) score += 20;
        if (lead.getEmail() != null) score += 15;
        if (lead.getPhone() != null) score += 15;
        if (lead.getSiteArea() != null && lead.getSiteArea() > 1000) score += 20;
        return Math.min(score, 100);
    }
}
