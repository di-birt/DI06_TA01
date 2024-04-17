import { Component, NgModule } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  mensaje: string = "";

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit() {}

}

