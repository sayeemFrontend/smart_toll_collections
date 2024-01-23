import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLegend } from 'victory'

function CustomBarChart({ chartData = [] }) {
  const data = []
  chartData.forEach((it) => {
    data.push({ group: it.transaction_day, A: it.fair, B: it.MOTOR_BIKE, C: it.CNG })
  })

  const colors = ['#FF5733', '#33FF57', '#5733FF']

  return (
    <VictoryChart width={600} height={270}>
      <VictoryLegend
        x={350}
        y={10}
        orientation="horizontal"
        gutter={20}
        style={{ border: { stroke: '#837e7e4d' } }}
        data={[
          { name: 'Fair', symbol: { fill: colors[0] } },
          { name: 'Motor Bike', symbol: { fill: colors[1] } },
          { name: 'CNG', symbol: { fill: colors[2] } },
        ]}
      />
      <VictoryAxis
        style={{ tickLabels: { fill: 'gray', fontSize: '12px' } }}
        tickValues={data.map((d) => d.group)}
        tickFormat={(tick) => `${tick}`}
      />
      <VictoryAxis
        style={{ tickLabels: { fill: 'gray', fontSize: '12px' } }}
        dependentAxis
        tickFormat={(tick) => tick}
      />
      <VictoryGroup offset={20} colorScale={colors}>
        <VictoryBar data={data} x="group" y="A" />
        <VictoryBar data={data} x="group" y="B" />
        <VictoryBar data={data} x="group" y="C" />
      </VictoryGroup>
    </VictoryChart>
  )
}
export default CustomBarChart
