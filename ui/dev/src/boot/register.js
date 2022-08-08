import { boot } from 'quasar/wrappers'
import cronCore from '@vue-js-cron/core'
import VuePlugin from 'ui' // "ui" is aliased in quasar.conf.js

export default boot(({ app }) => {
  app.use(cronCore)
  app.use(VuePlugin)
})
