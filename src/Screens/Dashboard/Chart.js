import React, { Component } from 'react'
import * as d3 from "d3";

// export default class Chart extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             formData: props.formData
//         };
//     }

//     // componentWillReceiveProps(nextProps){
//     //     console.log(nextProps.formData);
//     // }

//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.formData !== prevState.formData) {
//             return {
//                 formData: nextProps.formData,
//             };
//         }
//     }

//     componentDidMount() {
         
//         this.drawChart()
//     }

//     drawChart = () => {
//         const dataset = [12, 31, 22, 17, 25, 18];
     
//         const w = 600;
//         const h = 300;
//         const svg = d3
//             .select(this.refs.chart)
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h)
//             .attr("class", "bar");
//         svg
//             .selectAll("rect")
//             .data(dataset)
//             .enter()
//             .append("rect")
//             .attr("fill", "navy")
//             .attr("class", "sBar")
//             .attr("x", (d, i) => i * 60)
//             .attr("y", (d, i) => {
//                 return h - 7 * d;
//             })
//             .attr("width", 50)
//             .attr("height", (d, i) => 7 * d)
//             .append("title")
//             .text(d => d);
//         svg
//             .selectAll("text")
//             .data(dataset)
//             .enter()
//             .append("text")
//             .style("font-size", 18)
//             .attr("fill", "red")
//             .attr("x", (d, i) => i * 60)
//             .attr("y", (d, i) => h - 7 * d - 3)
//             .text(d => d);
//     }

//     render() {
//         const styles = {
//             container: {
//                 display: "grid",
//                 justifyItems: "center"
//             }
//         };
//         return (
//             <div ref="chart" style={styles.container}>
                
//             </div>
//         )
//     }
// }

  

class Bar extends React.Component {

    constructor(props) {
      super(props)
    }
  
    render() {
      let style = {
        fill: "steelblue"
      }
  
      return(
        <g>
            <rect class="bar" style={style} x={this.props.x} y={this.props.y + 5} width={this.props.width} height={this.props.height} />
        </g>
      )
    }
  
  }
  
  class YAxis extends React.Component {
  
    constructor(props) {
      super(props)
    }
  
    render() {
      let style = {
        stroke: "steelblue",
        strokeWidth: "1px"
      }
      
      let textStyle = {
        fontSize: "0.8em",
        fill: "steelblue",
        textAnchor: "end"
      }
      
      //D3 mathy bits
      let ticks = d3.range(0, this.props.end, (this.props.end / this.props.labels.length))
      let percentage = d3.format(".0%")
      
      let lines = []
      ticks.forEach((tick, index) => {
        lines.push(<line style={style} y1={tick} x1={this.props.y} y2={tick} x2={this.props.y - 4}  />)
      })
      
      let columnLables = []
      ticks.forEach((tick, index) => {
        columnLables.push(<text style={ textStyle } y={tick + 6} x={this.props.y - 6} font-family="Verdana" >{percentage(this.props.labels[index])}</text>)
      })
      
    
      return(
        <g>
            <g className="y_labels" transform={`translate(${-5},${17})`}>
            <line x1={this.props.y} y1={this.props.start} y2={this.props.end} x2={this.props.y} style={ style } />
            </g>
            <g className="y_labels" transform={`translate(${-5},${51})`}>
            { columnLables }
	        { lines }
            </g>
        </g>
      )
    }
  
  }
  
  class XAxis extends React.Component {
  
    constructor(props) {
      super(props)
    }
  
    render() {
      let style = {
        stroke: "steelblue",
        strokeWidth: "1px"
      }
      
      let step = (this.props.start + this.props.end / this.props.labels.length)
      
      //D3 mathy bits   
      let ticks = d3.range(this.props.start, this.props.end, step)
      
      let lines = []
      ticks.forEach((tick, index) => {
        lines.push(<line style={style} x1={tick + 10 } y1={this.props.x} x2={tick + 10} y2={this.props.x + 4}  />)
      })
      
      let columnLables = []
      ticks.forEach((tick, index) => {
        columnLables.push(<text style={{fill: "steelblue"}} x={tick + 5} y={this.props.x + 20} font-family="Verdana" font-size="15">{this.props.labels[index]}</text>)
      })
      
    
      return(
        <g>
            <line x1={this.props.start} y1={this.props.x } x2={this.props.end} y2={this.props.x} style={ style } />
            { columnLables }
            { lines }
        </g>
      )
    }
  
  }
  
  class Chart extends React.Component {
    render() {
      let data = this.props.data
  
      let margin = {top: 20, right: 20, bottom: 30, left: 45},
        width = this.props.width - margin.left - margin.right,
        height = this.props.height - margin.top - margin.bottom;
  
      let letters = data.map((d) => d.letter)
  
      //D3 mathy bits    
    //   let ticks = d3.range(0, width, (width / data.length))
    let ticks = d3.range(0, width, (width / data.length))
      let x = d3.scaleOrdinal()
        .domain(letters)
        .range(ticks)
      let y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.frequency)])
        .range([height, 0])
  
      let bars = []
      let bottom = 450
      
      data.forEach((datum, index) => {
        //bars.push(<Bar key={index} x={x(datum.letter)} y={bottom - 6 - (height - y(datum.frequency))} width={20} height={height - y(datum.frequency)} />)
        bars.push(<Bar key={index} x={x(datum.letter)} y={bottom - 6 - (height - y(datum.frequency))} width={20} height={height - y(datum.frequency)} />)  
    })
  
      return (
        <svg width={this.props.width} height={this.props.height}>
            <YAxis y={40} labels={y.ticks().reverse()} start={15} end={height} />
            
            <g className="chart" transform={`translate(${margin.left},${margin.top})`}>
               { bars }
               <XAxis x={ bottom } labels={letters} start={0} end={width} />
            </g>
        </svg>
      );
    }
  
  }  
export default Chart