var React = require('react'),
    ReactDOM = require('react-dom'),
    Highcharts = require('highcharts'),
    addFunnel = require('highcharts/modules/funnel');
var element = React.createElement('div', { id: 'chart' });
ReactDOM.render(element, document.getElementById('react-app'), function () {
    // Apply funnel after window is present
    addFunnel(Highcharts);
    // Construct the chart
    Highcharts.chart('chart', { /*Options*/ });
});
