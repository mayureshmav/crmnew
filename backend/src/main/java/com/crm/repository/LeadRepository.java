package com.crm.repository;

import com.crm.enums.LeadStatus;
import com.crm.model.Lead;
import com.crm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface LeadRepository extends JpaRepository<Lead, Long> {
    List<Lead> findByStatus(LeadStatus status);
    List<Lead> findByOwner(User owner);
    List<Lead> findBySource(String source);

    @Query("SELECT l FROM Lead l WHERE l.name LIKE %:query% OR l.email LIKE %:query% OR l.phone LIKE %:query%")
    List<Lead> searchLeads(String query);

    long countByStatus(LeadStatus status);

    @Query("SELECT l FROM Lead l WHERE l.email = :email OR l.phone = :phone")
    List<Lead> findDuplicates(String email, String phone);
}