import { NgModule } from '@angular/core'
import { Store } from '@ngrx/store'

const moduleName = 'conference'

const moduleConfig = {
  name: 'Conference',
  icon: 'icon-microphone',
  packageName: `@colmena/module-admin-${moduleName}`,
  topLinks: [{ name: 'Conference', icon: 'icon-layers', url: '/conference/' }],
  sidebarLinks: [
    { weight: 2, name: 'Conference', icon: 'icon-layers', type: 'title', url: '/conference', children: [
      { weight: 2, name: 'Attendees', icon: 'fa fa-fw fa-users', url: '/conference/attendees' },
      { weight: 2, name: 'Speakers', icon: 'icon-microphone', url: '/conference/speakers' },
      { weight: 3, name: 'Sponsors', icon: 'icon-diamond', url: '/conference/sponsors' },
      { weight: 3, name: 'Tickets', icon: 'fa fa-fw fa-ticket', url: '/conference/tickets' },
    ] },
  ],
  dashboardLinks: {
    conference: [
      { count: '', name: 'Attendees', type: 'success', icon: 'fa fa-users', url: '/conference/attendees' },
      { count: '', name: 'Speakers', type: 'info', icon: 'icon-microphone', url: '/conference/speakers' },
      { count: '', name: 'Sponsors', type: 'primary', icon: 'icon-diamond', url: '/conference/sponsors' },
      { count: '', name: 'Tickets', type: 'danger', icon: 'fa fa-ticket', url: '/conference/tickets' },
    ],
  },
}

@NgModule()
export class ConferenceConfigModule {
  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: 'APP_LOAD_MODULE', payload: { moduleName, moduleConfig } })
  }
}

