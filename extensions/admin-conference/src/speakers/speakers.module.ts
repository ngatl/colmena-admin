import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../../../apps/admin/src/app/app-shared.module'

import { SpeakersService } from './speakers.service'
import { SpeakersRoutingModule } from './speakers-routing.module'

import { SpeakerComponent } from './components/speaker.component'
import { SpeakerFormComponent } from './components/speaker-form.component'
import { SpeakersIndexComponent } from './components/speakers-index.component'
import { SpeakersComponent } from './components/speakers.component'

@NgModule({
  imports: [
    AppSharedModule,
    SpeakersRoutingModule,
  ],
  declarations: [
    SpeakerComponent,
    SpeakerFormComponent,
    SpeakersIndexComponent,
    SpeakersComponent,
  ],
  providers: [
    SpeakersService,
  ]
})
export class SpeakersModule { }
