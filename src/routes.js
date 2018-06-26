import Home from './components/Home.vue'
import Report from './components/Report.vue'
import Graph from './components/Graph.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/report', component: Report },
  { path: '/graph/:gname', component: Graph },
];