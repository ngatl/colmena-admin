import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

/**
 * Step 1: Add a route to lazy load your extension
 */
const routes: Routes = [
  // { path: 'starter', loadChildren: '@colmena/module-admin-starter#StarterModule' },
]

/**
 * Step 2: Import the *ConfigModule from your extension
 */
// import { StarterConfigModule } from '@colmena/module-admin-starter'

/**
 * Step 3: Add the *ConfigModule from your extension to the Imports array
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // StarterConfigModule
  ],
})
export class ExtensionsModule {}
