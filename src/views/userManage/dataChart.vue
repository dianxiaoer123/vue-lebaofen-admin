<template>
  <div class="app-container">
  
  <el-row :gutter="20">
    <el-col :span="12">
    	 <div class="chartBox">
    	 	  <div class="chartName yellowStyl">年龄段</div>
    	 	  <pie-chart :dataBar='bar1Data'></pie-chart>
    	 </div>
    </el-col>
    <!--<el-col :span="8">
  		 <div class="chartBox">
    	 	  <div class="chartName greenStyl">地区</div>
    	 	  <map-chart :dataBar='bar2Data'></map-chart>
    	 </div>
    </el-col>-->
    
     <el-col :span="12">
  		 <div class="chartBox">
    	 	  <div class="chartName blueStyl">性别</div>
    	 	  <pie-chart :dataBar='bar2Data'></pie-chart>
    	 </div>
    </el-col>
    
   
</el-row>


  	
  
</div>
</template>

<script>

import PieChart from './components/PieChart'
import MapChart from './components/mapChart'
export default{
  name: 'dataChart',
  components: {
    PieChart,MapChart
  },
  
  data(){
  	return{ 
  		  bar1Data:{
  		  	xdata:['28岁以下','28-35岁','35-45岁','45岁以上'],
  		  	ydata:[
                {value:335, name:'28岁以下'},
                {value:310, name:'28-35岁'},
                {value:234, name:'35-45岁'},
                {value:135, name:'45岁以上'}
            ]
  		  },
  		   bar2Data:{
  		  	xdata:['男','女'],
  		  	ydata:[
                {value:335, name:'男'},
                {value:310, name:'女'}
            ]
  		  }
  	}
  },
 
  methods: {
 
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

 .app-container{
 	min-height: 800px;
 }
 .chartBox{
 	border:1px solid #eee;
 }
 .chartName{
 	font-size: 16px;
 	text-align: center;
  height:60px;
  line-height: 60px;
  margin-bottom: 30px;
  color:white;
 }
 .greenStyl{
 	 background: #A0D468;
 }
 .blueStyl{
 	background: #45C1DD;
 }
 .yellowStyl{
 	background: #FF9666;
 }
</style>