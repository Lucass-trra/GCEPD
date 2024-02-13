import { Component } from '@angular/core';

//button component
import { ButtonTemplateComponent } from "../../components/button-template/button-template.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonTemplateComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
