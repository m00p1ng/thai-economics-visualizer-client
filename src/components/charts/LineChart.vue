<template>
    <div id="chartdiv" style="height: 600px;"></div>
</template>

<script>
import graphColor from '../../data/graph-color.js'
export default {
    data() {
        return {
            dataLoaded: false
        }
    },
    props: ['dataset'],
    watch: {
        dataset(newVal, oldVal) {
            if(newVal) {
            var chartData = [];
            let bullet = ["round", "square", "triangleUp"]

            let genGraphInfo = function(fields) {
                let graphs = []
                for(let i = 0; i < fields.length; i++) {
                let graph = {
                    "lineColor": graphColor[i],
                    "bullet": bullet[i%3],
                    "bulletBorderThickness": 1,
                    "hideBulletsCount": 30,
                    "title": fields[i],
                    "valueField": fields[i],
                    "fillAlphas": 0
                }
                graphs.push(graph)
                }
                return graphs
            }

            var chart = AmCharts.makeChart("chartdiv", {
                "titles": [{
                    "text": newVal.title
                } ],
                "hideCredits":true,
                "path": "/dist/amcharts",
                "type": "serial",
                "theme": "light",
                "legend": {
                    "useGraphSettings": true
                },
                "dataProvider": newVal.data,
                "synchronizeGrid":true,
                "valueAxes": [{
                    "position": "left"
                }],
                "graphs": genGraphInfo(newVal.fields),
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

            function zoomChart(){
                chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
            }
        }
        }
    },
}
</script>