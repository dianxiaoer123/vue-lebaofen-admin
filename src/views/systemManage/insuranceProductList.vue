<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>

       <el-form-item label="名称" prop="name">
           <el-input v-model="searchData.name" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="保险公司ID" prop="insuranceId">
           <el-input v-model="searchData.insuranceId" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       
  		</div>
  		
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search"  @click="getPage">查询</el-button>
          </el-form-item>
       
          <el-form-item>
              <el-button type="primary" icon="el-icon-edit" @click="addForm()">添加</el-button>
             
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
      property="name"
      label="名称">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间">
        <template slot-scope="scope">
          <span>{{scope.row.createTime}}</span>
        </template>
    </el-table-column>
     <el-table-column
      prop="lastUpdateTime"
      label="修改时间">
      <template slot-scope="scope">
         <span>{{scope.row.lastUpdateTime}}</span>
      </template>
    </el-table-column>
     <el-table-column
      prop="insuranceId"
      label="保险公司ID">
    </el-table-column>
      <el-table-column
      label="操作" width='250'>
     <template slot-scope="scope">
      <el-button
          size="mini"
          type="success"
          @click="openEdit(scope.row.id)">编辑</el-button>

        <el-button
          size="mini"
          type="danger"
          @click="deleteForm(scope.row.id)">删除</el-button>
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



<!--删除-->
<el-dialog
  title="删除"
  :visible.sync="deleteVisible"
  width="30%">
  <span>确定要删除吗？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="deleteVisible = false">取 消</el-button>
    <el-button type="success" @click="deleteData">确定</el-button>
  </span>
</el-dialog>



<!--添加/修改-->
<el-dialog
  title="信息填写"
  :visible.sync="addVisible"
  width="30%">
  <div style="width:80%;">
     <div style='margin-bottom:20px;'><img src="static/images/logo2.png" alt=""></div>
  	 <el-form label-width="100px" :model="sendForm" :rules="rules" ref="sendForm">
        <el-form-item label="名称" prop='name'>
           <el-input v-model="sendForm.name"></el-input>
        </el-form-item>

           <el-form-item label="保险公司ID" prop="insuranceId">
           <el-input v-model="sendForm.insuranceId"></el-input>
         </el-form-item>

      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible = false">取 消</el-button>
    <el-button type="success" @click="submitForm('sendForm')">确定</el-button>
  </span>
</el-dialog>



</div>
</template>

<script>

import mixin from '@/utils/tablemixin.js';
export default{
  name: 'insuranceList',
 
  mixins: [mixin],
  data(){
  	return{ 
          addVisible:false,
  		  deleteVisible:false,
          funcName:'InsuranceProductList',
          searchData:{
            insuranceId:'',name:''
          },
          rules:{
            name: [{ required: true, message: '请输入名称', trigger: 'change' }],
            insuranceId: [{ required: true, message: '请输入保险公司ID', trigger: 'change' }]
          },
          sendForm:{
              id:'',
             insuranceId:''
          },
          saveName:'InsuranceProductSave',
          delName:'InsuranceProductDel',
          editName:'InsuranceProductDetail'
  	}
  },
  
  created(){
    this.searchData.insuranceId = this.$route.query.id;
  },  
 
  methods: {
   editForm(id){
      
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