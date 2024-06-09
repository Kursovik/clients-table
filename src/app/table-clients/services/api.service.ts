import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService<T> {
  private apiUrl = 'https://test-data.directorix.cloud/task1'
  private readonly http = inject(HttpClient);

  public getAll(): Observable<T>{
    return this.http.get<T>(this.apiUrl)
  }

}
