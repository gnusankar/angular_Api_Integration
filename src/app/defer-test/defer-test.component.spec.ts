import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferTestComponent } from './defer-test.component';

describe('DeferTestComponent', () => {
  let component: DeferTestComponent;
  let fixture: ComponentFixture<DeferTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
