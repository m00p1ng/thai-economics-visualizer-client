<template>
  <div id="piechart" style="height: 500px"></div>
</template>

<script>
export default {
  mounted() {
    var chart = AmCharts.makeChart("piechart", {
    "hideCredits":true,
  "type": "pie",
  "theme": "light",
   "titles": [{
        "text": "My Chart Title"
    }, {
        "text": "My Chart Sub-Title",
        "bold": false
    }],
       "legend": {
         position: "right"
    },
  "dataProvider": [ {
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czech Republic",
    "litres": 301.9
  }, {
    "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }, {
    "country": "Austria",
    "litres": 128.3
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  } ],
  "valueField": "litres",
  "titleField": "country",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} )
  }
}
</script>