import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplyComponent } from './multiply/multiply.component';
import { XultiplyComponent } from "./xultiply/xultiply.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, XultiplyComponent, MultiplyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tm-test';
}


