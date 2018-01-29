import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-conference-sponsor',
  template: `
    <div class="card card-inverse">
      <div class="card-header">
        <h2>
          <a href="" [routerLink]="[item.id]" class="btn btn-lg btn-link">
            {{item.name}}
          </a>  
        </h2>
      </div>
      <div class="card-body">
        <img class="card-img img-fluid" [attr.src]="item.imageUrl" [attr.alt]="item.name">
      </div>
     </div>
  `,
  styles: [`
    .card:hover {
      box-shadow: 0 0 10px #333;
    }
    .card-img-overlay {
      padding: 0;
    }
    .card-img {
      width: 100%;
    }
    .delete-button {
      display: none;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
    .card:hover .delete-button {
      display: block;
    }
  `]
})
export class SponsorComponent {

  @Input() item: any = {}
  @Output() action = new EventEmitter()

}
