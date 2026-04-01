package com.crm.repository;

import com.crm.model.Task;
import com.crm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByAssignedTo(User user);
    List<Task> findByStatus(String status);
    List<Task> findByLinkedEntityTypeAndLinkedEntityId(String type, Long id);
    long countByStatusAndAssignedTo(String status, User user);
}