import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { AccountService } from '../account.service';
import * as AccountInfoActions from './account-info.actions';
import { Store } from '@ngrx/store';
import { selectAccountInfoState } from './account-info.reducer';

@Injectable({
  providedIn: 'root',
})
export class AccountInfoEffects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private accountService: AccountService
  ) {
    // Effects workaround
    // getAccountInfo
    this.actions$
      .pipe(ofType(AccountInfoActions.getAccountInfo))
      .subscribe((action) => {
        this.accountService.getCurrentUser().subscribe({
          next: (res) =>
            this.store.dispatch(
              AccountInfoActions.getAccountInfoSuccess({ userInfo: res })
            ),
          error: (err) =>
            this.store.dispatch(
              AccountInfoActions.getAccountInfoError({ error: err })
            ),
        });
      });

      // updateAccount Info
      this.actions$
      .pipe(ofType(AccountInfoActions.updateAccountInfo))
      .subscribe((action) => {
        this.accountService.updateCurrentUser(action.updateRequest).subscribe({
          next: (res) =>
            this.store.dispatch(
              AccountInfoActions.updateAccountInfoSuccess({ userInfo: res })
            ),
          error: (err) =>
            this.store.dispatch(
              AccountInfoActions.updateAccountInfoError({ error: err })
            ),
        });
      });

    this.actions$.subscribe(console.log);
    this.store.select(selectAccountInfoState).subscribe(console.log);
  }

  // Not Working in Stackblitz
  // getAccountInfo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAccountInfo),
  //     switchMap(() =>
  //       this.accountService.getCurrentUser().pipe(
  //         map((userInfoResponse) =>
  //           getAccountInfoSuccess({ userInfo: userInfoResponse })
  //         ),
  //         catchError((error) => of(getAccountInfoError({ error })))
  //       )
  //     )
  //   )
  // );
}
