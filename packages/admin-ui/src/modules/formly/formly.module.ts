import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FormlyModule } from '@ngx-formly/core'
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'
import { QuillModule } from 'ngx-quill'

import { formlyConfig } from './formly.config'

import { FormlyFieldWysiwygComponent } from './formly-wysiwyg/wysiwyg.component'

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, FormlyModule.forRoot(formlyConfig), FormlyBootstrapModule, QuillModule],
  exports: [FormlyModule, QuillModule],
  declarations: [FormlyFieldWysiwygComponent],
})
export class UiFormlyModule {}
