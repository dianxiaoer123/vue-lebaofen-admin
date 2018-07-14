<template>
  <div class="app-container">
  	<el-tabs type="border-card">
       <el-tab-pane>
         <span slot="label">代理风控</span>
           <el-form :inline="true" label-width="220px">
  		     <el-form-item :label="item.label" :key="item.key" v-for="item in agentConfig">
  		     	<el-input v-model="item.value"></el-input>
             </el-form-item>

        </el-form>   
        
        <div>
        	 <el-button type="success" @click="saveList(1)">确认</el-button>
        	 <el-button type="danger" @click="saveList(1)">修改</el-button>
        </div>


       </el-tab-pane>
       
        <el-tab-pane>
         <span slot="label">消费者风控</span>
         <el-form :inline="true">
  		     <el-form-item :label="item.label" :key="item.key" v-for="item in comConfig">
  		     	  <el-input v-model="item.value">
  		     	  	 <template slot="append">
  		     	  	 	  <el-tooltip class="item" effect="dark" content="逾期者名下所有卡片均不支持新增分期" placement="right-end">
  		     	  	 	  	<el-button><span class="el-icon-question"></span></el-button>
                   </el-tooltip>
  		     	  	 </template>
  		     	  </el-input>
           </el-form-item>
        </el-form>   

        
        <div>
        	 <el-button type="success" @click="saveList(2)">确认</el-button>
        	 <el-button type="danger" @click="saveList(2)">修改</el-button>
        </div>
       </el-tab-pane>
       
      
   </el-tabs>
  	
  

</div>
</template>

<script>
import mixin from '@/utils/configmixin.js';

export default{
  name: 'riskManage',
  mixins: [mixin],
  data(){
      return{
        agentConfig:[],
        comConfig:[]
    }
     
  },
  created(){
     this.getList(1);
     this.getList(2);
  },
 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

 .app-container{
 	min-height: 800px;
 }
</style>