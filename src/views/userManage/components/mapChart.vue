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
  mounted() {
    this.initChart()
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
      	color:['#FF9666','#A0D468','#40CACC','#45C1DD'],
         tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (p / km2)'
        },
 
         series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china', 
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
          
            }
        ]
      })
    }
  }
}
</script>
