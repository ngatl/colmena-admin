import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SDKBrowserModule } from '../../../../packages/admin-lb-sdk/src'
import { AdminUiModule } from '../../../../packages/admin-ui/src'

@NgModule({
  imports: [
    CommonModule,
    AdminUiModule,
    SDKBrowserModule.forRoot(),
  ],
  exports: [
    CommonModule,
    AdminUiModule,
  ]
})
export class AppSharedModule {}

export * from '../../../../packages/admin-lb-sdk'
