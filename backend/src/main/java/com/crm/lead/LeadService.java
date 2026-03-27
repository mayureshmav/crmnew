package com.crm.lead;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LeadService {

    private final LeadRepository repo;

    public LeadService(LeadRepository repo) {
        this.repo = repo;
    }

    public Lead create(Lead lead) {
        lead.setStatus("NEW");
        return repo.save(lead);
    }

    public List<Lead> getAll() {
        return repo.findAll();
    }
}