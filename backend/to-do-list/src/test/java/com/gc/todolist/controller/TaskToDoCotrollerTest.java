package com.gc.todolist.controller;

import java.util.ArrayList;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;

import com.gc.todolist.model.TaskToDo;
import com.sun.security.auth.UserPrincipal;

public class TaskToDoCotrollerTest {

	
	TaskToDoController taskToDoController;

	
	@Before(value = "")
	public void initialSetUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		UserPrincipal user = new UserPrincipal("test");
		TaskToDoController todoController = new TaskToDoController();
	}
	
	
	//TODO: Implementation of unit test is pending
	
	
	@Test
	public void getTodoListByUserId() {
		TaskToDo taskToDo = new TaskToDo();
		List<TaskToDo> todoData = new ArrayList<>();
				todoData.add(taskToDo);
		//when(TaskToDoController.getTaskToDoDetils()).thenReturn(todoData);
		//List<TaskToDo> toDos = TaskToDoController.getTaskToDoDetils();
		//assertEquals(1, todos.size());
		
			
				
	}
}
