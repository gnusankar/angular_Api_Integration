import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgComponentOutlet } from '@angular/common';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageOneComponent } from '../page-one/page-one.component';
import { DeferTestComponent } from '../defer-test/defer-test.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports:[NgComponentOutlet, AsyncPipe, CommonModule, PageOneComponent, DeferTestComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  value: boolean = false

 componentList = inject(CommonService).getDynamicComponents();

currentComIndex: number = 0;

allProducts$!: any;
constructor(private http: HttpClient) {
  
}
ngOnInit() {
   this.getAllProduct().subscribe((data) => {
    this.allProducts$ = data;
  })
}

getAllProduct() {
  return this.http.get("https://dummyjson.com/products");
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
