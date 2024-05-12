import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { CommonService } from '../common.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let commonService: CommonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DashboardComponent ],
      providers: [ CommonService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    commonService = TestBed.inject(CommonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should initialize properties', () => {
    // expect(component.title).toEqual('agGridProject');
    expect(component.studentArray).toEqual([]);
    expect(component.dataSubscription).toBeFalsy();
    expect(component.columnDefs).toBeDefined();
    expect(component.rowSelection).toEqual('multiple');
  });

  it('should subscribe to getStudentData on ngOnInit', () => {
    const studentData = [{ name: 'John', age: 25, gender: 'Male', gpa: 3.5 }];
    spyOn(commonService, 'getStudentData').and.returnValue(of(studentData));
    component.ngOnInit();
    expect(commonService.getStudentData).toHaveBeenCalled();
    expect(component.studentArray).toEqual(studentData);
  });

  it('should unsubscribe on ngOnDestroy', () => {
    const unsubscribeSpy = spyOn(component.dataSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
