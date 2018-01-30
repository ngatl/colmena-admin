import { NgModule } from '@angular/core'

import { AppSharedModule } from '../../../../apps/admin/src/app/app-shared.module'

import { AttendeesService } from './attendees.service'
import { AttendeesRoutingModule } from './attendees-routing.module'

import { AttendeeComponent } from './components/attendee.component'
import { AttendeeTopComponent } from './components/attendee-top.component'
import { AttendeesIndexComponent } from './components/attendees-index.component'
import { AttendeesComponent } from './components/attendees.component'

@NgModule({
  imports: [
    AppSharedModule,
    AttendeesRoutingModule,
  ],
  declarations: [
    AttendeeComponent,
    AttendeesIndexComponent,
    AttendeesComponent,
    AttendeeTopComponent,
  ],
  providers: [
    AttendeesService,
  ]
})
export class AttendeesModule { }
