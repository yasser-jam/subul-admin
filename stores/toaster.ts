import { defineStore } from 'pinia'

export const useToasterStore = defineStore('toaster', () => {
  const showToaster = ref(false)
  const toasterType = ref('info')
  const message = ref<[String] | String>('')

  const messages = computed(() =>
    typeof message.value === 'string' ? [message.value] : message.value
  )

  const showMessage = __message => {
    showToaster.value = true
    message.value = __message
  }

  const showSuccessToaster = message => {
    toasterType.value = 'success'
    showMessage(message)
  }

  const showErrorToaster = message => {
    toasterType.value = 'error'
    showMessage(message)
  }
  return {
    showToaster,
    toasterType,
    message,
    messages,
    showSuccessToaster,
    showErrorToaster
  }
})
