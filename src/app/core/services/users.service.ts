import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  all(): Observable<Array<User>> {
    return this.httpClient
      .get('/assets/api/database.json')
      .pipe(
        tap(data => console.log(data)),
        map(data => data as Array<User>)
      );
  }


}
