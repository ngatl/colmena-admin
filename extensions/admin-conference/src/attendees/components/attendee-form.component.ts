import { Component } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'
import { UiService } from '../../../../../packages/admin-ui/src'
import { ConferenceAttendee, AttendeesService } from '../attendees.service'

@Component({
  selector: 'app-conference-attendee-form',
  template: `
    
    {{item | json}}
  `,
})
export class AttendeeFormComponent {

  config: any
  itemId: string
  item: ConferenceAttendee

  constructor(
    private service: AttendeesService,
    private uiService: UiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.config = this.service.getAttendeeFields()
    this.itemId = this.route.snapshot.params['id']

    if (this.itemId) {
      this.service.findAttendee(this.itemId)
        .subscribe((res: ConferenceAttendee) => {
          console.log(res)
          this.item = res
        })
    } else {
      this.item = new ConferenceAttendee()
    }
  }

  private handleAction(action) {
    switch (action.type) {
      case 'save':
        return this.service
          .upsertAttendee(Object.assign({}, action.payload, { id: this.itemId }))
          .subscribe(
            (res) => {
              console.log('res', res)
              this.uiService.alerts.notifySuccess({ title: 'Attendee saved', body: '' })
              this.handleAction({ type: 'cancel' })
            },
            (err) => {
              console.log('err', err)
            }
            )
      case 'cancel':
        return this.router.navigate(['/conference/attendees/'])
      default:
        console.log('Unknown action', action)
    }
  }
}
