<template>
  <div class="app-container">
  
  <el-row :gutter="20">
    <el-col :span="8">
    	 <div class="chartBox">
    	 	  <div class="chartName yellowStyl">年龄段</div>
    	 	  <pie-chart :dataBar='ageData'></pie-chart>
    	 </div>
    </el-col>
    <el-col :span="8">
  		 <div class="chartBox">
    	 	  <div class="chartName greenStyl">地区</div>
    	 	   <pie-chart :dataBar='areaData'></pie-chart>
    	 </div>
    </el-col>
    
     <el-col :span="8">
  		 <div class="chartBox">
    	 	  <div class="chartName blueStyl">性别</div>
    	 	  <pie-chart :dataBar='sexData'></pie-chart>
    	 </div>
    </el-col>
    
   
</el-row>


  	
  
</div>
</template>

<script>

import PieChart from './components/PieChart'

export default{
  name: 'dataChart',
  components: {
    PieChart
  },
  
  data(){
  	return{ 
        ageData:{
          xdata:[],
          ydata:[]
        },
        areaData:{},
        sexData:{},
  	}
  },

  mounted(){
	this.$store.dispatch('AgentStatistics').then((data) => {
         console.log(data);
         if(data.code == 200){
         var age = data.data.age;
         var area = data.data.area;
         var sex = data.data.sex;
         this.ageData = this.keynameUp(age);
         this.areaData = this.keynameUp(area);
         this.sexData = this.keynameUp(sex);
         }

    })
  },
 
  methods: {
     keynameUp(data){
         var ag = JSON.parse(JSON.stringify(data).replace(/label/g,"name"));
         var ydata = JSON.parse(JSON.stringify(ag).replace(/val/g,"value"));
         var xdata = [];
         ydata.map((value)=>{
             xdata.push(value);
         })

         return {
           xdata:xdata,
           ydata:ydata
         }
     }
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