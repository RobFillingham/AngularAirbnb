import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutserviceService {
  @Output() precioxNoche= new EventEmitter<number>(); 
  constructor() { }
}
