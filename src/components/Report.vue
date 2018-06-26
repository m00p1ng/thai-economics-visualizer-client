<template>
  <div class="row">
    <div class="card light-blue lighten-3">
      <div class="card-content white-text center">
        <span class="card-title"><h4>รายงานเศรษฐกิจและการเงิน</h4></span>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <span class="card-title">รายงานเศรษฐกิจและการเงิน</span>
        <!-- <p>ประกอบไปด้วย 5 สาขาดังต่อไปนี้</p> -->
        <!-- <ol> -->
          <div v-for="topic in topics" :key="topic.en">
            <ul>
              <li v-for="item in topic.sub_topic" :key="item.th">
                <router-link :to="`/graph/${item.en}`" tag="a" class="report-list">{{item.th}}</router-link>
              </li>
            </ul>
          </div>
        <!-- </ol> -->
      </div>
    </div>
  </div>
</template>

<script>
import ReportTopic from '../data/report-topic.js';

export default {
  data() {
    return {
      topics: ReportTopic,
    }
  }
}
</script>


<style>
.report-list {
  line-height: 2.2em;
}

.report-topic {
  padding: 1.2em 0;
}

.fix-list{ 
  padding-top: 0.5em;
}
</style>

