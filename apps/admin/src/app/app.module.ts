import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { NxModule } from '@nrwl/nx'

import { LoopBackConfig } from '../../../../packages/admin-lb-sdk/src'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'

const routeConfig: ExtraOptions = {
  initialNavigation: 'enabled',
}

const routes: Routes = []

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), RouterModule.forRoot(routes, routeConfig)],
  declarations: [AppComponent],
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
