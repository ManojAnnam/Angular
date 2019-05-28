import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-assignment-zippy',
  templateUrl: './assignment-zippy.component.html',
  styleUrls: ['./assignment-zippy.component.css']
})
export class AssignmentZippyComponent implements OnInit {
  @Input('title') title:string;

  constructor() { }

  ngOnInit() {
  }

}
