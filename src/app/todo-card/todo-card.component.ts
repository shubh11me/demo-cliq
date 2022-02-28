import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {
  @Input() todoData:any;

  @Output() deleter=new EventEmitter();
  constructor() { }
cardTitle;
cardDesc;
  ngOnInit(): void {
    this.cardTitle=this.todoData.title;
    this.cardDesc=this.todoData.description;
  }
  delete(e){
    this.deleter.emit(e);
  }
}
