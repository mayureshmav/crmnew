package com.crm.service;

import com.crm.dto.request.ProjectRequest;
import com.crm.enums.ProjectStatus;
import com.crm.exception.ResourceNotFoundException;
import com.crm.model.*;
import com.crm.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;

    public Project createProject(ProjectRequest request) {
        Customer customer = customerRepository.findById(request.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
        User pm = userRepository.findById(request.getProjectManagerId())
                .orElseThrow(() -> new ResourceNotFoundException("Project Manager not found"));

        String code = "PRJ-" + System.currentTimeMillis();

        Project project = Project.builder()
                .projectName(request.getProjectName())
                .projectCode(code)
                .customer(customer)
                .projectManager(pm)
                .projectType(request.getProjectType())
                .siteAddress(request.getSiteAddress())
                .siteArea(request.getSiteArea())
                .totalBudget(request.getTotalBudget())
                .startDate(request.getStartDate())
                .expectedEndDate(request.getExpectedEndDate())
                .description(request.getDescription())
                .designStyle(request.getDesignStyle())
                .build();

        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found: " + id));
    }

    public Project updateStatus(Long id, ProjectStatus status) {
        Project project = getProjectById(id);
        project.setStatus(status);
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        projectRepository.delete(getProjectById(id));
    }
}