import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import Vue from 'vue'

export default () => {
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient()
  const options = { queryClient }

  Vue.use(VueQueryPlugin, options)
}
