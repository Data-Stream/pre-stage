import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() name:string;
  @Input() message:string;
  @Input() img:string;
  @Input() date:string;

  constructor() { }

  ngOnInit(): void {
  }

}