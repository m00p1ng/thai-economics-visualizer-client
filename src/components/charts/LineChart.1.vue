<template>
    <div id="chartdiv" style="height: 500px;"></div>
</template>

<script>
export default {
   mounted () {
    var chartData = generateChartData();

var chart = AmCharts.makeChart("chartdiv", {
     "titles": [{
        "text": "Private Investment Indicators"
    } ],
    "hideCredits":true,
    "path": "/dist/amcharts",
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": chartData,
    "synchronizeGrid":true,
    "valueAxes": [{
        "axisColor": "#FF6600",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "left"
    }],
    "graphs": [{
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Construction Material",
        "valueField": "visits",
		"fillAlphas": 0
    }, {
        "lineColor": "#FCD202",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Real Import",
        "valueField": "hits",
		"fillAlphas": 0
    }, {
        "lineColor": "#7E3817",
        "bullet": "triangleUp",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Cars Sales",
        "valueField": "views",
		"fillAlphas": 0
    }],
    "chartScrollbar": {},
    "chartCursor": {
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "minorGridEnabled": true,
    },
    "export": {
    	"enabled": true,
        "position": "bottom-right"
     }
});

chart.addListener("dataUpdated", zoomChart);
zoomChart();


// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);

        var visits = 1600;
        var hits = 2900;
        var views = 8700;


    for (var i = 0; i < 100; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

        chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views
        });
    }
    return chartData;
}

function zoomChart(){
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}


  }
}
</script>