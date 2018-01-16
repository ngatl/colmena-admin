import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { NxModule } from '@nrwl/nx'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

const routeConfig: ExtraOptions = {
  initialNavigation: 'enabled',
}

const routes: Routes = []

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), RouterModule.forRoot(routes, routeConfig)],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
