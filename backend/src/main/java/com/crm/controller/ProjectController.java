package com.crm.controller;


import com.crm.dto.request.ProjectRequest;
import com.crm.dto.response.ApiResponse;
import com.crm.enums.ProjectStatus;
import com.crm.model.Project;
import com.crm.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    public ResponseEntity<ApiResponse<Project>> create(@RequestBody ProjectRequest request) {
        return ResponseEntity.ok(ApiResponse.success(projectService.createProject(request), "Project created"));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Project>>> getAll() {
        return ResponseEntity.ok(ApiResponse.success(projectService.getAllProjects(), "Success"));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Project>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(projectService.getProjectById(id), "Success"));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<Project>> updateStatus(
            @PathVariable Long id, @RequestParam ProjectStatus status) {
        return ResponseEntity.ok(ApiResponse.success(
                projectService.updateStatus(id, status), "Status updated"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        projectService.deleteProject(id);
        return ResponseEntity.ok(ApiResponse.success(null, "Project deleted"));
    }
}