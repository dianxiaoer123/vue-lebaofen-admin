<template>
  <div class="dashboard-editor-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
           <div class='chartName yellowSty'>
           	  <div class='inspan'>
           	  	 <span class="userIcon"></span>
            	   <span>团队一</span>
           	  </div>
           </div>
           
           <div class="chartCont" v-for="item in tableData">
            	<el-row :gutter="0">
                <el-col :span="12">
                	 <div class='colspan'>{{item.name}}</div>
                </el-col>
                <el-col :span="12">
                	 <div class='colspan'>{{item.cont}}</div>
                </el-col>
             </el-row>
           </div>
        </div>
      </el-col>
      
            <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
           <div class='chartName greenSty'>
           	  <div class='inspan'>
           	  	 <span class="userIcon"></span>
            	   <span>团队一</span>
           	  </div>
           </div>
           
           <div class="chartCont" v-for="item in tableData">
            	<el-row :gutter="0">
                <el-col :span="12">
                	 <div class='colspan'>{{item.name}}</div>
                </el-col>
                <el-col :span="12">
                	 <div class='colspan'>{{item.cont}}</div>
                </el-col>
             </el-row>
           </div>
        </div>
      </el-col>
      
            <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
           <div class='chartName blueSty'>
           	  <div class='inspan'>
           	  	 <span class="userIcon"></span>
            	   <span>团队一</span>
           	  </div>
           </div>
           
           <div class="chartCont" v-for="item in tableData">
            	<el-row :gutter="0">
                <el-col :span="12">
                	 <div class='colspan'>{{item.name}}</div>
                </el-col>
                <el-col :span="12">
                	 <div class='colspan'>{{item.cont}}</div>
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

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'dashboard-admin',
  components: {
    PanelGroup,
    LineChart,
  },
  data() {
    return {
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
      lineChartData: lineChartData.newVisitis
    }
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
	background:#ff9666;
}
.greenSty{
	background:#a0d468;
}
.blueSty{
	background:#46c1de;
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
</style>
