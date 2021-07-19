import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskToDo } from '../task-to-do';
import { TaskToDoService } from '../task-to-do.service';

@Component({
  selector: 'app-create-to-do-task',
  templateUrl: './create-to-do-task.component.html',
  styleUrls: ['./create-to-do-task.component.css'], providers: [DatePipe]
})
export class CreateToDoTaskComponent implements OnInit {
  taskToDo : TaskToDo = new TaskToDo();
  myDate = new Date();
  constructor(private taskToDoService : TaskToDoService ,private router: Router ,private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  saveToDO(){
    this.taskToDo.startDate =this.myDate
    this.taskToDo.modifiedDate =this.myDate
    this.taskToDoService.createTaskToDo(this.taskToDo).subscribe( data =>{
      console.log(data);
      this.goToTaskToDoList();
    },
    error => console.log(error));
  }
  goToTaskToDoList(){
    this.router.navigate(['/taskToDo']);
  }

  onSubmit(){
    console.log(this.taskToDo);
    this.saveToDO();
  }

}
