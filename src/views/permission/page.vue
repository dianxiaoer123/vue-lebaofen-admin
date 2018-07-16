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
      
      
        <el-form-item label="佣金状态">
            <el-select  v-model='searchData.withDrawStatus' placeholder="佣金状态">
                <el-option label="" value=""></el-option>
                <el-option label="已结算" value="1"></el-option>
                <el-option label="待结算" value="2"></el-option>
            </el-select>
      </el-form-item>
      
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getPage">查询</el-button>
          </el-form-item>

           <el-form-item>
              <el-button type="primary" icon="el-icon-download" @click="dialogVisible = true">导出</el-button>
          </el-form-item>
           <!-- <el-form-item>
              <el-button type="primary" @click="cashVisible = true">代理人提现</el-button>
          </el-form-item> -->
      </div>
  
    </el-form>
  		
  	</div>
     
     
<!-- 导出弹窗 -->
  <el-dialog
  title=""
  :visible.sync="dialogVisible"
  width="30%">
 <div style='margin-bottom:20px;'><img src="static/images/logo2.png" alt=""></div>
  <div>
      <el-checkbox-group v-model="checkedList">
        <el-checkbox v-for="name in nameList" :label="name" :key="name">{{name}}</el-checkbox>
     </el-checkbox-group>
  </div>
  <span slot="footer">
     <form method="POST" :action="exportUrl">
        <input type="hidden" name="Ticket" :value="ticket"/>
        <input type="hidden" name="pageSize" :value="pageSize"/>
        <input type="hidden" name="pageNo" :value="currentPage"/>

        <!-- 查询条件 -->
        <input type="hidden" name='id' :value="searchData.agentName">
        <input type="hidden" name='name' :value="searchData.agentCode">
        <input type="hidden" name='backCycle' :value="searchData.orderNo">
        <input type="hidden" name='qs' :value="searchData.status">
      

        <!-- 列数 -->
        <div v-for="(item,index) in exportData.cols" :key="index">
            <input type="hidden" :name="'cols['+index+'].name'" :value="item.name">
            <input type="hidden" :name="'cols['+index+'].checked'" :value="item.checked">
        </div>

        <div>
           <el-button @click="dialogVisible = false">取 消</el-button> 
            <input value="导出" type="submit" class='excelBtn'/>   
        </div>
      
    </form>
   
  </span>
</el-dialog>

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
      property="agentName"
      label="代理人姓名">
    </el-table-column>
      <el-table-column
      property="stageReward"
      label="分期提成">
    </el-table-column>
      <el-table-column
      property="orderAmount"
      label="订单金额">
    </el-table-column>
      <el-table-column
      property="directRcmdName"
      label="直接推荐人">
    </el-table-column>
      <el-table-column
      property="directRcmdReward"
      label="直接推荐奖励金额">
    </el-table-column>
      <el-table-column
      property="indirectRcmdName"
      label="间接推荐人">
    </el-table-column>
      <el-table-column
      property="indirectRcmdReward"
      label="间接推荐奖励金额">
    </el-table-column>
      <el-table-column
      property="status"
      label="结算状态">
      <template slot-scope="scope">
         <div v-if='scope.row.status == 1'>已结算</div>
         <div v-if='scope.row.status == 2'>待结算</div>
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
  name: 'pagePermission',
   mixins: [mixin],
  data(){
  	return{ 
  		    checkedList:[],
          nameList:['订单编号', '订单时间', '代理人姓名', '分期提成', '订单金额','直接推荐人','直接推荐奖励金额','间接推荐人','间接推荐奖励','结算状态'],
          matchObj:{
           '订单编号':"orderNo",
           '订单时间':"orderTime",
           '代理人姓名':"agentName",
           '分期提成':"stageReward",
           '订单金额':"orderAmount",
           '直接推荐人':"directRcmdName",
           "直接推荐奖励金额":"directRcmdReward",
           "间接推荐人":"indirectRcmdName",
           "间接推荐奖励":"indirectRcmdReward",
           "结算状态":"status",

         },
         dialogVisible:false,
       exportData:{
        cols:[{
          name:"orderNo",
          checked:false
        },{
           name:"orderTime",
           checked:false
        },{
           name:"agentName",
           checked:false
        },{
           name:"stageReward",
           checked:false
        },{
           name:"orderAmount",
           checked:false
        },{
           name:"directRcmdName",
           checked:false
        },{
           name:"directRcmdReward",
           checked:false
        },{
           name:"indirectRcmdName",
           checked:false
        },{
           name:"indirectRcmdReward",
           checked:false
        },{
           name:"status",
           checked:false
        }]
     },
          exportUrl:process.env.BASE_API+'/manageapi/finance/agent/rcmdreward/export',
  		    funcName:'RcmdrewardList',
          searchData:{
            agentName:'',agentCode:'',orderNo:'',status:''
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