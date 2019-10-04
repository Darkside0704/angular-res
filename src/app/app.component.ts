import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Gita';
  arrayAngka = ['siji','loro','telu']
  hasil:number;
  temp:string;
  x="";
  y="";
  appComponent(){

  }
  add(){
    if(this.x != "" && this.y != "")
    this.hasil = +this.x + +this.y;
    this.temp = this.hasil+""
    }
  min(){
    if(this.x != "" && this.y != "")
    this.hasil = +this.x - +this.y;
    this.temp = this.hasil+""
  }
  mul(){
    if(this.x != "" && this.y != "")
    this.hasil = +this.x * +this.y;
     this.temp = this.hasil+""
  }
  bag(){
    if(this.x != "" && this.y != "" && this.y !="0")
    this.hasil = +this.x / +this.y;
    this.temp = this.hasil+""
    if(this.y == "0")
    this.temp = "Error" ;
    }
}