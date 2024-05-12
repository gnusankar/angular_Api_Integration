import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

allProducts$!: Observable<any>;
constructor(private http: HttpClient) {
  
}
ngOnInit() {
  this.allProducts$ = this.http.get("https://dummyjson.com/products");
}

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
