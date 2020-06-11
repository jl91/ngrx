import {UsersActionsTypesEnum} from './users-actions-types.enum';
import {CustomActionModel} from './custom-action.model';
import {createAction, props} from '@ngrx/store';
import {User} from '../../core/model/user.model';

export class AllUsersResponseAction implements CustomActionModel<Array<User>, UsersActionsTypesEnum.LOADED> {

  public type: UsersActionsTypesEnum.LOADED;

  constructor(
    public payload?: Array<User>
  ) {
  }

  getInstance(): any {
    return createAction(
      this.type,
      props<{ payload: Array<User> }>()
    );
  }

}
