<template>
  <div class="app-container">
  	
  	    <el-form :inline="true" :model="formInline" label-width="210px">
  		     <el-form-item label="分期提成比例：">
              <el-input></el-input>
           </el-form-item>
      
          <el-form-item label="增值奖金首次发放触发金额：">
             <el-input></el-input>
          </el-form-item>
      
         <el-form-item label="直接推荐奖励比例：">
            <el-input></el-input>
         </el-form-item>
      
        <el-form-item label="间接推荐奖励比例：">
            <el-input></el-input>
         </el-form-item>
      
        <el-form-item label="增值奖金首次金额：">
            <el-input></el-input>
        </el-form-item>
        
       <el-form-item label="增值奖金发放递增金额：">
            <el-input></el-input>
        </el-form-item>
        
      <el-form-item label="增值奖金递增金额：">
            <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="产品激活原始定价：">
            <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="产品激活优惠价：">
            <el-input></el-input>
        </el-form-item>
        
             <el-form-item label="消费者保证金比例：">
            <el-input></el-input>
        </el-form-item>
        
             <el-form-item label="提现税金比例：">
            <el-input></el-input>
        </el-form-item>
        </el-form>   
        
           <div>
        	 <el-button type="warning">确认</el-button>
        	 <el-button type="success">返回</el-button>
        </div>

</div>
</template>

<script>


export default{
  name: 'businessManage',
  
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