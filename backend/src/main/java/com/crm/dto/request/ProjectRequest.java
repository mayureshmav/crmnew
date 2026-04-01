package com.crm.dto.request;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ProjectRequest {
    private String projectName;
    private Long customerId;
    private Long projectManagerId;
    private String projectType;
    private String siteAddress;
    private Double siteArea;
    private BigDecimal totalBudget;
    private LocalDate startDate;
    private LocalDate expectedEndDate;
    private String description;
    private String designStyle;
}
