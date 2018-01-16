import { ConfigOption } from '@ngx-formly/core'

import { FormlyFieldWysiwygComponent } from './formly-wysiwyg/wysiwyg.component'

export const formlyConfig: ConfigOption = {
  types: [
    {
      name: 'wysiwyg',
      component: FormlyFieldWysiwygComponent,
      wrappers: ['fieldset', 'label'],
    },
  ],
}
