<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
     <el-form-item label="订单编号">
           <el-input  v-model="searchData.orderNo" @keyup.enter.native="getPage"></el-input>
      </el-form-item>

      <el-form-item label="代理人ID">
           <el-input  v-model="searchData.agentCode" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="代理人姓名">
           <el-input v-model="searchData.agentName" @keyup.enter.native="getPage"></el-input>
      </el-form-item>

        <el-form-item label="消费者姓名">
           <el-input v-model="searchData.consumerName" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
      
        <el-form-item label="手续费状态">
            <el-select  v-model='searchData.feeStatus' placeholder="手续费状态">
                <el-option label="" value=""></el-option>
                <el-option label="已支付" value="1"></el-option>
                <el-option label="未支付" value="2"></el-option>
               <el-option label="已退回" value="3"></el-option>
            </el-select>
      </el-form-item>
      
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getPage">查询</el-button>
          </el-form-item>

           <el-form-item>
              <el-button type="primary" icon="el-icon-download">导出</el-button>
          </el-form-item>
           <!-- <el-form-item>
              <el-button type="primary" @click="cashVisible = true">代理人提现</el-button>
          </el-form-item> -->
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
      property="orderNo"
      label="订单编号">
    </el-table-column>
     <el-table-column
      property="orderTime"
      label="订单时间">
    </el-table-column>
    <el-table-column
      property="agentCode"
      label="代理人ID">
    </el-table-column>
    <el-table-column
      property="agentName"
      label="代理人姓名">
    </el-table-column>
      <el-table-column
      property="orderAmount"
      label="订单金额">
    </el-table-column>
    
      <el-table-column
      property="consumerName"
      label="消费者">
    </el-table-column>
      <el-table-column
      property="amount"
      label="订单手续费">
    </el-table-column>
      <el-table-column
      property="status"
      label="手续费状态">
      <template slot-scope="scope">
         <div v-if='scope.row.feeStatus == 1'>已支付</div>
         <div v-if='scope.row.feeStatus == 2'>未支付</div>
         <div v-if='scope.row.feeStatus == 3'>已退回</div>
      </template>
    </el-table-column>
  </el-table>
     
     
  <div class='pageBox'>
       <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 40, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
    </el-pagination>

  </div>




<!--提现-->
<!-- <el-dialog
  title="提现"
  :visible.sync="cashVisible"
  width="30%">
  <div style="width:80%;">
  	 <el-form  label-width="100px" :model="sendForm">
  	 	  <el-form-item label="序号">
          <el-input></el-input>
        </el-form-item>
  	 	
        <el-form-item label="代理人ID">
          <el-input></el-input>
        </el-form-item>
        
        <el-form-item label="代理人姓名">
           <el-input></el-input>
        </el-form-item>
        
         <el-form-item label="提现时间">
           <el-input></el-input>
         </el-form-item>
         
          <el-form-item label="提现金额">
           <el-input></el-input>
         </el-form-item>
         
          <el-form-item label="操作">
            <el-select v-model='sendForm.status' placeholder="">
               <el-option label="通过" value="1"></el-option>
               <el-option label="驳回" value="2"></el-option>
           </el-select>
          </el-form-item>
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cashVisible = false">取 消</el-button>
    <el-button type="primary" @click="cashVisible = false">提现</el-button>
  </span>
</el-dialog>
 -->


</div>
</template>

<script>
import mixin from '@/utils/tablemixin.js';

export default{
  name: 'pagePermission',
   mixins: [mixin],
  data(){
  	return{ 
  		   
  		    funcName:'FeeList',
          searchData:{
            agentName:'',agentCode:'',orderNo:'',consumerName:'',feeStatus:''
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
</style>