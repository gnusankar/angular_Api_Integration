import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponent } from './ag-grid.component';
import { AgGridAngular } from 'ag-grid-angular';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridComponent],
      imports: [AgGridAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set input values correctly', () => {
    // Set input values
    component.rowData = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
    component.columnDefs = [{ headerName: 'ID', field: 'id' }, { headerName: 'Name', field: 'name' }];
    component.pagination = true;
    component.paginationPageSize = 10;
    component.paginationPageSizeSelector = [5, 10, 20];
    component.defaultColDef = { sortable: true, filter: true };
    component.rowSelection = 'multiple';
    component.themeClass = 'dark-theme';

    // Check if input values are set correctly
    expect(component.rowData).toEqual([{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }]);
    expect(component.columnDefs).toEqual([{ headerName: 'ID', field: 'id' }, { headerName: 'Name', field: 'name' }]);
    expect(component.pagination).toEqual(true);
    expect(component.paginationPageSize).toEqual(10);
    expect(component.paginationPageSizeSelector).toEqual([5, 10, 20]);
    expect(component.defaultColDef).toEqual({ sortable: true, filter: true });
    expect(component.rowSelection).toEqual('multiple');
    expect(component.themeClass).toEqual('dark-theme');
  });
});
