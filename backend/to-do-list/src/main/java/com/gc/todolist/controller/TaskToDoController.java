package com.gc.todolist.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gc.todolist.dao.TaskToDoRepo;
import com.gc.todolist.exception.ResourceNotFoundException;
import com.gc.todolist.model.TaskToDo;
import com.gc.todolist.model.User;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins= "http://localhost:4200")
public class TaskToDoController {
	@Autowired
	TaskToDoRepo repo;
	
	/*
	 * This method returns list of task created by user
	 * @return taskToDoList list of task created by user List<TaskToDo>.
	 */
	@GetMapping("/taskToDoDetails")
	public List<TaskToDo> getTaskToDoDetils() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		List<TaskToDo> taskToDoList = repo.findByUsername(auth.getName());
		return taskToDoList;
	}
	
	/*
	 * This method add new task to task list of user.
	 * @RequestBody taskToDo,create new task for the user.
	 */
	@PostMapping("/taskToDoDetails")
	public TaskToDo addTaskToDo(@RequestBody TaskToDo taskToDo) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		taskToDo.setUsername(auth.getName());	
		return repo.save(taskToDo);
	}
	
	/*
	 * This method returns TaskToDo details based on unique task ID.
	 * @request id, unique id for any task created by user
	 * 
	 */
	@GetMapping("/taskToDoDetails/{id}")
	public ResponseEntity<TaskToDo> getUserDetils(@PathVariable Long id) {
		TaskToDo taskToDo = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Details not found with ID "+ id));
		return ResponseEntity.ok(taskToDo);
	}
	
	/*
	 * This method updated user to do task.
	 * @request taskToDo, TaskToDo object to be updated.
	 */
	@PutMapping(path = "/taskToDoDetails")
	public ResponseEntity<TaskToDo> updateUserDetils(@RequestBody TaskToDo taskToDo ) {
		System.out.println(taskToDo);
		TaskToDo taskToDoFromDB = repo.findById(taskToDo.getId()).orElseThrow(() -> new ResourceNotFoundException("User Details not found with ID "+ taskToDo.getId()));
		taskToDoFromDB.setDescription(taskToDo.getDescription());
		taskToDoFromDB.setModifiedDate(taskToDo.getModifiedDate());
		taskToDoFromDB.setEndDate(taskToDo.getEndDate());
		taskToDoFromDB.setStatus(taskToDo.isStatus());
		repo.save(taskToDoFromDB);
		return ResponseEntity.ok(taskToDoFromDB);
	}
	
	/*
	 * This method deletes task based on unique task ID.
	 * @request id, unique id for any task created by user
	 */
	@DeleteMapping("/taskToDoDetails/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTaskToDo(@PathVariable Long id){
		TaskToDo taskToDoFromDB = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("User Details not found with ID "+ id));
		repo.delete(taskToDoFromDB);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	/*
	 * This method verifies basic-auth for user login.
	 * @return user object with success string value. 
	 */
	@GetMapping(produces = "application/json")
	@RequestMapping({ "/validateLogin" })
	public User validateLogin() {
		return new User("User successfully authenticated");
	}
    
}
