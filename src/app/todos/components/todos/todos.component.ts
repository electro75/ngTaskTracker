import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private todos = []

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.getTodos()
        .subscribe((res:any) => {
          this.todos = res.todos
        });
  }

}
