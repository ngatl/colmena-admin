import { Component } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'
import { UiService } from '../../../../../packages/admin-ui/src'
import { ConferenceTicket, TicketsService } from '../tickets.service'

@Component({
  selector: 'app-conference-ticket-form',
  template: `
    
    {{item | json}}
  `,
})
export class TicketFormComponent {

  config: any
  itemId: string
  item: ConferenceTicket

  constructor(
    private service: TicketsService,
    private uiService: UiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.config = this.service.getTicketFields()
    this.itemId = this.route.snapshot.params['id']

    if (this.itemId) {
      this.service.findTicket(this.itemId)
        .subscribe((res: ConferenceTicket) => {
          console.log(res)
          this.item = res
        })
    } else {
      this.item = new ConferenceTicket()
    }
  }

  private handleAction(action) {
    switch (action.type) {
      case 'save':
        return this.service
          .upsertTicket(Object.assign({}, action.payload, { id: this.itemId }))
          .subscribe(
            (res) => {
              console.log('res', res)
              this.uiService.alerts.notifySuccess({ title: 'Ticket saved', body: '' })
              this.handleAction({ type: 'cancel' })
            },
            (err) => {
              console.log('err', err)
            }
            )
      case 'cancel':
        return this.router.navigate(['/conference/tickets/'])
      default:
        console.log('Unknown action', action)
    }
  }
}
