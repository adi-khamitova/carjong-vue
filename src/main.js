import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import MainPage from './components/MainPage.vue'
import GameBoard from './components/GameBoard.vue'

createApp(App).mount('#app')

const router = createRouter({
  routes: [{
    path: '/',
    component: MainPage
  },
  {
    path: '/carjong',
    component: GameBoard,
  }

],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')