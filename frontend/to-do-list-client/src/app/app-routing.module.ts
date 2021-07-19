import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './auth-gaurd.service';
import { CreateToDoTaskComponent } from './create-to-do-task/create-to-do-task.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TaskToDoComponent } from './task-to-do/task-to-do.component';
import { UpdateToDoTaskComponent } from './update-to-do-task/update-to-do-task.component';

const routes: Routes = [
  {path:'', component : TaskToDoComponent ,canActivate:[AuthGaurdService]  },
  {path:'taskToDo', component : TaskToDoComponent ,canActivate:[AuthGaurdService]  },
  {path: 'create-taskToDo', component : CreateToDoTaskComponent ,canActivate:[AuthGaurdService] },
  {path: 'update-toDoTask/:id', component : UpdateToDoTaskComponent ,canActivate:[AuthGaurdService] },
  {path: 'login', component : LoginComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
