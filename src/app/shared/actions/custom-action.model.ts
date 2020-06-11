import {Action} from '@ngrx/store';
import {ActionCreator, TypedAction} from '@ngrx/store/src/models';

export interface CustomActionModel<T, J extends string> extends Action {

  payload?: T;

  getInstance(): ActionCreator<J, () => TypedAction<J>>;
}
