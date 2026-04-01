package com.crm.model;

import com.crm.enums.LeadStatus;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "leads")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String company;
    private String jobTitle;

    // Source info
    private String source;        // IndiaMart, Magicbricks, Website, Referral
    private String campaign;

    // Project interest
    private String productInterest;
    private BigDecimal budgetMin;
    private BigDecimal budgetMax;
    private String timeline;
    private String designStyle;   // Modern, Contemporary, Classic
    private String projectType;   // Residential, Commercial
    private Double siteArea;

    // Status & Scoring
    @Enumerated(EnumType.STRING)
    private LeadStatus status;

    private Integer leadScore;
    private String nextAction;    // Call, Email, Demo, Proposal

    // Assignment
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private User owner;

    private String preferredContactTime;
    private String preferredContactMethod;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        if (status == null) status = LeadStatus.NEW;
        if (leadScore == null) leadScore = 0;
    }

    @PreUpdate
    public void preUpdate() { updatedAt = LocalDateTime.now(); }
}