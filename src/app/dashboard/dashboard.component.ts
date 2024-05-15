import { Component, inject } from '@angular/core';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // title = 'agGridProject';

  commonService: CommonService = inject(CommonService);
  studentArray: Array<any> = [];
  dataSubscription!: Subscription;

  ragCellClassRules: any = {
    "rag-green": (params: any) => params.value === true,
  };


  public columnDefs: any[] = [
    {
      field: "name",
      checkboxSelection: true,
      editable: true,
      flex: 1
    },
    { field: "age", flex: 1 },
    { field: "gender", filter: "agNumberColumnFilter" ,  flex: 1},
    {
      field: "email", flex: 1
    },
    {
      field: "gpa",
      cellClassRules: this.ragCellClassRules,
      flex: 1
    },
  ];

  
  public rowSelection: "single" | "multiple" = "multiple";
  


  ngOnInit() {
    this.dataSubscription = this.commonService.getStudentData().subscribe((data: any) => {
      this.studentArray = data;
    });
  }


  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
