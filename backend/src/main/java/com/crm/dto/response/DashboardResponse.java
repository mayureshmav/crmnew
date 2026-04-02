package com.crm.dto.response;

import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Builder
public class DashboardResponse {
    private long totalLeads;
    private long newLeads;
    private long qualifiedLeads;
    private long convertedLeads;
    private long totalProjects;
    private long projectsOnTime;
    private long projectsAtRisk;
    private long projectsDelayed;
    private BigDecimal totalRevenue;
    private BigDecimal pendingRevenue;
    private long pendingTasks;
    private long pendingApprovals;
}