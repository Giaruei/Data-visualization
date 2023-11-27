/* eslint-disable no-unused-vars */

import { ChartA } from "./components/chartA"
import { ChartB } from "./components/chartB"
import { ChartC } from "./components/chartC"
import { ChartD } from "./components/chartD"
import { ChartE } from "./components/chartE"
import { ChartF } from "./components/chartF"
import { ChartG } from "./components/chartG"

function App() {


  return (
    <>
      <ChartA />
      <p>ChartA: 二元函数曲面图</p>
      <ChartB />
      <p>ChartB: 2023年热力图</p>
      <ChartC />
      <p>ChartC: 今日用电量分布</p>
      <ChartD />
      <p>ChartD: 大数据量面积图</p>
      <ChartE />
      <p>ChartE: 浏览器占比变化图</p>
      <ChartF />
      <p>ChartF: 一个简单的散点图</p>
      <ChartG />
      <p>ChartG: 北上广空气污染质量散点矩阵和平行坐标图</p>
    </>
  )
}

export default App
