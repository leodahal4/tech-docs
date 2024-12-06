import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import App from './App.vue'
import router from './router'

// // Import global styles
import './assets/main.css'

// Create the Vue application
const app = createApp(App)

// Use the router
app.use(router)

// Mount the application
app.mount('#app')
