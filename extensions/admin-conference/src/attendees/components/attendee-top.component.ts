import { AttendeesService } from './../attendees.service';
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conference-attendee-top',
  template: `
    <table class="table table-striped table-bordered">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Notes Count</th>
      </tr>
      <tr *ngFor="let stat of stats">
        <td>{{stat.name}}</td>
        <td>{{stat.email}}</td>
        <td>{{stat.notesCount}}</td>
      </tr>
    </table>
  `,
})
export class AttendeeTopComponent {

  @Input() stats: any = {}

  constructor(
    public service: AttendeesService,
  ) {
    this.service.getStats()
      .subscribe(res => this.stats = res)
  }
}
