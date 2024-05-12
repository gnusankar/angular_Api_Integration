import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css'],
  standalone: true
})
export class PageTwoComponent {
  
  @Input() name!: string;
  @Input() dob!: number;
}
