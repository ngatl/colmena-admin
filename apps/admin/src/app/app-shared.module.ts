import { NgModule } from '@angular/core'
import { SDKBrowserModule } from '../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../packages/admin-ui/src'

@NgModule({
  imports: [
    AdminUiModule,
    SDKBrowserModule.forRoot(),
  ],
  exports: []
})
export class AppSharedModule {}

export * from '../../../../packages/admin-lb-sdk'
