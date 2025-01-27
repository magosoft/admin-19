import { Component } from '@angular/core';
import { TopbarComponent } from "./topbar.component";
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, TopbarComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
  constructor(public layoutService: LayoutService) {

  }
}
