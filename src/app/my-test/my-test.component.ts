import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-test',
  template: `
    <p>hello from my my-test. Item count {{itemCount}}</p>
    <p><strong>Config Name:</strong> {{ config.name }}</p>
  `,
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  itemCount: number = 4;

  config: object = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:3000/profile')
      .subscribe(data => this.config = {
        name: data['name']
      });
  }

}
