<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="sendForm">
  		
  		<div>

       <el-form-item label="序号">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="日期">
           <el-date-picker v-model="value1" type="date" placeholder="选择日期">
           </el-date-picker>
      </el-form-item>
      
       <el-form-item label="作者">
           <el-input></el-input>
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
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号">
    </el-table-column>
    <el-table-column
      property="bh"
      label="作者">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期">
    </el-table-column>
    <el-table-column
     
      label="地位">
        <template slot-scope="scope">
           <el-button type="warning" plain>草案</el-button>
      </template>
    </el-table-column>
      <el-table-column
      property="tc"
      label="标题">
    </el-table-column>
      <el-table-column
      label="重要性">
       <template slot-scope="scope">
         <span class="el-icon-star-on"></span>
      </template>
    </el-table-column>
    
   
      <el-table-column
      label="操作" width='150'>
      
       <template slot-scope="scope">
        <el-button
          size="mini"
          type='primary'
          @click="editVisible = true"">编辑</el-button>
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
  width="80%">
  <div style="width:90%;">
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
         
         <div style="margin-top: 30px;">
         	<el-upload
  class="upload-demo"
  drag
  action=" "
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
         </div>
      </el-form>
      
      
  </div>
 
</el-dialog>

<!--添加-->
<el-dialog
  title="添加"
  :visible.sync="addVisible"
  width="80%">
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
         
         <div style="margin-top: 30px;">
         	<el-upload
  class="upload-demo"
  drag
  action=" "
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
         </div>
      </el-form>
  </div>

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
import tinymce from '@/components/Tinymce'

export default{
  name: 'agreeManage',
  components: {tinymce},
  data(){
  	return{ 
  		    value1:'',
  		    svalue:5,
  		    value:'',
  		    editVisible:false,
  		    addVisible:false,
  		    deleteVisible:false,
  
  		     sendForm:{
  		     	 status:''
  		     },
  		     formInline:{
  		     	status:''
  		     },
  		     
  		     tableData: [{
  		     	bh:1234544,
            date: '1111111',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        },{
  		     	bh:1234544,
            date: '2016-05-02 14:00',
            name: '王小虎',
            tc:33333,
            ddje:123,
            tjr:'王小明',
            tjje:124,
            jjtrj:'赵丽颖',
            jjje:234,
            status:'已结算'
        }],
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