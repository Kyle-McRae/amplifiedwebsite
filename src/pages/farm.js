import React from 'react';
import './farm.css'
import Plot from '../components/Farm/Plot'

export default class Farm extends React.Component {
    state = {
        plots: []
    }

    componentDidMount(){
        newPlot = {
            crop: '',
            timeLeft: 5
        }
        let plots = [{}, {}, {}].fill(newPlot);
        this.setState({plots: plots});
    }

    harvest = idx =>
        event => {
            tempPlots = this.state.plots;
            let plot = tempPlots[idx];
            plot.timeLeft = 0;
        }

    render() {
        <div>
            <div className="plots">
                {
                    this.state.plots.map((plot, idx) =>
                        <Plot data={plot} onClick={harvest(idx)}></Plot>
                    )
                }
            </div>
        </div>
    }
}
