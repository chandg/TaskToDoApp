package com.gc.todolist.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.gc.todolist.model.TaskToDo;


@Repository
public interface TaskToDoRepo extends JpaRepository<TaskToDo, Long>{

	@Query("SELECT p FROM TaskToDo p WHERE username = :username")
	public List<TaskToDo> findByUsername(String username);
}
