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
          console.log(this.activeTodos);
          this.completedTodos = res.todos.filter(res => res.completed);
        });
  }

  completeTodo(id, index) {
    this.todosService.completeTask(id, { completed: true })
    // .subscribe(res => {
    //   console.log(res);
    // })
  }

}
