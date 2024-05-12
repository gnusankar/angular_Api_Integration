import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports:[NgComponentOutlet, AsyncPipe, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

 componentList = inject(CommonService).getDynamicComponents();

currentComIndex: number = 0;

  get currentComponet() {
    return this.componentList[this.currentComIndex];
  }
  

  renderTheNextComponent() {
    this.currentComIndex++;
    if (this.currentComIndex === this.componentList.length) {
      this.currentComIndex = 0;
    }
  }
}
