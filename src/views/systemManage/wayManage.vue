<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="sendForm">
  		
  		<div>
  			 <el-form-item label="类型">
           <el-select v-model="sendForm.status" placeholder="类型">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
           </el-select>
        </el-form-item>
      
       <el-form-item label="通道ID">
           <el-input></el-input>
      </el-form-item>
      
         <el-form-item label="状态">
           <el-select v-model="sendForm.status" placeholder="状态">
              <el-option label="启用" value="1"></el-option>
              <el-option label="停用" value="2"></el-option>
           </el-select>
        </el-form-item>
  		</div>
  		
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search">查询</el-button>
          </el-form-item>
       
          <el-form-item>
              <el-button type="primary" icon="el-icon-edit" @click="addVisible = true">添加</el-button>
          </el-form-item>
           <el-form-item>
              <el-button type="primary" icon="el-icon-download">导出</el-button>
          </el-form-item>
       
      </div>
  
    </el-form>
  		
  	</div>
     
 <el-table
     v-loading="loading"
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号">
    </el-table-column>
    <el-table-column
      property="bh"
      label="通道ID">
    </el-table-column>
    <el-table-column
      property="date"
      label="创建时间">
    </el-table-column>
    <el-table-column
      property="name"
      label="名称">
    </el-table-column>
      <el-table-column
      property="tc"
      label="类型">
    </el-table-column>
      <el-table-column
      label="优先级">
       <template slot-scope="scope">
         <span class="el-icon-star-on"></span>
      </template>
    </el-table-column>
      <el-table-column
      property="tjr"
      label="状态">
    </el-table-column>
   
      <el-table-column
      label="操作" width='150'>
      
       <template slot-scope="scope">
        <el-button
          size="mini"
          type='success'
          @click="editVisible = true">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteVisible = true">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
     
<div class='pageBox'>
 <el-pagination
  background
  layout="prev, pager, next"
  :total="100">
 </el-pagination>
</div>


 
<!--编辑-->
<el-dialog
  title="编辑"
  :visible.sync="editVisible"
  width="30%">
  <div style="width:80%;">
     	 <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="通道ID">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="名称">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="类型">
              <el-select v-model="sendForm.status" placeholder="类型">
              <el-option label="预授权" value="1"></el-option>
              <el-option label="代付" value="2"></el-option>
               <el-option label="资方" value="3"></el-option>
                <el-option label="短信" value="4"></el-option>
           </el-select>
         </el-form-item>
         
          <el-form-item label="优先级">
          
            	<el-rate v-model="svalue">
              </el-rate>
         
         </el-form-item>
         
        <el-form-item label="状态">
             <el-select v-model="sendForm.status" placeholder="状态">
              <el-option label="停用" value="1"></el-option>
              <el-option label="启动" value="2"></el-option>
           </el-select>
         </el-form-item>

      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editVisible = false">取 消</el-button>
    <el-button type="primary" @click="editVisible = false">确 定</el-button>
  </span>
</el-dialog>

<!--添加-->
<el-dialog
  title="添加"
  :visible.sync="addVisible"
  width="30%">
  <div style="width:80%;">
     	 <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="通道ID">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="名称">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="类型">
              <el-select v-model="sendForm.status" placeholder="类型">
              <el-option label="预授权" value="1"></el-option>
              <el-option label="代付" value="2"></el-option>
               <el-option label="资方" value="3"></el-option>
                <el-option label="短信" value="4"></el-option>
           </el-select>
         </el-form-item>
         
          <el-form-item label="优先级">
          
            	<el-rate v-model="svalue">
              </el-rate>
         
         </el-form-item>
         
        <el-form-item label="状态">
             <el-select v-model="sendForm.status" placeholder="状态">
              <el-option label="停用" value="1"></el-option>
              <el-option label="启动" value="2"></el-option>
           </el-select>
         </el-form-item>

      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible = false">取 消</el-button>
    <el-button type="primary" @click="addVisible = false">添加</el-button>
  </span>
</el-dialog>



<!--删除-->
<el-dialog
  title="删除"
  :visible.sync="deleteVisible"
  width="30%">
  <span>确定要删除吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="deleteVisible = false">取 消</el-button>
    <el-button type="primary" @click="deleteVisible = false">确定</el-button>
  </span>
</el-dialog>


</div>
</template>

<script>
import mixin from '@/utils/tablemixin.js';

export default{
  name: 'wayManage',
  mixins: [mixin],
  data(){
  	return{ 
  		    svalue:5,
  		    editVisible:false,
  		    addVisible:false,
  		    deleteVisible:false,
  
  		     sendForm:{
  		     	 status:''
  		     },
  		    funcName:'ConsumerList',
       searchData:{
         userCode:'',name:'',status:''
       },
  	}
  },
 
  methods: {
 
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 .inputBox{
 	 margin-top: 30px;
 	 margin-bottom: 20px;
 }
 .app-container{
 	min-height: 800px;
 }
 .el-rate{
 	margin-top: 10px;
 }
</style>