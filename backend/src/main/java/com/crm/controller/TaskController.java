package com.crm.controller;

import com.crm.dto.response.ApiResponse;
import com.crm.model.Task;
import com.crm.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<ApiResponse<Task>> createTask(
            @RequestParam String title,
            @RequestParam(required = false) String description,
            @RequestParam Long assignedToId,
            @RequestParam Long createdById,
            @RequestParam(required = false) String entityType,
            @RequestParam(required = false) Long entityId,
            @RequestParam(required = false) String dueDate,
            @RequestParam(required = false) Task.TaskPriority priority) {
        LocalDateTime due = dueDate != null ? LocalDateTime.parse(dueDate) : null;
        Task task = taskService.createTask(title, description, assignedToId,
                createdById, entityType, entityId, due, priority);
        return ResponseEntity.ok(ApiResponse.success(task, "Task created"));
    }

    @PostMapping("/{id}/complete")
    public ResponseEntity<ApiResponse<Task>> complete(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(taskService.completeTask(id), "Task completed"));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponse<List<Task>>> getByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(ApiResponse.success(taskService.getTasksByUser(userId), "Success"));
    }

    @GetMapping("/entity")
    public ResponseEntity<ApiResponse<List<Task>>> getByEntity(
            @RequestParam String entityType, @RequestParam Long entityId) {
        return ResponseEntity.ok(ApiResponse.success(
                taskService.getTasksByEntity(entityType, entityId), "Success"));
    }
}