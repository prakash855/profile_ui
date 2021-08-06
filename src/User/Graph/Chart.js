import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import dummyAPI from "./Graph.json";
import './Chart.css'

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      isLoaded: false,
    };
  }
  componentWillMount() {
    const interval = setTimeout(() => {
      this.getChartData();
    }, 6000);

    return () => {
      clearTimeout(interval);
    };
  }

  getChartData() {
    console.log(dummyAPI);
    this.setState({
      chartData: dummyAPI,
      isLoaded: true,
    });
  }
  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div className="chart">
            <Pie
              data={this.state.chartData}
              style={{ width: "50rem !imporatnt" }}
            />
            <div className="actions">
              <Button
                onClick={() => this.props.history.push("/")}
                style={{ fontSize: "20px" }}
                variant="outlined"
                color="primary"
              >
                Previous Page
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Loader type="Puff" className="loader" />
            <p>Please Wait...</p>
            <div className="actions">
              <Button
                onClick={() => this.props.history.push("/")}
                style={{ fontSize: "20px",position:"relative",bottom:"-33rem" }}
                variant="outlined"
                color="primary"
              >
                Previous Page
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(Chart);
