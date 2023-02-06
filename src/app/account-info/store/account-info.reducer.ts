import { Action, createReducer, on } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountInfo } from '../account.service';
import * as actions from './account-info.actions';

export const accountInfoFeatureKey = 'accountInfo';

// State
export interface AccountInfoState {
  accountInfo: AccountInfo | null;
}

export const initialState: AccountInfoState = {
  accountInfo: null,
};

// Reducers
const featureReducer = createReducer(
  initialState,
  on(actions.getAccountInfo, (state, action) => ({
    ...state,
    accountInfo: null,
  })), // clear state
  on(actions.getAccountInfoSuccess, (state, action) => ({
    ...state,
    accountInfo: action.userInfo,
  })),
  on(actions.updateAccountInfoSuccess, (state, action) => ({
    ...state,
    accountInfo: {
      ...state.accountInfo,
      username: action.userInfo.username,
      language: action.userInfo.language,
    },
  })),
  on(actions.incrementNotifications, (state) => ({
    ...state,
    accountInfo: {
      ...state.accountInfo,
      notificationCount: state.accountInfo.notificationCount + 1,
    },
  })),
  on(actions.clearNotifications, (state) => ({
    ...state,
    accountInfo: {
      ...state.accountInfo,
      notificationCount: 0,
    },
  }))
);
export function accountInfoReducer(state: AccountInfoState, action: Action) {
  return featureReducer(state, action);
}

// Selectors
export const selectAccountInfoState = createFeatureSelector<AccountInfoState>(
  accountInfoFeatureKey
);

export const selectAccountInfo = createSelector(
  selectAccountInfoState,
  (state: AccountInfoState) => state.accountInfo
);
