import {ActionCreator, TypedAction} from '@ngrx/store/src/models';

export interface CustomActionModel<T, J extends string> extends TypedAction<string> {

  readonly type: string;

  payload?: T;

  getInstance(): ActionCreator<J, () => TypedAction<J>>;
}
