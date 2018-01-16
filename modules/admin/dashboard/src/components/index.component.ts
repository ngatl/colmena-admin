import { Component } from '@angular/core'
import { UiTabLink } from '../../../../../packages/admin-ui/src'

@Component({
  selector: 'app-dashboard',
  template: `
    <ui-page [tabs]="tabs">
      <router-outlet></router-outlet>
    </ui-page>
  `,
})
export class IndexComponent {
  public tabs: UiTabLink[] = [
    { icon: 'icon-grid', title: 'Overview', link: '/dashboard/index' },
    { icon: 'icon-user', title: 'Profile', link: '/dashboard/profile' },
    { icon: 'icon-key', title: 'Password', link: '/dashboard/password' },
    { icon: 'icon-info', title: 'About', link: '/dashboard/about' },
  ]
}
