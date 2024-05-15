import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-test',
  standalone: true,
  imports: [],
  templateUrl: './defer-test.component.html',
  styleUrl: './defer-test.component.css'
})
export class DeferTestComponent {

  
 ngOnInit() {
  console.log('deferteting')
 }
}
