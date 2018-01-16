import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-router',
  template: `<ui-message [message]="'Redirecting.'"></ui-message>`,
})
export class RouterComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select('auth').subscribe((res: any) => {
      console.log('router res', res)
      return this.store.dispatch({ type: res && res.loggedIn ? 'APP_REDIRECT_DASHBOARD' : 'APP_REDIRECT_LOGIN' })
    })
  }
}