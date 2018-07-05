<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="formInline">
  		
  		<div>
  			  <el-form-item label="订单ID">
           <el-input></el-input>
      </el-form-item>
      
       <el-form-item label="代理人姓名">
           <el-input></el-input>
      </el-form-item>
      
        <el-form-item label="代理人ID">
           <el-input></el-input>
      </el-form-item>
      
          <el-form-item label="消费者ID">
           <el-input></el-input>
      </el-form-item>
  		</div>
  		
  				<div>
  			  <el-form-item label="消费者姓名">
           <el-input></el-input>
      </el-form-item>
      
       <el-form-item label="订单状态">
              <el-select  v-model='formInline.status' placeholder="订单状态">
                <el-option label="已冻结" value="1"></el-option>
                <el-option label="未冻结" value="2"></el-option>
                <el-option label="冻结失败" value="2"></el-option>
            </el-select>
      </el-form-item>
      
         <el-form-item label="结算状态">
              <el-select  v-model='formInline.status' placeholder="结算状态">
                <el-option label="已结算" value="1"></el-option>
                <el-option label="未结算" value="2"></el-option>
                <el-option label="结算失败" value="2"></el-option>
            </el-select>
      </el-form-item>
      
         <el-form-item label="当前支付状态">
              <el-select  v-model='formInline.status' placeholder="当前支付状态">
                <el-option label="正常" value="1"></el-option>
                <el-option label="扣款失败" value="2"></el-option>
                <el-option label="逾期" value="2"></el-option>
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
      label="订单ID">
    </el-table-column>
    <el-table-column
      property="date"
      label="电话">
    </el-table-column>
    <el-table-column
      property="name"
      label="订单金额">
    </el-table-column>
      <el-table-column
      property="tc"
      label="分期期数">
    </el-table-column>
      <el-table-column
      property="ddje"
      label="商品金额">
    </el-table-column>
      <el-table-column
      property="tjr"
      label="消费者ID">
    </el-table-column>
      <el-table-column
      property="tjje"
      label="消费者姓名">
    </el-table-column>
      <el-table-column
      property="jjtrj"
      label="身份证号码">
    </el-table-column>
      <el-table-column
      property="jjje"
      label="信用卡号">
    </el-table-column>
      <el-table-column
      property="status"
      label="开户银行">
    </el-table-column>
     </el-table-column>
      <el-table-column
      property="status"
      label="卡有效期">
    </el-table-column>
     </el-table-column>
      <el-table-column
      property="status"
      label="订单状态">
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
  
  <div style="margin-top: 30px;">
	<el-button type="primary" @click="moreVisible = true">更多信息</el-button>
</div>
     
<div class='pageBox'>
 <el-pagination
  background
  layout="prev, pager, next"
  :total="100">
 </el-pagination>
</div>


<!--更多信息-->
<el-dialog
  title="list"
  :visible.sync="moreVisible"
  width="80%">
   <div>
   	<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="tc"
      label="结算金额">
    </el-table-column>
    <el-table-column
      prop="tc"
      label="结算状态">
    </el-table-column>
    <el-table-column
      prop="tc"
      label="结算户名">
    </el-table-column>
     <el-table-column
      prop="tc"
      label="结算卡号">
    </el-table-column>
     <el-table-column
      prop="tc"
      label="代理人ID">
    </el-table-column>
         <el-table-column
      prop="tc"
      label="代理人姓名">
    </el-table-column>
  </el-table>
</template>
   </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="moreVisible = false">返回</el-button>
  </span>
</el-dialog>

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
  name: 'pageOrder',
  
  data(){
  	return{ 
  		    editVisible:false,
  		    addVisible:false,
  		    deleteVisible:false,
  		    moreVisible:false,
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