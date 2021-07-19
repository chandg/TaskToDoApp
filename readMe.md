User Detials application is built in with backend using SpringBoot and Client using Angular10.

READ ToDoListApplicationDescription.pdf file for Project Description.

Steps to Run application:

BACKEND(SPRING BOOT APPLICATION):

Clone the Repository.
WAR file with name "to-do-list-0.0.1-SNAPSHOT.war" is preset in directory "TaskToDoApp\backend" 

Open pom.xml file at TaskToDoApp\backend\to-do-list  in studio.
Run the Application as SpringBootApplication from IDE.
The Apllication Uses H2 databse : " http://localhost:8080/h2-console/ " ; Login with JDBS URL : "jdbc:h2:mem:task_to_do".

FRONTEND(ANGULAR 10 CLIENT):

Clone the repository:
open "TaskToDoApp\frontend\to-do-list-client" in an IDE.
or Run 
       ng serve in "to-do-list-client".
ERROR IN STARTING :IF getting "An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'" RUN > 
                   npm install --save-dev @angular-devkit/build-angular
Open Application On Browser @: http://localhost:4200/
Please refer Demo video for application Flow.

Test Login User:
● Username : “test” and password : "pwd123”.
● Username : “testleaduser2” with password : “87654321”
