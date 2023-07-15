import { SvgChart, SVGRenderer } from '@wuba/react-native-echarts';
import * as echarts from 'echarts/core';
import { useRef, useEffect } from 'react';
// import {Dimensions} from 'react-native';
import {
  BarChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';

// Register extensions
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  // ...
  BarChart,
])

const E_HEIGHT = 200;
const E_WIDTH = 330;
// const E_HEIGHT = Dimensions.get('screen').height;
// const E_WIDTH = Dimensions.get('screen').width;


// Initialize
function ChartComponent({ option }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart
    if (chartRef.current) {
      // @ts-ignore
      chart = echarts.init(chartRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option]);

  // Choose your preferred chart component
  // return <SkiaChart ref={chartRef} />;
  return <SvgChart ref={chartRef} />;
}

// Component usage
export default function App() {
  const option = {
    xAxis: {
      type: 'category',
      data: ['0a', '1a', '2a','3a', '4a','5a', '6a', '7a','8a','9a','10a','11a', '12p','1p', '2p', '3p', '4p', '5p', '6p','7p', '8p', '9p', '10p','11p'],
      // axisTick: {
      //   alignWithLabel: true,
      //   itemStyle: 'red'
      // }
    },
    yAxis: {
      // type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    series: [
      {
        data: [0,0,0,0,0,0,0,5,10,40,{value: 70, itemStyle:{color: '#045BC6'}},60,50,55,70,60,30,20,10,3,0,0,0,0],
        type: 'bar',
      },
    ],
    color: [
      // '#045BC6',
      'background: rgba(4, 91, 198, 0.50)'
    ],
  }
  return <ChartComponent option={option} />
}
