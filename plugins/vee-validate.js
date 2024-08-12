import { defineRule, configure, Field, Form } from 'vee-validate'
import {
  required,
  email,
  min_value,
  url,
  length,
  max_value
} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import ar from '@vee-validate/i18n/dist/locale/ar.json'

localize({ ar })

export default defineNuxtPlugin(nuxtApp => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min_value', min_value)
  defineRule('max_value', max_value)
  defineRule('url', url)
  defineRule('length', length)

  // when delete the whole content quill leaves some tags, this rule to provide send empty article (that only has those tags)
  // 'required' rule won't recognise empty because of these tags
  defineRule('content', value => {
    if (value == '<p><br></p>') return false
    return value?.length > 0
  })

  nuxtApp.vueApp.component('Field', Field)
  nuxtApp.vueApp.component('Form', Form)

  configure({
    generateMessage: localize('ar', {
      names: {
        password: 'كلمة المرور',
        email: 'البريد الإلكتروني',
        name: 'الاسم'
      },
      messages: {
        length: 'ينبغي أن يكون {field}: 0:{length}',
        content: 'المحتوى مطلوب'
      }
    })
  })
})
