import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { AccountInfo, AccountUpdateRequest } from '../account.service';

export const getAccountInfo = createAction(
  '[Account Info] Load Account Info [START]'
);

export const getAccountInfoSuccess = createAction(
  '[Account Info] Load Account Info [SUCCESS]',
  props<{ userInfo: AccountInfo }>()
);

export const getAccountInfoError = createAction(
  '[Account Info] Load Account Info [ERROR]',
  props<{ error: any }>()
);

export const updateAccountInfo = createAction(
  '[Account Info] Update Account Info [START]',
  props<{ updateRequest: AccountUpdateRequest }>()
);

export const updateAccountInfoSuccess = createAction(
  '[Account Info] Update Account Info [SUCCESS]',
  props<{ userInfo: AccountInfo }>()
);

export const updateAccountInfoError = createAction(
  '[Account Info] Update Account Info [ERROR]',
  props<{ error: any }>()
);

export const incrementNotifications = createAction(
  '[Account Info] Increment Notifications'
);

export const clearNotifications = createAction(
  '[Account Info] Clear Notifications'
);
