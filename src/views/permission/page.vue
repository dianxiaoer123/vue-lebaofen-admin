<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="formInline">
      <el-form-item label="代理人ID">
           <el-input></el-input>
      </el-form-item>
      
       <el-form-item label="代理人姓名">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="订单编号">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="佣金状态">
            <el-select  v-model='formInline.status' placeholder="佣金状态">
                <el-option label="已结算" value="1"></el-option>
                <el-option label="未结算" value="2"></el-option>
            </el-select>
      </el-form-item>
      
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
           <el-form-item>
              <el-button type="primary">代理人提现</el-button>
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
      label="订单编号">
    </el-table-column>
    <el-table-column
      property="date"
      label="订单时间">
    </el-table-column>
    <el-table-column
      property="name"
      label="代理人姓名">
    </el-table-column>
      <el-table-column
      property="tc"
      label="分期提成">
    </el-table-column>
      <el-table-column
      property="ddje"
      label="订单金额">
    </el-table-column>
      <el-table-column
      property="tjr"
      label="直接推荐人">
    </el-table-column>
      <el-table-column
      property="tjje"
      label="直接推荐奖励金额">
    </el-table-column>
      <el-table-column
      property="jjtrj"
      label="间接推荐人">
    </el-table-column>
      <el-table-column
      property="jjje"
      label="间接推荐奖励金额">
    </el-table-column>
      <el-table-column
      property="status"
      label="佣金状态">
    </el-table-column>
      <el-table-column
      label="操作">
      
       <template slot-scope="scope">
        <el-button
          size="mini"
          type='primary'
          @click="editVisible = true"">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete()">删除</el-button>
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
        <el-form-item label="代理人ID">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="代理人姓名">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="订单编号">
           <el-input></el-input>
         </el-form-item>
         
          <el-form-item label="佣金状态">
            <el-select v-model='sendForm.status' placeholder="佣金状态">
               <el-option label="已结算" value="1"></el-option>
               <el-option label="未结算" value="2"></el-option>
           </el-select>
          </el-form-item>
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible = false">取 消</el-button>
    <el-button type="primary" @click="addVisible = false">确 定</el-button>
  </span>
</el-dialog>

<!--编辑-->
<el-dialog
  title="编辑"
  :visible.sync="editVisible"
  width="30%">
  <div style="width:80%;">
  	 <el-form  label-width="100px" :model="sendForm">
        <el-form-item label="代理人ID">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="代理人姓名">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="订单编号">
           <el-input></el-input>
         </el-form-item>
         
          <el-form-item label="佣金状态">
            <el-select v-model='sendForm.status' placeholder="佣金状态">
               <el-option label="已结算" value="1"></el-option>
               <el-option label="未结算" value="2"></el-option>
           </el-select>
          </el-form-item>
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editVisible = false">取 消</el-button>
    <el-button type="primary" @click="editVisible = false">确 定</el-button>
  </span>
</el-dialog>


</div>
</template>

<script>


export default{
  name: 'pagePermission',
  
  data(){
  	return{ 
  		    editVisible:false,
  		    addVisible:false,
  		     sendForm:{
  		     	 status:''
  		     },
  		     formInline:{
  		     	status:''
  		     },
  		     
  		     tableData: [{
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