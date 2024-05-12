import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

describe('CommonService', () => {
  let service: CommonService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonService]
    });
    service = TestBed.inject(CommonService);
    mockHttp = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getStudent data api', () => {
    let mockData = [{id: 1, name: "siva", age: 10}]
     service.getStudentData().subscribe( data => {
      expect(data).toEqual(mockData)
     })

     let req = mockHttp.expectOne(service.getUrl);
     expect(req.request.method).toEqual('GET')
     req.flush(mockData)
    
  })
  it('get dynamic componets', () => {
    let components = [{
      component: PageOneComponent,
      inputs: { name: 'siva', dob: 10 },
    },
    {
      component: PageTwoComponent,
      inputs: { name: 'sankar', dob: 20 },
    },
  ]
    expect(service.getDynamicComponents()).toEqual(components)
  })
});
