import React from 'react'
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
} from 'victory'

function CustomBarChart({ chartData = [] }) {
  const stackOne = []
  const stackTwo = []
  const stackThree = []
  chartData.forEach((it, i) => {
    stackOne.push({ x: i + 1, y: it.fair })
    stackTwo.push({ x: i + 1, y: it.MOTOR_BIKE })
    stackThree.push({ x: i + 1, y: it.CNG })
  })

  const colors = ['#3b82f6', '#2563eb', '#BDBDBD']

  return (
    <VictoryChart width={600} height={270}>
      <VictoryLegend
        x={400}
        y={20}
        symbolSpacer={4}
        style={{ labels: { fontSize: '12', fill: 'gray' } }}
        orientation="horizontal"
        colorScale={colors}
        data={[
          { name: 'Fair', symbol: { type: 'circle' } },
          { name: 'MOTO_BIKE', symbol: { type: 'circle' } },
          { name: 'CNG', symbol: { type: 'circle' } },
        ]}
      />
      <VictoryAxis
        style={{ tickLabels: { fontSize: '6px', fill: 'gray' } }}
        tickValues={chartData?.map((it) => it.transaction_day)}
        tickLabelComponent={<VictoryLabel backgroundPadding={4} angle={-40} />}
      />
      <VictoryAxis
        dependentAxis
        style={{ tickLabels: { fontSize: '10px', fill: 'gray' } }}
        tickFormat={(tik) => `${tik}`}
        domain={[0, 1000]}
      />
      <VictoryGroup offset={20} colorScale={colors}>
        <VictoryBar data={stackOne} />
        <VictoryBar data={stackTwo} />
        <VictoryBar data={stackThree} />
      </VictoryGroup>
    </VictoryChart>
  )
}

// function CustomBarChart({ chartData = [] }) {
//   const data = []
//   chartData.forEach((it) => {
//     data.push({ group: it.transaction_day, A: it.fair, B: it.MOTOR_BIKE, C: it.CNG })
//   })

//   const colors = ['#FF5733', '#33FF57', '#5733FF']

//   return (
//     <VictoryChart width={600} height={270}>
//       <VictoryLegend
//         x={350}
//         y={10}
//         orientation="horizontal"
//         gutter={20}
//         style={{ border: { stroke: '#837e7e4d' } }}
//         data={[
//           { name: 'Fair', symbol: { fill: colors[0] } },
//           { name: 'Motor Bike', symbol: { fill: colors[1] } },
//           { name: 'CNG', symbol: { fill: colors[2] } },
//         ]}
//       />
//       <VictoryAxis
//         style={{ tickLabels: { fill: 'gray', fontSize: '12px' } }}
//         tickValues={data.map((d) => d.group)}
//         tickFormat={(tick) => `${tick}`}
//       />
//       <VictoryAxis
//         style={{ tickLabels: { fill: 'gray', fontSize: '12px' } }}
//         dependentAxis
//         tickFormat={(tick) => tick}
//       />
//       <VictoryGroup offset={20} colorScale={colors}>
//         <VictoryBar data={data} x="group" y="A" />
//         <VictoryBar data={data} x="group" y="B" />
//         <VictoryBar data={data} x="group" y="C" />
//       </VictoryGroup>
//     </VictoryChart>
//   )
// }
export default CustomBarChart
