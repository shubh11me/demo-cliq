import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  input = "";
  subjectList = [];
  constructor() { }
  add() {

    this.names.push(this.input)
  }
  names = ['shubh', 'swal', 'sej', 'vaish'];
  show: boolean = true;

  phrase = "good sac";
  ngOnInit(): void {
  }
  getItem(s) {
    this.subjectList = s;
    console.log(this.subjectList);
  }
}
