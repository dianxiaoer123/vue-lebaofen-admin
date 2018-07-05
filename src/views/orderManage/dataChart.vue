<template>
  <div class="app-container">
  
  <el-row :gutter="20">
    <el-col :span="16">
    	 <div class="chartBox">
    	 	  <div class="chartName greenStyl">笔数</div>
    	 	  <bar-chart :dataBar='bar1Data'></bar-chart>
    	 </div>
    </el-col>
    <el-col :span="8">
  		 <div class="chartBox">
    	 	  <div class="chartName blueStyl">持卡号订单比例</div>
    	 	  <bar-chart :dataBar='bar2Data'></bar-chart>
    	 </div>
    </el-col>
    
   
</el-row>

<div style="margin-top: 80px;">
	<el-row>
   	   <el-col :span="24">
  		  <div class="chartBox">
    	 	  <div class="chartName greenStyl">持卡号订单比例</div>
    	 	  <bar-chart :dataBar='bar3Data'></bar-chart>
    	  </div>
       </el-col>
    </el-row>
</div>
  	
  
</div>
</template>

<script>

import BarChart from './components/BarChart'
export default{
  name: 'dataChart',
  components: {
    BarChart
  },
  
  data(){
  	return{ 
  		  bar1Data:{
  		  	xdata:["累计订单笔数","持卡累计成功订单笔数","累计申诉笔数","累计支付失败订单笔数","累计成功订单笔数","累计未支付订单笔数"],
  		  	ydata:[123,111,222,234,333,907]
  		  },
  		   bar2Data:{
  		  	xdata:["持卡支付失败订单比例","持卡未支付订单比例"],
  		  	ydata:[123,111]
  		  },
  		     bar3Data:{
  		  	xdata:["持卡行累计支付订单金额","累计未支付订单金额","累计支付失败订单金额","持卡行支付成功订单单均金额","持卡行支付失败订单单均金额","累计订单金额","累计申诉金额"],
  		  	ydata:[1123,2111,1345,3133,3453,1321,1164]
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
</style>