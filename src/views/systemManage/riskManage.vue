<template>
  <div class="app-container">
  	
  	<el-tabs type="border-card">
       <el-tab-pane>
         <span slot="label">代理风控</span>
         <el-form :inline="true" :model="formInline">
  		     <el-form-item label="单日累计订单生成笔数：">
              <el-input></el-input>
           </el-form-item>
      
          <el-form-item label="单日提现次数：">
             <el-input></el-input>
          </el-form-item>
      
         <el-form-item label="单笔订单最小金额设置：">
            <el-input></el-input>
         </el-form-item>
      
        <el-form-item label="单日单卡累计订单生成笔数：">
            <el-input></el-input>
         </el-form-item>
      
        <el-form-item label="单笔订单最大金额设置：">
            <el-input></el-input>
        </el-form-item>
        
       <el-form-item label="单日提取金额上限：">
            <el-input></el-input>
        </el-form-item>
        </el-form>   
        
        <div>
        	 <el-button type="success">确认</el-button>
        	 <el-button type="danger">修改</el-button>
        </div>
       </el-tab-pane>
       
        <el-tab-pane>
         <span slot="label">消费者风控</span>
         <el-form :inline="true" :model="formInline">
  		     <el-form-item label="单卡累计未完结分期笔数上限：：">
  		     	  <el-input>
  		     	  	 <template slot="append">
  		     	  	 	  <el-tooltip class="item" effect="dark" content="逾期者名下所有卡片均不支持新增分期" placement="right-end">
  		     	  	 	  	<el-button><span class="el-icon-question"></span></el-button>
                   </el-tooltip>
  		     	  	 </template>
  		     	
  		     	  </el-input>
  		     
         
           </el-form-item>

        </el-form>   
        
        <div>
        	 <el-button type="success">确认</el-button>
        	 <el-button type="danger">修改</el-button>
        </div>
       </el-tab-pane>
       
      
   </el-tabs>
  	
  

</div>
</template>

<script>

import mixin from '@/utils/tablemixin.js';
export default{
  name: 'riskManage',
   mixins: [mixin],
  data(){
  	 
  },
  methods: {
 
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

 .app-container{
 	min-height: 800px;
 }
</style>