import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutFullComponent } from '../../../../packages/admin-layout'

import { ConferenceModule } from '../../../../extensions/admin-conference/src'
import { SpeakersModule } from '../../../../extensions/admin-conference/src/speakers/speakers.module'
import { SponsorsModule } from '../../../../extensions/admin-conference/src/sponsors/sponsors.module'

/**
 * Step 1: Add a route to lazy load your extension
 */
const routes: Routes = [
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      // { path: 'starter', loadChildren: '@colmena/module-admin-starter#StarterModule' },
      { path: 'conference', loadChildren: '../../../../extensions/admin-conference/src/conference.module#ConferenceModule'}
    ],
  },


]

/**
 * Step 2: Import the *ConfigModule from your extension
 */
// import { StarterConfigModule } from '@colmena/module-admin-starter'
import { ConferenceConfigModule } from '../../../../extensions/admin-conference/src'
/**
 * Step 3: Add the *ConfigModule from your extension to the Imports array
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // StarterConfigModule
    // ConferenceModule,
    ConferenceConfigModule
  ],
})
export class ExtensionsModule {}
