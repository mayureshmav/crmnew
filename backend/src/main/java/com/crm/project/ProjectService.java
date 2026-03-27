package com.crm.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Repository;

@Repository
interface ProjectRepository extends JpaRepository<Project, Long> {
}

@Service
public class ProjectService {
    private final ProjectRepository repo;

    public ProjectService(ProjectRepository repo) {
        this.repo = repo;
    }

    public Project create(Project project) {
        project.setStatus("ACTIVE");
        return repo.save(project);
    }
}
