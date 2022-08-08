import { boot } from 'quasar/wrappers'
import cronCore from '@vue-js-cron/core'
import VuePlugin from '@gpproton/quasar-ui-qcron'

export default boot(({ app }) => {
  app.use(cronCore)
  app.use(VuePlugin)
})
