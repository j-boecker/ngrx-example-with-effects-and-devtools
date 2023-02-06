import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface AccountInfo {
  username: String;
  role: String;
  notificationCount: number;
  language: String;
}

export interface AccountUpdateRequest {
  username: String;
  language: String;
}

@Injectable()
export class AccountService {
  private mockAccountInfo: AccountInfo = {
    role: 'ADMIN',
    username: 'UserName1',
    notificationCount: 1,
    language: 'DE',
  };

  constructor() {}

  getCurrentUser(): Observable<AccountInfo> {
    return of(this.mockAccountInfo).pipe(delay(500));
  }

  updateCurrentUser(request: AccountUpdateRequest): Observable<AccountInfo> {
    this.mockAccountInfo = {
      ...this.mockAccountInfo,
      username: request.username,
      language: request.language,
    };
    return of(this.mockAccountInfo).pipe(delay(500));
  }
}
