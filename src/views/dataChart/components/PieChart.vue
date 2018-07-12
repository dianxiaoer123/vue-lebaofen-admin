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

  },
  watch:{
    dataBar:function(val, oldval){
        this.dataBar=val;
        this.initChart();
    }
  },

  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
       let {xdata,ydata} = this.dataBar;
      this.chart.setOption({
      	color:['#F56D61','#A5C562','#F7C258','#4AC7F3'],
          tooltip: {
           trigger: 'item',
           formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
          legend: {
             data:xdata,
             itemWidth: 10,
             itemHeight: 10
        },
    
      series: [
        {
            name:'所占比例 ',
            type:'pie',
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {      
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
           
            data:ydata
        }
    ]
      })
    }
  }
}
</script>
