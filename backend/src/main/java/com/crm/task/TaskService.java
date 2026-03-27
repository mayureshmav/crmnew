package com.crm.task;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public Task create(Task task) {
        task.setStatus("PENDING");
        return repo.save(task);
    }
}