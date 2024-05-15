import { CellValueChangedEvent, GridReadyEvent } from "@ag-grid-community/core";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {

  @Input('rowData') rowData: any;
  @Input('columnDefs') columnDefs: any;
  @Input('pagination') pagination!: boolean;
  @Input('paginationPageSize') paginationPageSize!: number;
  @Input('paginationPageSizeSelector') paginationPageSizeSelector!: number[];
  @Input('defaultColDef') defaultColDef: any;
  @Input('rowSelection') rowSelection: any;
  @Input('themeClass') themeClass: any;


  onCellValueChanged(params: any ) {
    var changedData = [params.data];
    params.api.applyTransaction({ update: changedData });
  }

  onGridReady(params: any) {
    let gridApi = params.api;

  }
}

