import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts'
import addHeatmap from 'highcharts/modules/heatmap'
addHeatmap(Highcharts)
const options = {
series: [{
type: 'heatmap',
data: [1, 2 , 3]
}]
};
const onRender = () => {
// Create the chart.
Highcharts.chart('chart', options);
};
const chartContainer = React.createElement('div', { id: 'chart' });
ReactDOM.render(chartContainer, document.getElementById('app'), onRender);

