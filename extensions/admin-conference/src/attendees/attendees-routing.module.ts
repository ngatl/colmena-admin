import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AttendeesComponent } from './components/attendees.component'
import { AttendeesIndexComponent } from './components/attendees-index.component'
import { AttendeeFormComponent } from './components/attendee-form.component'

export const routes: Routes = [ {
  path: '',
  data: {
    title: 'Attendees',
  },
  component: AttendeesIndexComponent,
  children: [
    { path: '', component: AttendeesComponent, data: { title: 'Attendees' } },
    { path: 'add', component: AttendeeFormComponent, data: { title: 'Add' } },
    { path: ':id', component: AttendeeFormComponent, data: { title: 'Edit' } },
  ],
} ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendeesRoutingModule { }
