import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskToDo } from '../task-to-do';
import { TaskToDoService } from '../task-to-do.service';

@Component({
  selector: 'app-update-to-do-task',
  templateUrl: './update-to-do-task.component.html',
  styleUrls: ['./update-to-do-task.component.css'], providers: [DatePipe]
})
export class UpdateToDoTaskComponent implements OnInit {

  id: number;
  taskToDo : TaskToDo = new TaskToDo();
  myDate = new Date();
  constructor(private taskToDoService : TaskToDoService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.taskToDoService.getTaskToDoById(this.id).subscribe(data => {
      this.taskToDo = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.taskToDo.modifiedDate =this.myDate
    this.taskToDoService.updateToDoTask(this.taskToDo).subscribe( data =>{
      this.goToTaskToDoList();
    }
    , error => console.log(error));
  }
  goToTaskToDoList(){
    this.router.navigate(['/taskToDo']);
  }


}
