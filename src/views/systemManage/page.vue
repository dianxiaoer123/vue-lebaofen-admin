<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="formInline">
  		
  		<div>
  			  <el-form-item label="序号">
           <el-input></el-input>
      </el-form-item>
      
       <el-form-item label="产品名称">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="产品期数">
           <el-input></el-input>
      </el-form-item>
      
     <el-form-item label="支付周期">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="产品率费">
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
      label="产品ID">
    </el-table-column>
    <el-table-column
      property="date"
      label="产品设置时间">
    </el-table-column>
    <el-table-column
      property="name"
      label="产品名称">
    </el-table-column>
      <el-table-column
      property="tc"
      label="产品期数">
    </el-table-column>
      <el-table-column
      property="ddje"
      label="支付周期">
    </el-table-column>
      <el-table-column
      property="tjr"
      label="产品费率">
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


<!--添加-->
<el-dialog
  title="添加"
  :visible.sync="addVisible"
  width="30%">
  <div style="width:80%;">
  	 <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="序号">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="产品名称">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="支付周期">
           <el-input></el-input>
         </el-form-item>
         
           <el-form-item label="产品费率">
           <el-input></el-input>
         </el-form-item>
         
         <el-form-item label="产品期数">
         	 <el-tooltip class="item" effect="dark" content="期数不能冲突" placement="right-end">
              <el-input >
               	<template slot="append"><span class="el-icon-question"></span></template>
             </el-input>
          </el-tooltip>
          
         </el-form-item>
         
       
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible = false">取 消</el-button>
    <el-button type="primary" @click="addVisible = false">添加</el-button>
  </span>
</el-dialog>

<!--编辑-->
<el-dialog
  title="编辑"
  :visible.sync="editVisible"
  width="30%">
  <div style="width:80%;">
   <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="序号">
          <el-input></el-input>
        </el-form-item>
        
        
        <el-form-item label="产品名称">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="支付周期">
           <el-input></el-input>
         </el-form-item>
         
           <el-form-item label="产品费率">
           <el-input></el-input>
         </el-form-item>
         
         <el-form-item label="产品期数">
         	 <el-tooltip class="item" effect="dark" content="期数不能冲突" placement="right-end">
              <el-input >
               	<template slot="append"><span class="el-icon-question"></span></template>
             </el-input>
          </el-tooltip>
          
         </el-form-item>
         
       
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editVisible = false">取 消</el-button>
    <el-button type="primary" @click="editVisible = false">确 定</el-button>
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


export default{
  name: 'productManage',
  
  data(){
  	return{ 
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
</style>