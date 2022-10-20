import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  numero!: number;

  constructor() { }

  ngOnInit(): void {

  }

  transform(value: string): string{
    if(!value){
      return '-';
    }
    return value;
  }

  transformNull(value: null): null{
    if(!value){
      return null;
    }
    return value;
  }

  testTruthy(qq: number){
    if(qq > 5){
      return true;
    }
    return false;
  }

  shouldBeApple(): string[] {
    return ["maçã", "laranja", "banana"];
  }

  shouldBeGreater(): number {
    return 1;
  }

  multiplicar(): number{
    if (this.numero <= 0){
      throw new TypeError("deve ser maior que o")
    }
    return this.numero * this.numero
  }

  soma(n1:number, n2:number):number{
    if(n1 <=0 || n2 <= 0){
      throw new TypeError("deve ser maior que o")
    }
    return n1+n2;
  }






}
