import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//shared components
import { SharedModule } from "./shared/shared.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GCEPD';
}
