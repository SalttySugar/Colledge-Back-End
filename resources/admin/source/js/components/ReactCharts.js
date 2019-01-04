import Chart from 'chart.js'
import React from 'react';


var data = [12,14,26,84,3,2];



export class ChartWidgetPanel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            chart: null,
        };

        this.setCanvasRef = this.setCanvasRef.bind(this);
    }

    setCanvasRef(node)
    {
        this.canvasRef = node;
        console.log(node);
    }

    componentDidMount() {
        this.setState({
            chart: new Chart(this.canvasRef , {
                type: 'bar',
                data: {
                    datasets: [{
                        label: 'Просмотров',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
            })
        });
    }
    render()
    {
        return (
        <div className="chart-panel">
            <canvas ref={this.setCanvasRef}>

            </canvas>
        </div>
        );
    }
}
