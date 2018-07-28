<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>
  			  <el-form-item label="消费者ID">
           <el-input v-model="searchData.userCode" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="姓名">
           <el-input v-model="searchData.name" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="用户状态">
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
              <el-button type="primary" icon="el-icon-download"  @click="dialogVisible = true">导出</el-button>
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

  <div slot="footer">
    <form method="POST" :action="exportUrl">
        <input type="hidden" name="Ticket" :value="ticket"/>
        <input type="hidden" name="pageSize" :value="pageSize"/>
        <input type="hidden" name="pageNo" :value="currentPage"/>

        <!-- 查询条件 -->
        <input type="hidden" name='agentCode' :value="searchData.userCode">
        <input type="hidden" name='status' :value="searchData.status">
        <input type="hidden" name='name' :value="searchData.name">

        <div>
           <!-- 列数 -->
        <div v-for="(item,index) in exportData.cols" :key="index">
      
            <input type="hidden" :name="'cols['+index+'].name'" :value="item.name">
            <input type="hidden" :name="'cols['+index+'].checked'" :value="item.checked">
        </div>

           
        </div>

        <div>
           <el-button @click="dialogVisible = false">取 消</el-button> 
            <input value="导出" type="submit" class='excelBtn'/>   
        </div>
      
    </form>
  </div>

</el-dialog>

</div>
</template>
<script>
import mixin from '@/utils/tablemixin.js';

export default {
  name: 'userwrap',
  mixins: [mixin],
  
  data(){
    return{
     checkedList:[],
     nameList:['消费者ID', '生成时间', '姓名', '手机', '开户银行','银行账号','账户密码','已成交订单数量',
'订单已还款总额','订单未还款总额','状态','性别'],
     matchObj:{
        '消费者ID':"userCode",
       '生成时间':"createTime",
       '姓名':"name",
       '手机':"phone",
       '开户银行':"bank",
       '银行账号':"bankCardNo",
       '账户密码':"initPaswordFlag",
       '已成交订单数量':"orderNum",
       '订单已还款总额':"repaidTotalAmount",
       '订单未还款总额':"unpaidTotalAmount",
        '性别':'gender',
       '状态':"status"
     },
     dialogVisible:false,
     funcName:'ConsumerList',
     searchData:{
        userCode:'',name:'',status:''
     },
     exportData:{
         cols:[{
          name:"userCode",
          checked:false
        },{
           name:"createTime",
           checked:false
        },{
           name:"name",
           checked:false
        },{
           name:"phone",
           checked:false
        },{
           name:"bank",
           checked:false
        },{
           name:"bankCardNo",
           checked:false
        },{
           name:"initPaswordFlag",
           checked:false
        },{
           name:"orderNum",
           checked:false
        },{
           name:"repaidTotalAmount",
           checked:false
        },{
           name:"unpaidTotalAmount",
           checked:false
        },{
           name:"gender",
           checked:false
        },{
           name:"status",
           checked:false
        }]
     },
     exportUrl:process.env.BASE_API+'/manageapi/consumer/export'
    }
  },



  methods:{
    changeStatus(status,id){
        var obj = {
          status:status==1?2:1,
          id:id
        }
         this.$store.dispatch('AgentUpstatus',obj).then((data) => {
           if(data.code == 200){
             this.getPage();
           }
       })
    },

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