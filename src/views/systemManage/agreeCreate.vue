<template>
<div class="app-container">
  	 <div style="width:100%;">
        <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="sendForm.title"></el-input>
        </el-form-item>
        
        <el-form-item label='摘要' prop="outline">
           <el-input v-model="sendForm.outline"></el-input>
        </el-form-item>
        
         <el-form-item label='内容' prop="content">
            <tinymce v-on:tinymce='getTinymce' :value='sendForm.content'></tinymce>
        </el-form-item>

         <el-form-item label=''>
           	<el-button type="warning" @click="sendAgree">发布</el-button>
        </el-form-item>
        
        
      </el-form>
  </div>
</div>
</template>

<script>
import tinymce from '@/components/Tinymce'
import { Message } from 'element-ui'
export default{
  name: 'agreeCreate', 
  components: {tinymce},
  data(){
  	 return {
       sendForm:{}
     }
  },
  watch:{
     '$route': function (to, from){
       var id = to.params.id;
       console.log(to);
       if(to.path == '/systemManage/agree' && id != "undefined" && id != null){
          this.getData(id);
       }else{
        this.sendForm = {content:' '}
      }
     }
  },

 mounted(){
    this.$nextTick( () => {
      var id = this.$route.params.id;
      var path =  this.$route.path;
      console.log(id);
      if(id != "undefined" && path == '/systemManage/agree' && id != null){ 
        this.getData(id);
     
      }else{
        this.sendForm = {content:' '}
      }
      
   })
    
  },
  methods: {
    getData(id){
        this.$store.dispatch('AgreementDetail', id).then((data) => {
           
          if(data.code == 200){
              this.sendForm = data.data;
          }
          })
    },
    getTinymce(msg){
      this.sendForm.content = msg;
    },
    sendAgree(){
        this.$store.dispatch('AgreementSave', this.sendForm).then((data) => {
          if(data.code == 200){
             Message({
             message: '操作成功！',
             type: 'success',
             duration: 5 * 1000
            })
          }
        
        })
    }
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