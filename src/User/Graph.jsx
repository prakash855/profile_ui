import React from "react";
import {Bar} from 'react-chartjs-2'
import data from './Graph.json'

const Graph = () => {
  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Graph;
