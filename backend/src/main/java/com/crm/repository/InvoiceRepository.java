package com.crm.repository;

import com.crm.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.math.BigDecimal;
import java.util.List;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
    List<Invoice> findByStatus(String status);
    List<Invoice> findByProjectId(Long projectId);

    @Query("SELECT SUM(i.totalAmount) FROM Invoice i WHERE i.status = 'PAID'")
    BigDecimal getTotalRevenue();

    @Query("SELECT SUM(i.totalAmount) FROM Invoice i WHERE i.status != 'PAID'")
    BigDecimal getTotalPending();
}