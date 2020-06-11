import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {UsersService} from '../../core/services/users.service';
import {UsersActionsTypesEnum} from '../actions/users-actions-types.enum';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {AllUsersResponseAction} from '../actions/all-users-response.action';
import {EMPTY} from 'rxjs';

@Injectable()
export class GetAllUsersEffect {

  @Effect()
  allUsersEffect$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(UsersActionsTypesEnum.ALL),
        mergeMap(() =>
          this.usersService.all()
            .pipe(
              tap(users => console.log(users)),
              map(users => new AllUsersResponseAction(users)),
              catchError(error => EMPTY)
            )
        ),
      )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
    this.actions$.subscribe(action => {
      console.log(action);
    });
  }

}
