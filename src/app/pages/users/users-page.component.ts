import {AfterViewInit, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {User} from '../../core/model/user.model';
import {Observable} from 'rxjs';
import {AllUsersRequestAction} from '../../shared/actions/all-users-request.action';
import {UserState} from '../../shared/states/user.state';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: [
    './users-page.component.scss'
  ]
})
export class UsersPageComponent implements OnInit, AfterViewInit {

  users$: Observable<Array<User>>;

  constructor(
    private store: Store<UserState>
  ) {
    this.selectUsers();
  }

  private selectUsers(): void {
    this.users$ = this.store.pipe(
      select(state => state.users)
    );
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.store.dispatch(new AllUsersRequestAction());
  }
}
