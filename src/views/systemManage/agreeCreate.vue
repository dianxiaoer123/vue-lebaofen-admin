<template>
<div class="app-container">
  	 <div style="width:100%;">
        <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="标题">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="标题">
           <el-row :gutter="5">
             <el-col :span="4">
             	  <el-form-item >
                 <el-input></el-input>
               </el-form-item>
             </el-col>
             <el-col :span="4">
             	   <el-form-item label="发布时间">
                 <el-input></el-input>
               </el-form-item>
             </el-col>
             <el-col :span="8">
             	   <el-form-item label="重要性">
                  <el-rate v-model="value"></el-rate>
               </el-form-item>
             	
             </el-col>
    
        </el-row>
        </el-form-item>
        <el-form-item label='摘要'>
           <el-input></el-input>
        </el-form-item>
        
           <el-form-item label=''>
           	<el-button type="warning">发布</el-button>
            <el-button type="success">草稿</el-button>
        </el-form-item>
        
         <div>
         	  <tinymce></tinymce>
         </div>
      </el-form>
  </div>
</div>
</template>

<script>
import tinymce from '@/components/Tinymce'

export default{
  name: 'agreeCreate',
  components: {tinymce},
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
.el-rate{
 	margin-top: 10px;
 }
</style>