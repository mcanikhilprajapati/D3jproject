import React from "react";
import * as d3 from "d3";
import "./LineChart.scss";
const width = 500,
  height = 500,
  margin = 20;

class LineChart extends React.Component {
  render() {
    const { data = [] } = this.props;

    const h = height - 2 * margin,
      w = width - 2 * margin;

    var x = d3
      .scaleBand()
      .domain(
        data.map(function(d) {
          return d.country;
        })
      )
      .round(true)
      .rangeRound([margin, width])
      .padding(1);
    const maxValue = d3.max(data, d => d.value);
    //y scale
    const y = d3
      .scaleLinear()
      .domain([0, maxValue > 5 ? maxValue : 5]) // domain [0,max] of b (start from 0)
      .range([h, margin]);

    //line generator: each point is [x(d.a), y(d.b)] where d is a row in data
    // and x, y are scales (e.g. x(10) returns pixel value of 10 scaled by x)
    const line = d3
      .line()
      .x(d => x(d.country))
      .y(d => y(d.value))
      .curve(d3.curveCatmullRom.alpha(0.5)); //curve line

    const yTicks = y.ticks(5).map(d =>
      y(d) > 10 && y(d) < h ? (
        <g transform={`translate(${margin},${y(d)})`} key={d}>
          <text x="-12" y="5">
            {d}
          </text>
          <line x1="0" x1="5" y1="0" y2="0" transform="translate(-5,0)" />
          <line
            className="gridline"
            x1="0"
            x1={w - margin}
            y1="0"
            y2="0"
            transform="translate(-5,0)"
          />
        </g>
      ) : null
    );

    return (
      <div className="lineCharContainer">
        <svg className="lineChartSvg" width={width} height={height}>
          <line className="axis" x1={margin} x2={w} y1={h} y2={h} />
          <line className="axis" x1={margin} x2={margin} y1={margin} y2={h} />
          <path className="lineCharPath" d={line(data)} />
          <g
            className="axis-labels"
            transform={`translate(0, ${height - 40})`}
            ref={node => d3.select(node).call(d3.axisBottom(x))}
          />
          <g className="axis-labels">{yTicks}</g>
        </svg>
      </div>
    );
  }
}

export default LineChart;
