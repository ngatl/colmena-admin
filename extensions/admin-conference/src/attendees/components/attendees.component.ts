import { Component, ViewChild } from '@angular/core'
import { UiService } from '../../../../../packages/admin-ui/src'

import { AttendeesService } from '../attendees.service'
import { Router } from '@angular/router/';

@Component({
  selector: 'app-conference-attendees',
  template: `
    <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid>
  `,
})
export class AttendeesComponent {
  @ViewChild('grid') private grid

  constructor(
    public service: AttendeesService,
    private ui: UiService,
    private router: Router,
  ) {}

  action(event) {
    switch (event.action) {
      case 'edit':
      case 'view':
        this.router.navigate(['/conference/attendees/', event.item.id])
        break;
      default:
        return console.log('Unknown event action', event)
    }
  }
}
