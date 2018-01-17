import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-icon',
  template: `
    <div class="card">
      <div class="card-body p-3 clearfix">
        <i class="{{icon}} bg-{{type}} p-3 font-2xl mr-3 float-left"></i>
        <div class="h5 text-info mb-0 mt-2">{{name}}</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">{{count}}</div>
      </div>
    </div>
  `,
  styles: [
    `
    .card {
      cursor: pointer;
    }
    .card:hover {
      box-shadow: 0px 0px 8px #a1a1a1;
    }
  `,
  ],
})
export class UiDashboardIconComponent {
  @Input() count
  @Input() icon
  @Input() name
  @Input() type
}
