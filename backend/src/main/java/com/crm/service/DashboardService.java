package com.crm.service;


import com.crm.dto.response.DashboardResponse;
import com.crm.enums.*;
import com.crm.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final LeadRepository leadRepository;
    private final ProjectRepository projectRepository;
    private final InvoiceRepository invoiceRepository;
    private final TaskRepository taskRepository;
    private final QuotationRepository quotationRepository;

    public DashboardResponse getDashboard() {
        return DashboardResponse.builder()
                .totalLeads(leadRepository.count())
                .newLeads(leadRepository.countByStatus(LeadStatus.NEW))
                .qualifiedLeads(leadRepository.countByStatus(LeadStatus.QUALIFIED))
                .convertedLeads(leadRepository.countByStatus(LeadStatus.CONVERTED))
                .totalProjects(projectRepository.count())
                .projectsOnTime(projectRepository.countByStatus(ProjectStatus.IN_PROGRESS))
                .projectsAtRisk(projectRepository.countByStatus(ProjectStatus.ON_HOLD))
                .projectsDelayed(projectRepository.countByStatus(ProjectStatus.CANCELLED))
                .totalRevenue(invoiceRepository.getTotalRevenue())
                .pendingRevenue(invoiceRepository.getTotalPending())
                .pendingTasks(taskRepository.findByStatus("PENDING").size())
                .pendingApprovals(quotationRepository.findByStatus(QuotationStatus.PENDING_APPROVAL).size())
                .build();
    }
}