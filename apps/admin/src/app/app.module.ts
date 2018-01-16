import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NxModule } from '@nrwl/nx'
import { AuthModule } from '../../../../modules/admin/auth/src'
import { EventsModule } from '../../../../modules/admin/content/src/events/events.module'
import { ContentModule } from '../../../../modules/admin/content/src'
import { PagesModule } from '../../../../modules/admin/content/src/pages/pages.module'
import { PostsModule } from '../../../../modules/admin/content/src/posts/posts.module'
import { ProductsModule } from '../../../../modules/admin/content/src/products/products.module'
import { DashboardModule } from '../../../../modules/admin/dashboard/src'
import { SystemModule } from '../../../../modules/admin/system/src'

import { AdminLayoutModule } from '../../../../packages/admin-layout'
import { LoopBackConfig } from '../../../../packages/admin-lb-sdk'
import { SDKBrowserModule } from '../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../packages/admin-ui/'

import { environment } from '../environments/environment'
import { adminRoutes } from './app-routing.module'
import { AppComponent } from './app.component'

import { NotFoundComponent } from './components/not-found/not-found.component'
import { RouterComponent } from './components/router/router.component'
import { AppService } from './services/app.service'

import { AppEffects, reducers, reducersConfig } from './state'

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    adminRoutes,
    StoreModule.forRoot(reducers, reducersConfig),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    SDKBrowserModule.forRoot(),
    AdminLayoutModule,
    // AuthModule,
    // ContentModule,
    // DashboardModule,
    // SystemModule,
    AdminUiModule.forRoot(),
    // EventsModule,
    // PagesModule,
    // PostsModule,
    // ProductsModule,
  ],
  declarations: [AppComponent, NotFoundComponent, RouterComponent],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {
  static configureLoopBack() {
    const { version, baseUrl } = environment.api
    LoopBackConfig.setBaseURL(baseUrl)
    LoopBackConfig.setApiVersion(version)
    console.log(`Configure API: ${baseUrl}/${version}`)
  }

  constructor(private appService: AppService) {
    AppModule.configureLoopBack()
    this.appService.fetchSettings()
    this.appService.fetchDomains()
  }
}
