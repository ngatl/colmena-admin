import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { SDKBrowserModule } from '../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../packages/admin-ui/src'

import { AuthService } from './auth.service'

import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { RecoverComponent } from './components/recover/recover.component'
import { RegisterComponent } from './components/register/register.component'
import { ResetComponent } from './components/reset/reset.component'

import { AuthRoutingModule } from './auth-routes.module'
import { AuthEffects, reducer } from './state'

@NgModule({
  imports: [
    FormsModule,
    SDKBrowserModule.forRoot(),
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([ AuthEffects ]),
    AdminUiModule,
    AuthRoutingModule,
  ],
  declarations: [LoginComponent, LogoutComponent, RecoverComponent, RegisterComponent, ResetComponent],
  providers: [AuthService],
})
export class AuthModule {
}
