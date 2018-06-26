<template>
  <div id="stackedbar" style="height: 500px"></div>
</template>

<script>
export default {
  mounted() {
      var dataChart = []

      for(var i = 0; i < 100; i++) {
          dataChart.push({
            "year": 2000 + i,
            "europe": (Math.random()-0.5)*10,
            "namerica": (Math.random()-0.5)*10,
            "asia": (Math.random()-0.5)*10,
            "lamerica": (Math.random()-0.5)*10,
            "meast": (Math.random()-0.5)*10,
            "africa": (Math.random()-0.5)*10
          })
      }

  var chart = AmCharts.makeChart("stackedbar", {
    "path": "/dist/amcharts",
    "type": "serial",
    "theme": "light",
     "titles": [{
        "text": "My Chart Title"
    }, {
        "text": "My Chart Sub-Title",
        "bold": false
    }],
    "legend": {
		"useGraphSettings": true,
    },
    "dataProvider": dataChart,
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0.1,
        "guides": [{
            "value": 0,
            "lineAlpha": 0.1
        }]
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Europe",
        "type": "column",
		"color": "#000000",
        "valueField": "europe"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "North America",
        "type": "column",
		"color": "#000000",
        "valueField": "namerica"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Asia-Pacific",
        "type": "column",
		"color": "#000000",
        "valueField": "asia"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Latin America",
        "type": "column",
		"color": "#000000",
        "valueField": "lamerica"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Middle-East",
        "type": "column",
		"color": "#000000",
        "valueField": "meast"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.3,
        "title": "Africa",
        "type": "column",
		"color": "#000000",
        "valueField": "africa"
    }],
    "chartScrollbar": {},
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "minorGridEnabled": true,
    },
    "export": {
    	"enabled": true
     }

});
  }
}
</script>
