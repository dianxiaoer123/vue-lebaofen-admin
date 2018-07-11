<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>
  			  <el-form-item label="用户ID" prop="id">
           <el-input v-model="searchData.id" @keyup.enter.native="getPage"></el-input>
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
              <el-button type="primary" icon="el-icon-search">查询</el-button>
          </el-form-item>
      
           <el-form-item>
              <el-button type="primary" icon="el-icon-download">导出</el-button>
          </el-form-item>
               <el-form-item>
               	 <router-link to="/userManage/dataChart">
                    <el-button type="primary">数据统计</el-button>
                </router-link>
            
          </el-form-item>
       
      </div>
  
    </el-form>
  		
  	</div>
     
 <el-table
    
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号">
    </el-table-column>
    <el-table-column
      property="id"
      label="用户ID">
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
      label="状态">
      <template slot-scope="scope">
         {{scope.row.status == 1?"启用":"停用"}}
      </template>
    </el-table-column>
   
      <el-table-column
      label="操作" width='150'>
      
       <template slot-scope="scope">
        <el-button
          size="mini"
          type='success'
          @click="editVisible = true" v-if='scope.row.status == 2'>启用</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="deleteVisible = true" v-if='scope.row.status == 1'>停用</el-button>
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
export default {
  name: 'productManage',
  mixins: [mixin],
  
  data(){
    return{
     funcName:'AgentList',
     searchData:{
      //  id:'',name:'',company:'',status:''
     }
    }
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