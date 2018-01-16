import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NxModule } from '@nrwl/nx'
import { AuthModule } from '../../../../modules/admin/auth/src'
import { DashboardModule } from '../../../../modules/admin/dashboard/src'

import { AdminLayoutModule } from '../../../../packages/admin-layout'
import { LoopBackConfig } from '../../../../packages/admin-lb-sdk'
import { AdminUiModule } from '../../../../packages/admin-ui/'

import { environment } from '../environments/environment'
import { adminRoutes } from './app-routing.module'
import { AppComponent } from './app.component'

import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterComponent } from './components/router/router.component'

import { AppEffects, reducers, reducersConfig } from './state'

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    adminRoutes,
    StoreModule.forRoot(reducers, reducersConfig),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    AdminLayoutModule,
    // AuthModule,
    // DashboardModule,
    AdminUiModule.forRoot(),
  ],
  declarations: [AppComponent, NotFoundComponent, RouterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  static configureLoopBack() {
    const { version, baseUrl } = environment.api
    LoopBackConfig.setBaseURL(baseUrl)
    LoopBackConfig.setApiVersion(version)
    console.log(`Configure API: ${baseUrl}/${version}`)
  }

  constructor() {
    AppModule.configureLoopBack()
  }
}
