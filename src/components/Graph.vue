<template>
  <div class="row">
    <div class="card light-blue lighten-3">
      <div class="card-content white-text center">
        <span class="card-title"><h4>{{getThaiName($route.params.gname)}}</h4></span>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <line-chart></line-chart>
        <pie-chart></pie-chart>
        <stack-bar-chart></stack-bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import ReportTopics from '../data/report-topic.js'
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'
import StackBarChart from './charts/StackBarChart'

export default {
  components: {
    LineChart,
    PieChart,
    StackBarChart,
  },
  methods: {
    getThaiName(en_name) {
      for(var topic of ReportTopics) {
        let thai_name = topic.sub_topic.find(f => f.en == en_name)
        if(thai_name) {
          return thai_name.th
        }
      }
    }
  }  
}
</script>
