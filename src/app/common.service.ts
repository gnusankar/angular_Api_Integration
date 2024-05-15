import { Injectable, Type, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  getUrl = "https://freetestapi.com/api/v1/students";

  http = inject(HttpClient)


  getStudentData() {
    return this.http.get(this.getUrl);
  }

  getDynamicComponents() {
    return [
      {
        component: PageOneComponent,
        inputs: { name: 'siva', dob: 10 },
      },
      {
        component: PageTwoComponent,
        inputs: { name: 'sankar', dob: 20 },
      },
    ] as any[]
  }
}


