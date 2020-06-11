import {UsersActionsTypesEnum} from './users-actions-types.enum';
import {CustomActionModel} from './custom-action.model';
import {createAction} from '@ngrx/store';
import {User} from '../../core/model/user.model';

export class AllUsersRequestAction implements CustomActionModel<Array<User>, UsersActionsTypesEnum.ALL> {

  public type: UsersActionsTypesEnum.ALL;

  constructor() {
  }

  getInstance(): any {
    return createAction(
      this.type
    );
  }

}
