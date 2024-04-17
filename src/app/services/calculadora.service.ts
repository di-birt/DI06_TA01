import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  sumarService(a: number, b: number): number {
    return a + b;
  }

  sumarService2(a: number, b: number): number {
    return a + b;
  }
}
