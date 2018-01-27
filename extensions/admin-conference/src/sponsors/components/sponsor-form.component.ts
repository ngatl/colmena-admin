import { Component } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'
import { UiService } from '../../../../../packages/admin-ui/src'
import { ConferenceSponsor, SponsorsService } from '../sponsors.service'

@Component({
  selector: 'app-conference-sponsor-form',
  template: `
    {{item}}
  `,
})
export class SponsorFormComponent {

  config: any
  itemId: string
  item: ConferenceSponsor

  constructor(private conferenceService: SponsorsService,
              private uiService: UiService,
              private route: ActivatedRoute,
              private router: Router,) {
    this.config = this.conferenceService.getSponsorFields()
    this.itemId = this.route.snapshot.params['id']

    if (this.itemId) {
      this.conferenceService.findSponsor(this.itemId)
        .subscribe((res: ConferenceSponsor) => {
          this.item = res
        })
    } else {
      this.item = new ConferenceSponsor()
    }
  }


  private handleAction(action) {
    switch (action.type) {
      case 'save':
        return this.conferenceService
          .upsertSponsor(Object.assign({}, action.payload, {id: this.itemId}))
          .subscribe(() => {
            this.uiService.alerts.notifySuccess({ title: 'Sponsor saved', body: '' })
            this.handleAction({type: 'cancel'})
          }, (err) => this.uiService.alerts.notifyError({ title: 'Error deleting item', body: err.message }))
      case 'cancel':
        return this.router.navigate(['/conference/sponsors/'])
      default:
        console.log('Unknown action', action)
    }
  }
}
