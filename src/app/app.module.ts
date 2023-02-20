import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AccountInfoModule } from './account-info/account-info.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountTopNavComponent } from './account-top-nav/account-top-nav.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    AccountInfoModule,
  ],
  declarations: [AppComponent, AccountTopNavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
