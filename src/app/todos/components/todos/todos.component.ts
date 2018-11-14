import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfirmComponent } from '../modals/confirm.component';
import { AddNewComponent } from '../modals/add-new.component';
import { EditComponent } from '../modals/edit.component';
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
    this.todosService.editTodo(id, { "completed": true })
    .subscribe((res: any) => {
      this.ngOnInit();
      this.snackbar.open('Todo Completed!', null, { duration: 1500 })
    })
  }

  resetTodo(id, index) {
    this.todosService.editTodo(id, {"completed": false})
    .subscribe((res: any) => {
      this.ngOnInit();
      this.snackbar.open('Todo Restored', null, { duration: 1500 })
    })
  }

  editTodo(todo) {
    const dialogRef = this.dialog.open(EditComponent, { data: { todo }});

    dialogRef.afterClosed().subscribe(res => { 
      if(res) {
        this.todosService.editTodo(todo._id, { text : res.todo.text }).subscribe(res => {
          this.snackbar.open('Todo Updated!', null, { duration: 1500 })
        })
      }
    })
  }

  addTodo() {
    const dialogRef = this.dialog.open(AddNewComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.todosService.addTodo({ text: res }).subscribe(res => this.ngOnInit());
      }
    })
    
  }

  removeTodo(todo, index) {
    const dialogRef = this.dialog.open(ConfirmComponent,{ data: { todo }});

    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.todosService.deleteTodo(todo._id).subscribe(res => this.ngOnInit());
      } 
    })
  }

}
