import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputValue = '0';
  private op = '';
  private result : any;
  private isOP = false;
  color = '';

 /*  getColorInput(data:any){
    this.color = data;
    console.log( data );
  } */

  getColor(color : any){
    this.color = color;
  }

  getOp( data : any ) {
    console.log(data);
    this.op = data;
    this.isOP = true;
  }

  getP() {
    if( !this.inputValue.includes('.') ){ this.inputValue = this.inputValue + '.' };
  }

  getNumber( data : any ){



    if(!this.isOP){

      if( this.inputValue.includes('.') ){
        this.inputValue += data;
      }else{
        this.inputValue = data;
      }

    }else{

      this.result = this.calcul(this.op, this.inputValue, data);
      this.inputValue = data;

    }

    this.isOP = false;

    console.log('res ---->', this.result);
  }



  calcul( op:string , number1:string , number2:string ) : number {
    if( op == "+" ){
      return ( this.result = Number(number1) + Number(number2) );
    }
    if( op == "-" ){
      return ( this.result = Number(number1) - Number(number2) );
    }
    if( op == "/" ){
      return ( this.result = Number(number1) / Number(number2) );
    }
    if( op == "*" ){
      return ( this.result = Number(number1) * Number(number2) );
    }

    return 0;
  }

  reset(){
    this.inputValue = '0';
    this.isOP = false;
  }

  calc(){
    this.inputValue = this.result;
    this.isOP = false;
  }



}
