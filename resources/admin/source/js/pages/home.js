import React, { Component } from 'react'
import {ChartWidgetPanel} from '../components/ReactCharts';
import { Row  , Col} from '../components/grid';
class Home extends Component {
    render () {
        return (
            <div className="wrapper">
                <Row>
                    <Col md="3">
                        <ChartWidgetPanel/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home
