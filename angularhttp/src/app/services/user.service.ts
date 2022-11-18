import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  //2º -- readonly moreParams = ['test', 'test2'];

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  getUsers(): Observable<User[]> {
    //-----HTTP Headers-------
    //let myHeaders = new HttpHeaders({ myheader: 'headervalue' });
    //myHeaders = myHeaders.set('id', '1234');
    //myHeaders = myHeaders.append('id', '0001');
    //return this.http.get<User[]>(`${this.apiUrl}/users`, {
    //  headers: myHeaders,
    //});

    //-----HTTP Params--------
    //1st way -- let myParams = new HttpParams({}).set('page', '5').set('sort', 'true');
    //1 -- myParams = myParams.append('name', 'thiago');
    //1 -- myParams = myParams.append('name', 'maria');

    //2nd way -- const theParams = { ['testList']: this.moreParams };
    //2º -- let myParams = new HttpParams({ fromObject: theParams });

    //return this.http.get<User[]>(`${this.apiUrl}/users`, { params: myParams,});

    //-----Default------------
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  createUser(payload: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, payload);
  }

  updateUser(payload: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${payload.id}`, payload);
  }

  patchUser(payload: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${payload.id}`, payload);
  }

  deleteUser(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.apiUrl}/users/${id}`);
  }
}
