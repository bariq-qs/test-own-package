import { createApp } from 'vue'
import App from './App.vue'
import ViewerComponents from './components'

const app = createApp(App)
// definePlugins(app)
app.use(ViewerComponents)
app.mount('#app')
