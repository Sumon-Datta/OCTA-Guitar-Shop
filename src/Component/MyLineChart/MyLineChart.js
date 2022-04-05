import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid
} from "recharts";
import "./MyLineChart.css";
const MyLineChart = () => {
  const axios = require("axios");
  const [sales, setSales] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((data) => setSales(data.data));
  }, []);

  return (
    
  <div className="chart_area">
    <div>
      <h3>Monthly Wise Sell chart</h3>
      </div>
      <div className="chart"> 
      <div className="line_chart">
        <LineChart width={500} height={300} data={sales}>
          <Line
            type="monotone"
            dataKey="sell"
            stroke="#A52A2A"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#0000FF"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="investment"
            stroke="#D2691E"
            strokeWidth={2}
          />
          <XAxis dataKey="month"></XAxis>
          <XAxis dataKey="sell"></XAxis>
          <YAxis dataKey="revenue"></YAxis>
          <XAxis dataKey="investment"></XAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>



   <div className="second_chart">
   <div>
     <h3>Investment & Revenue chart</h3>
    </div>
      <div className="line_chart">
      
        <AreaChart
          width={500}
          height={300}
          data={sales}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sell" />
          <YAxis />
          <Tooltip />
          <Area type="monotone"
            dataKey="sell"
            stroke="#A52A2A"
            strokeWidth={3} />
            <Area  type="monotone"
            dataKey="revenue"
            stroke="#0000FF"
            strokeWidth={2}/>
            <Area  type="monotone"
            dataKey="investment"
            stroke="#D2691E"
            strokeWidth={2}/>
        </AreaChart>
      </div>
   </div>
    </div>
  </div>
  );
};

export default MyLineChart;
