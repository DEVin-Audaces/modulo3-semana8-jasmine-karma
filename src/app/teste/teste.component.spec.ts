import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponent } from './teste.component';

describe('TesteComponent', () => { //suite
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;
  let contador = 0;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteComponent], //componentes
      imports: [
        //modulos
      ],
      providers: [
        //serviços
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(async () => {
    contador = 10;
  })

  beforeEach(async () => {
    contador++;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve incrementar o contador para 2', () => {
    expect(contador).toEqual(12);
    pending("pq n sei validar esse cenario")
  });








  // it('validar o matcher toEqual', () => {
  //   const aluno = {value: true};
  //   const professor = {value: true};

  //   expect(aluno).toEqual(professor);

  // });

  // it('validar o matcher toEqual', () => {
  //   const aluno = {value: true};
  //   const professor = {value: true};

  //   //expect(aluno).toBe(aluno); //vai passar
  //   expect(aluno).toBe(professor); //vai falhar
  // });

  // it('validar o value quando o metodo for chamado', () => {
  //   //const value = 'aluno'
  //   expect(component.transform('0')).toBe('0');
  // });

  // it('validar o cep', () => {
  //   expect("12345-678").toMatch(/^\d{5}-\d{3}$/);
  // });

  // it('should be defined', () => {
  //   let bandaBTS = 'oi';

  //   expect(bandaBTS).toBeDefined();
  // });

  // it('should be null', () => {
  //   let dinheiro = null;

  //   expect(dinheiro).toBeNull();
  // });

  // it('should be null', () => {
  //   let value = null;
  //   expect(component.transformNull(value)).toBeNull();
  // });

  // it('should be true', () => {
  //   let value = false;
  //   expect(value).not.toBeTruthy();
  // });

  // it('should be maior que 7', () => {
  //   expect(component.testTruthy(3)).not.toBeTruthy();
  // });

  // it('should be array fruits', () => {
  //  let frutas = ["maçã", "laranja", "banana", "uva"];

  //  expect(frutas).toContain("maçã");
  // });

  // it('should be Apple', () => {
  //   expect(component.shouldBeApple()).toContain('maçã');
  //   expect(component.shouldBeApple()).toContain('laranja');
  //   expect(component.shouldBeApple()).toContain('banana');
  // });

  // it('should be maior que 20', () => {
  //   expect(component.shouldBeGreater()).toBeLessThan(10);
  // });

  // it('should be toThrow', () => {
  //   expect(component.multiplicar).toThrow();
  // });

  // it('should be toThrow', () => {
  //   expect(component.multiplicar).toThrowError();
  // });

  // it('should be toThrow type', () => {
  //   expect(function() {component.soma(0,0)}).toThrowError(TypeError);
  //   expect(function() {component.soma(0,0)}).toThrowError(/maior que o/);
  // });


});
