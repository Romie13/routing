import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/operators/retry';
@Injectable()
export class MockDataServiceService {

  constructor(private http: HttpClient) { }

  getMockData(id: number): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/' + id); // .retry(3);
  }


}
