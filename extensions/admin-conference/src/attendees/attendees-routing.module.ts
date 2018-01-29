import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AttendeeComponent } from './components/attendee.component'
import { AttendeesComponent } from './components/attendees.component'
import { AttendeesIndexComponent } from './components/attendees-index.component'

export const routes: Routes = [ {
  path: '',
  data: {
    title: 'Attendees',
  },
  component: AttendeesIndexComponent,
  children: [
    { path: '', component: AttendeesComponent, data: { title: 'Attendees' } },
    { path: ':id', component: AttendeeComponent, data: { title: 'Attendee' } },
  ],
} ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendeesRoutingModule { }
