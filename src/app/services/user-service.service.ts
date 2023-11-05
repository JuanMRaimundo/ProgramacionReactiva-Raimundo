import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User | any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }
}
