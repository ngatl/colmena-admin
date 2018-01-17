import { Component } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styles: [`
    .img-avatar {
      border-radius: 10px!important;
    }
  `]
})
export class AppHeaderComponent {

  public navigation = []
  public user: any

  constructor(private store: Store<any>) {
    this.store.select('layout')
    .subscribe((res: any) => {
      const { headerNav } = res
      Object.keys(headerNav)
      .forEach(key => this.navigation.push(headerNav[key]))
    })
    this.store.select('auth')
      .subscribe((res: any) => {
        if (res && res['currentUser']) {
          this.user = res['currentUser']['user']
        }
        // console.log('res', res)
        // return this.store.dispatch({ type: res && res.loggedIn ? 'APP_REDIRECT_DASHBOARD' : 'APP_REDIRECT_LOGIN' })
      })
  }
}
