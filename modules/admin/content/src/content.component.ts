import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-content-dashboard',
  template: `
    <div class="card">
      <div class="card-header">Content</div>
      <div class="card-block">
        <div class="row">
          <!--<div class="col-md-4" *ngFor="let widget of widgets">-->
            <!--&lt;!&ndash;<ui-dashboard-icon&ndash;&gt;-->
              <!--&lt;!&ndash;[routerLink]="widget.link"&ndash;&gt;-->
              <!--&lt;!&ndash;[count]="widget.count"&ndash;&gt;-->
              <!--&lt;!&ndash;[icon]="widget.icon"&ndash;&gt;-->
              <!--&lt;!&ndash;[label]="widget.label"&ndash;&gt;-->
              <!--&lt;!&ndash;[type]="widget.type">&ndash;&gt;-->
            <!--&lt;!&ndash;</ui-dashboard-icon>&ndash;&gt;-->
          <!--</div>-->
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    ui-card {
      cursor: pointer;
    }
    ui-card h4 {
      margin: 0;
    }
  `,
  ],
})
export class ContentDashboardComponent {
  public widgets = []

  constructor(private store: Store<any>) {
    console.log('ContentDashboardComponent')
    // this.store.select('app').subscribe((res: any) => (this.widgets = res.contentDashboard))
  }
}
