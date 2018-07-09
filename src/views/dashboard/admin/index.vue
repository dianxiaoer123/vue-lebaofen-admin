<template>
  <div class="dashboard-editor-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData" :panel-data='panelData'></panel-group>

    <el-row>
    	<div class="chartTitle">七日累计数据</div>
    	<div style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
    		 <line-chart :chart-data="lineChartData"></line-chart>
    	</div>
     
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8" v-for='(item,index) in topGroups'>
        <div class="chart-wrapper">
           <div class='chartName redSty' v-if='index == 0'>
           	  <div class='inspan'>
           	  	 <span class="userIcon"></span>
            	   <span>{{item.name}}</span>
           	  </div>
           </div>
           
             <div class='chartName greenSty' v-if='index == 1'>
           	  <div class='inspan'>
           	  	 <span class="userIcon"></span>
            	   <span>{{item.name}}</span>
           	  </div>
           </div>
           
             <div class='chartName yellowSty' v-if='index == 2'>
           	  <div class='inspan'>
           	  	 <span class="userIcon"></span>
            	   <span>{{item.name}}</span>
           	  </div>
           </div>
           
           <div class="chartCont">
            	<el-row :gutter="0">
                <el-col :span="12">
                	 <div class='colspan'>团队名称</div>
                </el-col>
                <el-col :span="12">
                	 <div class='colspan'>{{item.name}}</div>
                </el-col>
             </el-row>
           </div>
           
              <div class="chartCont">
            	<el-row :gutter="0">
                <el-col :span="12">
                	 <div class='colspan'>累计订单笔数</div>
                </el-col>
                <el-col :span="12">
                	 <div class='colspan'>{{item.orderNum}}</div>
                </el-col>
             </el-row>
           </div>
           
              <div class="chartCont">
            	<el-row :gutter="0">
                <el-col :span="12">
                	 <div class='colspan'>累计成交订单金额</div>
                </el-col>
                <el-col :span="12">
                	 <div class='colspan'>{{item.orderAmount}}</div>
                </el-col>
             </el-row>
           </div>
           
              <div class="chartCont">
            	<el-row :gutter="0">
                <el-col :span="12">
                	 <div class='colspan'>团队人数</div>
                </el-col>
                <el-col :span="12">
                	 <div class='colspan'>{{item.memberNum}}</div>
                </el-col>
             </el-row>
           </div>
        </div>
      </el-col>

             </el-row>
           </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>

import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'



export default {
  name: 'dashboard-admin',
  components: {
    PanelGroup,
    LineChart,
  },
  data() {
    return {
    	 topGroups:[],
    	  panelData:{
    	  	yd:{
    	  		addConsumerNum:0,
    	  		addOrderNum:0,
    	  		addOrderAmount:0
    	  	},
    	  	total:{
    	  		agentNum:0,
    	  		consumerNum:0,
    	  		orderAmount:0,
    	  		orderNum:0
    	  	}
    	  },
    	  tableData: [{
            name: '团队名称：',
            cont: '名称一'
          },{
            name: '累计成交订单金额：',
            cont: '1340000'
          },{
            name: '累计订单笔数：',
            cont: '10'
          },{
            name: '团队人数：',
            cont: '50'
          }],
      lineChartData: {
      	dateData:[],
      	expectedData:[],
      	actualData:[]
      }
    }
  },
  mounted(){
  	var that = this;
  	  this.$store.dispatch('GetCount').then((data) => {
         console.log(data);
         var count = data.data;
         that.panelData={yd:count.yd,total:count.total};
         that.topGroups = count.topGroups;

         count.sevenDaysOrderStatistics.forEach(function (element, index, array) {

            that.lineChartData.dateData.push(element.date);  
            that.lineChartData.expectedData.push(element.orderNum+element.returnNum);  
            that.lineChartData.actualData.push(element.orderAmount+element.returnAmount);  
        });
         
        
     })
  },

  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
/*    padding: 16px 16px 0;*/
    margin-bottom: 32px;
  }
}
.chartName{
	height: 60px;
	text-align: center;
  line-height: 60px;
  color:#fff;
}
.chartCont{
	width: 100%;
}
.el-table .hidden-columns{
	width:50%;
}
.el-table__body, .el-table__footer, .el-table__header{
	width:100% !important;
}
.el-table__body, .el-table__footer, .el-table__header{
	width:100% !important;
}
.el-table__row{
	width: 50% !important;
}

.yellowSty{
	background:#f7c258;
}
.greenSty{
	background:#a5c562;
}
.redSty{
	background:#f56d61;
}
.chartName span{
	float: left;
	display: inline-block;
}
.inspan{
	display: inline-block;
}
.colspan{
	border:1px solid #ebeef5;
	height: 50px;
	line-height: 50px;
	text-indent: 10px;
	color:#606266;
}
.chartTitle{
	height: 50px;
	line-height: 50px;
	background: #0063d6;
	color:white;
	text-align: center;
}
</style>
