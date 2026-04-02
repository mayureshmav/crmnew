package com.crm.repository;


import com.crm.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
    List<Vendor> findByCategory(String category);
    List<Vendor> findByActiveTrue();
}