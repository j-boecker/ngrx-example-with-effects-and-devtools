import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { AccountInfo } from '../account-info/account.service';
import { selectAccountInfo } from '../account-info/store/account-info.reducer';

@Component({
  selector: 'app-account-top-nav',
  templateUrl: './account-top-nav.component.html',
  styleUrls: ['./account-top-nav.component.css'],
})
export class AccountTopNavComponent implements OnInit {
  accountInfo$: Observable<AccountInfo>;
  username$: Observable<String>;
  notificationCount$: Observable<number>;
  constructor(private store: Store) {
    this.accountInfo$ = this.store.select(selectAccountInfo);
    this.username$ = this.accountInfo$.pipe(
      filter((a) => !!a),
      map((a) => a?.username)
    );
    this.notificationCount$ = this.accountInfo$.pipe(
      filter((a) => !!a),
      map((a) => a?.notificationCount)
    );
  }

  ngOnInit() {}
}
