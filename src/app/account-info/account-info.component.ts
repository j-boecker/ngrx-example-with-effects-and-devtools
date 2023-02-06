import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountInfo, AccountUpdateRequest } from './account.service';
import {
  clearNotifications,
  getAccountInfo,
  incrementNotifications,
  updateAccountInfo,
  updateAccountInfoSuccess,
} from './store/account-info.actions';
import { AccountInfoEffects } from './store/account-info.effects';
import { selectAccountInfo } from './store/account-info.reducer';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  $accountInfo: Observable<AccountInfo>;
  mockAccountInfo: AccountInfo = {
    role: 'ADMIN updated',
    username: 'UserName1 updated',
    notificationCount: 10,
    language: 'DE',
  };

  constructor(
    private store: Store,
    private accountEffects: AccountInfoEffects
  ) {}

  ngOnInit() {
    this.store.dispatch(getAccountInfo());
    this.$accountInfo = this.store.select(selectAccountInfo);
  }

  update() {
    const request: AccountUpdateRequest = {
      username: 'New Username',
      language: 'DE',
    };
    this.store.dispatch(updateAccountInfo({ updateRequest: request }));
  }

  refresh() {
    this.store.dispatch(getAccountInfo());
  }

  incrementNotifications() {
    this.store.dispatch(incrementNotifications());
  }

  clearNotifications() {
    this.store.dispatch(clearNotifications());
  }
}
