package com.crm.dto.request;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class LeadRequest {
    private String name;
    private String email;
    private String phone;
    private String company;
    private String jobTitle;
    private String source;
    private String campaign;
    private String productInterest;
    private BigDecimal budgetMin;
    private BigDecimal budgetMax;
    private String timeline;
    private String designStyle;
    private String projectType;
    private Double siteArea;
    private Long ownerId;
    private String preferredContactMethod;
    private String preferredContactTime;
}
