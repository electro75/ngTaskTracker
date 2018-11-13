import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public activeTodos = []
  public completedTodos = []

  constructor(private todosService: TodosService) { }

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
      
    })
  }

  resetTodo(id, index) {
    this.completedTodos.splice(index, 1)
    this.todosService.transferTask(id, {"completed": false})
    .subscribe((res: any) => {
      this.activeTodos.push(res.todo);
    })
  }

}
