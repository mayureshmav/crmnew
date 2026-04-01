package com.crm.service;

import com.crm.exception.ResourceNotFoundException;
import com.crm.model.*;
import com.crm.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public Task createTask(String title, String description, Long assignedToId,
                           Long createdById, String entityType, Long entityId,
                           LocalDateTime dueDate, Task.TaskPriority priority) {
        User assignedTo = userRepository.findById(assignedToId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        User createdBy = userRepository.findById(createdById)
                .orElseThrow(() -> new ResourceNotFoundException("Creator not found"));

        Task task = Task.builder()
                .title(title)
                .description(description)
                .assignedTo(assignedTo)
                .createdBy(createdBy)
                .linkedEntityType(entityType)
                .linkedEntityId(entityId)
                .dueDate(dueDate)
                .priority(priority)
                .build();
        return taskRepository.save(task);
    }

    public Task completeTask(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));
        task.setStatus("COMPLETED");
        task.setCompletedAt(LocalDateTime.now());
        return taskRepository.save(task);
    }

    public List<Task> getTasksByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return taskRepository.findByAssignedTo(user);
    }

    public List<Task> getTasksByEntity(String entityType, Long entityId) {
        return taskRepository.findByLinkedEntityTypeAndLinkedEntityId(entityType, entityId);
    }
}
