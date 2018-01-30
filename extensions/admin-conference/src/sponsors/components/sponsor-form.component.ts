import { Component } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'
import { UiService } from '../../../../../packages/admin-ui/src'
import { ConferenceSponsor, SponsorsService } from '../sponsors.service'

@Component({
  selector: 'app-conference-sponsor-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></ui-form>
      </div>
      <div class="col-md-6" *ngIf="item">
        <app-conference-sponsor [item]="item"></app-conference-sponsor>
      </div>
    </div>
  `,
})
export class SponsorFormComponent {

  config: any
  itemId: string
  item: ConferenceSponsor = new ConferenceSponsor()
  public formConfig: any = {}


  constructor(private service: SponsorsService,
              private uiService: UiService,
              private route: ActivatedRoute,
              private router: Router,) {
    this.config = this.service.getSponsorFields()
    this.itemId = this.route.snapshot.params['id']
    this.formConfig = this.service.getFormConfig()

    if (this.itemId) {
      this.service.findSponsor(this.itemId)
        .subscribe((res: ConferenceSponsor) => {
          this.item = res
        })
    } else {
      this.item = new ConferenceSponsor()
    }
  }


  private handleAction(action) {
    switch (action['action']) {
      case 'save':
        return this.service
          .upsertSponsor(Object.assign({}, action.item, {id: this.itemId}))
          .subscribe(() => {
            this.uiService.alerts.notifySuccess({ title: 'Sponsor saved', body: '' })
            this.handleAction({action: 'cancel'})
          }, (err) => {
            console.log(err)
            this.uiService.alerts.notifyError({ title: 'Error saving item', body: err.message })
          })
      case 'cancel':
        return this.router.navigate(['/conference/sponsors/'])
      default:
        console.log('Unknown action', action)
    }
  }
}
