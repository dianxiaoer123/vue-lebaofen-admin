<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>
  			  <el-form-item label="代理人ID" prop="agentCode">
           <el-input v-model="searchData.agentCode" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="姓名" prop="name">
           <el-input v-model="searchData.name" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
        <el-form-item label="所在公司" prop="company">
           <el-input v-model="searchData.company" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="用户状态">
            <el-select  v-model='searchData.status' placeholder="用户状态">
                <el-option label="启用" value="1"></el-option>
                <el-option label="停用" value="2"></el-option>
            </el-select>
      </el-form-item>
  
  		</div>
  		
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getPage">查询</el-button>
          </el-form-item>
      
           <el-form-item>
              <el-button type="primary" icon="el-icon-download" @click="dialogVisible = true">导出</el-button>
          </el-form-item>
               <el-form-item>
               	 <router-link to="dataChart/AgentStatistics">
                    <el-button type="primary">数据统计</el-button>
                </router-link>
            
          </el-form-item>

           <el-form-item>
              <el-button type="primary" @click="resetForm('searchData')">重置</el-button>
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
      property="agentCode"
      label="代理人ID">
    </el-table-column>
    <el-table-column
      property="createTime"
      label="申请时间">
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
      property="company"
      label="所在公司">
    </el-table-column>
      <el-table-column
      property="bank"
      label="开启银行">
    </el-table-column>

    <el-table-column
      property="cardNo"
      label="银行账号">
    </el-table-column>
        <el-table-column
      property="accountPassword"
      label="账户密码">
       <template slot-scope="scope">
         {{scope.row.accountPassword == 0?"未设置":"已设置"}}
      </template>
    </el-table-column>
        <el-table-column
      property="status"
      label="用户状态">
      <template slot-scope="scope">
         {{scope.row.status == 1?"启用":"停用"}}
      </template>
    </el-table-column>
   
      <el-table-column
      label="操作" width='150'>
      
       <template slot-scope="scope">

        <el-button
          size="mini"
          :type="scope.row.status == 1?'danger':'success'"
          @click="changeStatus(scope.row.status,scope.row.id)">{{scope.row.status == 1?"停用":"启用"}}</el-button>
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
        <input type="hidden" name='agentCode' :value="searchData.agentCode">
        <input type="hidden" name='status' :value="searchData.status">
        <input type="hidden" name='name' :value="searchData.name">
        <input type="hidden" name='company' :value="searchData.company">

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
   
    <!-- <el-button type="success" @click="exportClick">导出</el-button> -->
  </span>


</el-dialog>

</div>
</template>

<script>
import mixin from '@/utils/tablemixin.js';

export default {
  name: 'user',
  mixins: [mixin],
  
  data(){
    return{
     checkedList:[],
     nameList:['代理人ID', '申请时间', '姓名', '手机', '所在公司','开启银行','银行账号','账户密码','状态'],
     matchObj:{
       '代理人ID':"agentCode",
       '申请时间':"createTime",
       '姓名':"name",
       '手机':"phone",
       '所在公司':"company",
       '开启银行':"bank",
       '银行账号':"cardNo",
       '账户密码':"accountPassword",
       '状态':"status"
     },
     dialogVisible:false,
     funcName:'AgentList',
     searchData:{
       agentCode:'',name:'',company:'',status:''
     },
     exportData:{
        cols:[{
          name:"agentCode",
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
           name:"company",
           checked:false
        },{
           name:"bank",
           checked:false
        },{
           name:"cardNo",
           checked:false
        },{
           name:"accountPassword",
           checked:false
        },{
           name:"status",
           checked:false
        }]
     },
     exportUrl:process.env.BASE_API+'/manageapi/agent/export'
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