package com.crm.repository;

import com.crm.enums.ProjectStatus;
import com.crm.model.Project;
import com.crm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByStatus(ProjectStatus status);
    List<Project> findByProjectManager(User manager);
    long countByStatus(ProjectStatus status);
}