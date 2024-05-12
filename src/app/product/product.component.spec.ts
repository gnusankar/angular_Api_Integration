import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { CommonService } from '../common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let common: CommonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductComponent, HttpClientTestingModule, NgComponentOutlet],
      providers:[CommonService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    common = TestBed.inject(CommonService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
