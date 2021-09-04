import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputValue = 0;
  private op = '';
  private result = 0;
  private myFloat = 0.0;

  getOp( data : any ) {
    console.log(data);
    this.op = data;
  }

  getNumber( data : any ){

    if( this.op == "+" ){
      this.result = this.inputValue + Number(data);
    }
    if( this.op == "-" ){
      this.result = this.inputValue - Number(data);
    }
    if( this.op == "/" ){
      this.result = this.inputValue / Number(data);
    }
    if( this.op == "*" ){
      this.result = this.inputValue * Number(data);
    }
    if( this.op == "." ){
      this.inputValue = parseFloat(this.inputValue +'.'+ data);
    }else{
      this.inputValue = Number(data);
    }
    console.log(this.result);
  }

  reset(){
    this.inputValue = 0;
  }

  calc(){
    this.inputValue = this.result;
  }



}
