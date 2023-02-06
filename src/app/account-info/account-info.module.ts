import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './account-info.component';
import { StoreModule } from '@ngrx/store';
import {
  accountInfoReducer,
  accountInfoFeatureKey,
} from './store/account-info.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountInfoEffects } from './store/account-info.effects';
import { AccountService } from './account.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(accountInfoFeatureKey, accountInfoReducer),
    // EffectsModule.forFeature([AccountInfoEffects]),
  ],
  providers: [AccountService, AccountInfoEffects],
  declarations: [AccountInfoComponent],
  exports: [AccountInfoComponent],
})
export class AccountInfoModule {}
