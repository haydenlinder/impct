import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
import Avitar from './avitar';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const pic1 = require('../images/woman2.jpg')
const pic2 = require('../images/man1.jpg')
const pic3 = require('../images/woman3.jpg')
const pic4 = require('../images/coffee4.jpg')
const pic5 = require('../images/coffee5.png')

class Leaderboard extends Component {

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
            title:{
            	text: "Leaderboard"
            },
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
                    avitar: 
                    <div><div className="hover-avi"><Avitar url={pic1} /></div></div>,
                    showInLegend: true,
                    name: "Nina Jones",
                    legendText: "Nina Jones",
                    type: "line",
                    toolTipContent: 'Week {x}: ${y} <div style="width:30px;height:30px;overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:100%;" className="hover-avi"><img style="width:100%" className="not-resized" src={src} /></div>',
                    dataPoints: [
                        { x: 1, y: 25 , src: pic1},
                        { x: 2, y: 35 , src: pic1},
                        { x: 3, y: 50 , src: pic1},
                        { x: 4, y: 70 , src: pic1},
                        { x: 5, y: 80 , src: pic1},
                        { x: 6, y: 100, src: pic1 },
                        { x: 7, y: 120, src: pic1 },
                        { x: 8, y: 150, src: pic1 },
                        { x: 9, y: 155, src: pic1 },
                    ]
                },
                {
                    showInLegend: true,
                    name: "John Smith",
                    legendText: "John Smith",
                    type: "line",
                    toolTipContent: 'Week { x }: ${ y } <div style="width:30px;height:30px;overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:100%;" className = "hover-avi" > <img style="width:100%" className="not-resized" src={src} /></div >',
                    dataPoints: [
                        { x: 2, y: 5 , src: pic2},
                        { x: 3, y: 30, src: pic2 },
                        { x: 4, y: 60, src: pic2 },
                        { x: 5, y: 75, src: pic2 },
                        { x: 6, y: 80, src: pic2 },
                        { x: 7, y: 95, src: pic2 },
                        { x: 8, y: 100, src: pic2 },
                        { x: 9, y: 110, src: pic2 },
                    ]
                },
                {
                    showInLegend: true,
                    name: "Alice Yu",
                    legendText: "Alice Yu",
                    type: "line",
                    toolTipContent: 'Week { x }: ${ y } <div style="width:30px;height:30px;overflow:hidden;display:flex;align-items:center;justify-content:center;border-radius:100%;" className = "hover-avi" > <img style="width:100%" className="not-resized" src={src} /></div >',
                    dataPoints: [
                        { x: 4, y: 5 , src: pic3},
                        { x: 5, y: 15, src: pic3 },
                        { x: 6, y: 30, src: pic3 },
                        { x: 7, y: 35, src: pic3 },
                        { x: 8, y: 50, src: pic3 },
                        { x: 9, y: 70, src: pic3 },
                    ]
                },
            ]
        }

        return (
            <div className="leaderboard">
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default Leaderboard;                           