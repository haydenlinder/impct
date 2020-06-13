import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {

	render() {
		const options = {
			legend: {
				verticalAlign: "top",
				fontSize: 18,
				fontColor: "dimGrey",
				itemclick: this.toggleDataSeries
			},
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			// title:{
			// 	text: "Current Investments"
			// },
			axisY: {
				title: "Amount",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				title: "Date",
				interval: 5
			},
			data: [
				{
					xValueFormatString: "Jun",
					showInLegend: true,
					name: "Cause 1",
					legendText: "Cause 1",
					type: "line",
					toolTipContent: "Week {x}: ${y}",
					dataPoints: [
						{ x: 1, y: 25 },
						{ x: 2, y: 35 },
						{ x: 3, y: 50 },
						{ x: 4, y: 70 },
						{ x: 5, y: 80 },
						{ x: 6, y: 100 },
						{ x: 7, y: 120 },
						{ x: 8, y: 150 },
						{ x: 9, y: 155 },
					]
				},
				{
					showInLegend: true,
					name: "Cause 2",
					legendText: "Cause 2",
					type: "line",
					toolTipContent: "Week {x}: ${y}",
					dataPoints: [
						{ x: 2, y: 5 },
						{ x: 3, y: 30 },
						{ x: 4, y: 60 },
						{ x: 5, y: 75 },
						{ x: 6, y: 80 },
						{ x: 7, y: 95 },
						{ x: 8, y: 100 },
						{ x: 9, y: 110 },
					]
				},
				{
					showInLegend: true,
					name: "Cause 3",
					legendText: "Cause 3",
					type: "line",
					toolTipContent: "Week {x}: ${y}",
					dataPoints: [
						{ x: 4, y: 5 },
						{ x: 5, y: 15 },
						{ x: 6, y: 30 },
						{ x: 7, y: 35 },
						{ x: 8, y: 50 },
						{ x: 9, y: 70 },
					]
				},
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;                           