import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name;
  todos = [];
  todoForm: FormGroup;
  addTodo() {
    console.log(JSON.stringify(this.todoForm.value));
    this.todos.push(this.todoForm.value)
    localStorage.setItem("Todos", JSON.stringify(this.todos));
  }
  constructor(private formBuilder: FormBuilder) { }
  delete(e) {
    // console.log("form main");
    let indexOfd=this.todos.indexOf(e);
    console.log(indexOfd);
    this.todos.splice(indexOfd, 1);
  }
  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem("Todos")) || [];
    console.log(this.todos)
    this.todoForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }

}
