import { NgModule } from '@angular/core'
import { AppSharedModule } from '../../../../../apps/admin/src/app/app-shared.module'

import { SettingsRoutingModule } from './settings-routing.module'

import { SettingsService } from './settings.service'
import { SettingResolver } from './settings.resolvers'

import { SettingDetailComponent } from './components/setting-detail.component'
import { SettingFormComponent } from './components/setting-form.component'
import { SettingHeaderComponent } from './components/setting-header.component'
import { SettingListComponent } from './components/setting-list.component'

@NgModule({
  imports: [AppSharedModule, SettingsRoutingModule],
  declarations: [SettingDetailComponent, SettingFormComponent, SettingHeaderComponent, SettingListComponent],
  providers: [SettingsService, SettingResolver],
})
export class SystemSettingsModule {}
