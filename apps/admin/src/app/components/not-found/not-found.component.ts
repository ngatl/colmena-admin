import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-not-found',
  template: `<ui-message message="Page could not be found."></ui-message>`,
  styles: [],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('NotFoundComponent init')
  }
}
