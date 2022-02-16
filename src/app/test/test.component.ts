import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public company = "Bridgelabz";
  userName:string = "Peter";
  disabled = true;
  public name = "Hello";

  public fruits = ["Apple", "Grapes", "Mango"];
  public color = "black";
  public displayName = "true";

  constructor() { }

  ngOnInit(): void {
  }

  enable(){
    this.disabled=false;

  }

}
