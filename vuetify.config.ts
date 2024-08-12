// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import type { ThemeDefinition } from 'vuetify'
import { ar } from 'vuetify/locale'

const stTheme: ThemeDefinition = {
  dark: false,

  colors: {
    primary: '#2D547C',
    'primary-darken-1': '#244363',
    'primary-darken-3': '#162A3E',
    secondary: '#7E78F3',
    'secondary-darken-1': '#332AEC',
    blue: '#14a6f8',
    dark: '#374151',
    success: '#00A96E',
    info: '#5950F6',
    warning: '#FFA800',
    error: '#f1416c',
    light: '#eef0f8',
    lighten: '#eff2f5',
    background: '#eef0f8',
    'blue-lighten-2': '#97def2',
    'blue-lighten-3': '#b5c1ef',
    'info-lighten-3': '#d0aee0',
    'warning-lighten-3': '#f7c78c',
    'secondary-lighten-3': '#a7d9b6',
    'secondary-darken': '#5ab2a3',
    'red-lighten-2': '#ffbfae',
    'red-lighten-3': '#f4a99b',
    'on-surface': '#181C32'
  }
}

export default defineVuetifyConfiguration({
  locale: {
    locale: 'ar',
    fallback: 'en',
    messages: { ar }
  },

  aliases: {
    VBtnIcon: 'VBtn'
  },

  defaults: {
    global: {
      ripple: false
    },

    VBtnIcon: {
      variant: 'tonal',
      rounded: 'lg',
      icon: true,
      size: 'small'
    },

    VCard: {
      elevation: 8
    },

    VTextField: {
      variant: 'outlined',
      density: 'compact',
      bgColor: 'lighten'
    },

    VTextarea: {
      variant: 'outlined',
      density: 'compact',
      bgColor: 'lighten'
    },

    VSelect: {
      variant: 'outlined',
      density: 'compact',
      bgColor: 'lighten'
    },

    VBtn: {
      elevation: 0,
      color: 'primary'
    },

    VSwitch: {
      inset: true,
      color: 'blue',
      hideDetails: true
    },

    VTabs: {
      sliderColor: 'primary',
      density: 'compact'
    },

    VTab: {
      ripple: false
    },

    VChip: {
      rounded: "lg",
      class: 'font-weight-bold'
    },

    VWindowItem: {
      transition: 'fade',
      reverseTransition: 'fade'
    },

    VRow: {
      dense: true
    },

    VDataTableServer: {
      itemsPerPageOptions: [
        { title: '10', value: 10 },
        { title: '25', value: 25 },
        { title: '50', value: 50 }
      ]
    },

    VDataTable: {
      itemsPerPageOptions: [
        { value: 10, title: '10' },
        { value: 25, title: '25' },
        { value: 50, title: '50' }
      ]
    }
  },

  theme: {
    defaultTheme: 'stTheme',
    themes: { stTheme }
  }
})
