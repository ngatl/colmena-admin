import { AttendeesService } from './../attendees.service';
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conference-attendee',
  template: `
    <div class="card card-inverse">
      <div class="card-header">
        <div class="media">
          <img class="avatar mr-3 rounded" [attr.src]="item?.avatar">
          <div class="media-body">
            <h4 class="my-0">
              <a [routerLink]="item?.id"> {{item?.name}} </a> <br />
              <span class="text-muted">
                {{ item?.email }}
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div class="card-body">
        

        <h2 class="card-title">Number of notes: {{item?.notes?.length}}</h2>

        <h2 class="card-title">Tickets</h2>

        <div class="card" *ngFor="let ticket of item.tickets">
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <td>{{ticket?.release?.title}}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{{ticket?.release?.description}}</td>
            </tr>
            <tr>
              <th>ti.to link</th>
              <td>
                <a href="https://ti.to/tickets/{{ticket?.id}}" target="_blank">{{ticket?.id}}</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .avatar {
      width: 50px;
    }
  `]
})
export class AttendeeComponent {

  @Input() item: any = {}
  @Output() action = new EventEmitter()

  constructor(
    public service: AttendeesService,
    private route: ActivatedRoute,
  ) {
    this.route.params
    .map(res => res.id)
    .subscribe(id => {
      this.service.getItem(id)
        .subscribe(item => this.item = item)
    })
  }
}
