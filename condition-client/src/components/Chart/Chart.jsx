import React from 'react'; 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import classes from './Chart.module.css';



function Chart(props) {

  const width = window.screen.width - (window.screen.width/4);
  const height = window.screen.height/3;

  return (
    <div className={classes.chart_wrap}> 
    <LineChart width={width} height={height} data={props.data} className={classes.chart}>
      <Line type="monotone" dataKey="phis" stroke="#EE2935" />
      <Line type="monotone" dataKey="emo" stroke="#4957ED" />
      <Line type="monotone" dataKey="soul" stroke="#419538" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 10]} tickCount={10}/>
      <Tooltip />
    </LineChart>
    </div>
  )
}

export default Chart