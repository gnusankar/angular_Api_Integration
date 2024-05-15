import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
  standalone: true
})
export class PageOneComponent {

  @Input() name!: string;
  @Input() dob!: number;

  // ngOnInit() {
  //   console.log("-------------deferable view omponet")
  // }
}
