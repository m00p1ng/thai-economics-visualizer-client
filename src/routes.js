import Home from './components/Home.vue'
import Report from './components/Report.vue'
import Login from './components/Login.vue'
import Graph from './components/Graph.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/report', component: Report },
  { path: '/login', component: Login },
  { path: '/graph/:gname', component: Graph },
];