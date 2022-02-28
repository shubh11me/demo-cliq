import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  @Output() subList=new EventEmitter();
  subj="";
  subject=[];
  constructor() { }
@Input() nameList;
  ngOnInit(): void {
  }
  addSub(){
    this.subject.push(this.subj);
    this.subList.emit(this.subject);
  }


}
