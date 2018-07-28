<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>

       <el-form-item label="协议ID" prop="id">
           <el-input v-model="searchData.id" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
        <el-form-item label="创建日期" prop="createTime">
           <el-date-picker
            v-model="searchData.createTime" 
            value-format="timestamp"
            type="date" 
            placeholder="创建时间">
           </el-date-picker>
      </el-form-item>
      
       <el-form-item label="协议名称" prop="title">
           <el-input v-model="searchData.title" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
       
  		</div>
  		
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search"  @click="getPage">查询</el-button>
          </el-form-item>
       
          <el-form-item>
             <!-- <router-link to="agree">
              
             </router-link> -->
              <el-button type="primary" icon="el-icon-edit" @click="editForm(null)">添加</el-button>
             
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
      property="id"
      label="协议ID">
    </el-table-column>
    <el-table-column
      property="title"
      label="协议名称">
    </el-table-column>
    <el-table-column
      prop="outline"
      label="概要">
    </el-table-column>
       <el-table-column
      prop="createTime"
      label="创建日期">
     <template slot-scope="scope">
         <span>{{scope.row.createTime}}</span>
      </template>
    </el-table-column>
     <el-table-column
      property="status"
      label="状态">
      <template slot-scope="scope">
         <span>{{scope.row.status==1?'启用':'停用'}}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="操作" width='250'>
      
       <template slot-scope="scope">
            <el-button
             size="mini"
             type='success' @click="editForm(scope.row.id)">编辑</el-button>

        <el-button
          size="mini"
          type="danger"
          @click="deleteVisible = true">删除</el-button>

            <el-button
          size="mini"
          :type="scope.row.status==1?'danger':'primary'"
          @click="enableAgree(scope.row.id,scope.row.status)">{{scope.row.status==1?'停用':'启用'}}</el-button>
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


</div>
</template>

<script>

import mixin from '@/utils/tablemixin.js';
export default{
  name: 'agreeManage',
 
  mixins: [mixin],
  data(){
  	return{ 
  		  
  		    deleteVisible:false,
          funcName:'AgreementList',
          searchData:{
            id:'',title:'',createTime:''
          },
          sendForm:{
              id:'',
              status:'',
              name:'',
              qs:'',
              backCycle:'',
              rate:''
          },
          saveName:'AgreementSave',
          delName:'AgreementDel',
  	}
  },
 
  methods: {
   editForm(id){
       this.$router.push({
          path: 'agree',
          name:'agreeCreate',
          params: {
            id: id
          }
        })
   },
   enableAgree(id,status){

      var obj = {
        id:id,
        status:status==1?2:1
      }
      this.$store.dispatch('EnableAgree',obj).then((data) => {
          if(data.code == 200){
             this.getPage();        
          }
       })
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