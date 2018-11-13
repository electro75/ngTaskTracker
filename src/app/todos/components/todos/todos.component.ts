import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfirmComponent } from '../modals/confirm.component';
import { MatSnackBar, MatDialog } from '@angular/material';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public activeTodos = []
  public completedTodos = []

  constructor(private todosService: TodosService, private snackbar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.todosService.getTodos()
        .subscribe((res:any) => {
          this.activeTodos = res.todos.filter(res => !res.completed);
          this.completedTodos = res.todos.filter(res => res.completed);
        });
  }

  completeTodo(id, index) {
    this.activeTodos.splice(index, 1)
    this.todosService.transferTask(id, { "completed": true })
    .subscribe((res: any) => {
      this.completedTodos.push(res.todo)
      this.snackbar.open('Todo Completed!', null, { duration: 1500 })
    })
  }

  resetTodo(id, index) {
    this.completedTodos.splice(index, 1)
    this.todosService.transferTask(id, {"completed": false})
    .subscribe((res: any) => {
      this.activeTodos.push(res.todo);
      this.snackbar.open('Todo Restored', null, { duration: 1500 })
    })
  }

  removeTodo(todo, index) {
    const dialogRef = this.dialog.open(ConfirmComponent,{ data: { todo }});

    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.todosService.deleteTodo(todo._id).subscribe(res => {
          this.ngOnInit();
        });
      } 
    })
  }

}
