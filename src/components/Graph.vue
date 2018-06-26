<template>
  <div class="row">
    <div class="card light-blue lighten-3">
      <div class="card-content white-text center">
        <span class="card-title"><h4>{{getThaiName($route.params.gname)}}</h4></span>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <line-chart :dataset="data_set"></line-chart>
        <!-- <div class="divider" style="margin: 4em 0;"></div>
        <pie-chart></pie-chart>
        <div class="divider" style="margin: 4em 0;"></div>
        <stack-bar-chart></stack-bar-chart> -->
      </div>
    </div>
  </div>
</template>

<script>
import ReportTopics from '../data/report-topic.js'
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'
import StackBarChart from './charts/StackBarChart'
import axios from 'axios'

export default {
  components: {
    LineChart,
    PieChart,
    StackBarChart,
  },
  data() {
    return {
      data_set: null
    }
  },
  beforeMount() {
    axios.get(`http://localhost:3000/${this.$route.params.gname}`).then(res => {
      this.data_set = res.data
    })  
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
