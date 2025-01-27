import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }
  onMenuToggle() {

  }
  isDesktop() {
    return window.innerWidth > 991;
  }
}
