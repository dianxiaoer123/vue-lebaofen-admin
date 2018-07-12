<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>
  			  <el-form-item label="消费者ID:">
           <el-input v-model="searchData.userCode" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="姓名:">
           <el-input v-model="searchData.name" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="用户状态:">
            <el-select  v-model='searchData.status' placeholder="用户状态">
                <el-option label="正常" value="1"></el-option>
                <el-option label="黑名单" value="2"></el-option>
            </el-select>
      </el-form-item>
  
  		</div>
  		
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getPage">查询</el-button>
          </el-form-item>
      
           <el-form-item>
              <el-button type="primary" icon="el-icon-download">导出</el-button>
          </el-form-item>
          
          
               <el-form-item>
               	 <router-link to="dataChart/ConsumerStatistics">
                    <el-button type="primary">数据统计</el-button>
                </router-link>
            
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
      property="userCode"
      label="消费者ID">
    </el-table-column>
    <el-table-column
      property="createTime"
      label="生成时间">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名">
    </el-table-column>
      <el-table-column
      property="phone"
      label="手机">
    </el-table-column>
      <el-table-column
      property="bank"
      label="开户银行">
    </el-table-column>
      <el-table-column
      property="bankCardNo"
      label="银行账号">
    </el-table-column>
 
      <el-table-column
      property="initPaswordFlag"
      label="账户密码">
    </el-table-column>
        <el-table-column
      property="orderNum"
      label="已成交订单数量">
    </el-table-column>
        <el-table-column
      property="repaidTotalAmount"
      label="订单已还款金额">
    </el-table-column>
         <el-table-column
      property="unpaidTotalAmount"
      label="订单未还款金额">
    </el-table-column>
         <el-table-column
      property="gender"
      label="性别">
    </el-table-column>
     
       <el-table-column
      property="status"
      label="用户状态">
      <template slot-scope="scope">
         {{scope.row.status == 1?"正常":"黑名单"}}
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

</div>
</template>

<script>
import mixin from '@/utils/tablemixin.js';

export default{
  name: 'productManage',
  mixins: [mixin],
  data(){
  	return{ 
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
</style>