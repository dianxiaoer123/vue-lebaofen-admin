<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    dataBar:{
    	type:Object,
    	default:{
    		xdata:[],
    		ydata:[]
    	}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch:{
    dataBar:{ 
       handler(val, oldVal){
          this.initChart();
      },
      deep:true
    }
 
  },
  mounted() {
  
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHanlder)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
       let {xdata,ydata} = this.dataBar;
      this.chart.setOption({
      	color:['#a6c462'],
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: xdata,
          axisTick: {
           show: false
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'vistors',
          barWidth: '50',
          data: ydata,
          label: {
                normal: {
                    show: true,
                    position: 'top'
                }
           },
          animationDuration
        }]
      })
    }
  }
}
</script>
