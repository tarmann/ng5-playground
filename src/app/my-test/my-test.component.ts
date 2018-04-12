import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  template: `hello from my my-test. Item count {{itemCount}}`,
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  itemCount: number = 4;

  constructor() { }

  ngOnInit() {
  }

}
