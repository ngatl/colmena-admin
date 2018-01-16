import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { TabsModule } from 'ngx-bootstrap/tabs'
// import { ChartsModule } from 'ng2-charts/ng2-charts';

const modules = [CommonModule, RouterModule, BsDropdownModule.forRoot(), TabsModule.forRoot()]

import { LayoutSimpleComponent, LayoutFullComponent } from './containers'

const containers = [LayoutSimpleComponent, LayoutFullComponent]

import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV,
} from './components'

const components = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV,
]

import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES,
  ReplaceDirective,
} from './directives'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { layoutReducer } from './+state/layout.reducer'
import { layoutInitialState } from './+state/layout.init'
import { LayoutEffects } from './+state/layout.effects'

const directives = [AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SIDEBAR_TOGGLE_DIRECTIVES]

@NgModule({
  imports: [
    ...modules,
    // StoreModule.forFeature('layout', layoutReducer, { initialState: layoutInitialState }),
    // EffectsModule.forFeature([LayoutEffects]),
  ],
  declarations: [...components, ...containers, ...directives],
  exports: [...containers],
  providers: [LayoutEffects],
})
export class AdminLayoutModule {}
