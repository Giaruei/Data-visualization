import * as echarts from 'echarts';
import 'echarts-gl';
import { useEffect, useRef } from 'react';

export const ChartB = () => {
  const ref = useRef()
  function getVirtualData(year) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(year + '-12-31');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time <= end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }
  useEffect(() => {
    var myChart = echarts.init(ref.current);
    const option = {
      visualMap: {
        show: false,
        min: 0,
        max: 10000
      },
      calendar: {
        range: '2023'
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtualData('2023')
      }
    };

    option && myChart.setOption(option);
  }, [])

  return (
    <div ref={ref} style={{ height: '300px' }}></div>
  )
}