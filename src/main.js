import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(fab, fas, far)


createApp(App)
    .use(store)
    .use(i18n)
    .use(router)
    .use(vuetify)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

	  const storedCredential = JSON.parse(localStorage.getItem('authCredential'))
      if (storedCredential) {
          store
              .dispatch('auth/loginWithCredential', storedCredential)
              .then((loginResult) => {
                  console.log('User authenticated:', loginResult)
              })
              .catch((error) => {
                  console.error('Error while logging in with stored credential:', error)
                  // store.dispatch('setError', error);
                  if (error) {
                      store.commit('auth/setUser', null)
                      localStorage.removeItem('authCredential')
                      this.$router.push({ name: 'home' })
                  }
              })
              .finally(() => store.dispatch('setError', null))
      } else {
          const storedUser = localStorage.getItem('user')
          if (storedUser) {
              store.commit('auth/setUser', JSON.parse(storedUser))
          }
      }