import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ComponentsModule } from "../../components/components.module";

//shared components
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [ComponentsModule, CommonModule, SharedModule],
  templateUrl: './GCEPD-page.component.html',
  styleUrl: './GCEPD-page.component.css'
})
export class GCEPD_PageComponent {

}
