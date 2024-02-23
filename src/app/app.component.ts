import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// shared components
import { SharedModule } from "./shared/shared.module";
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GCEPD';

  constructor() {  }

  
}
