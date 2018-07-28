<template>
  <div class="app-container">
  	 
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>
  			 <el-form-item label="类型">
           <el-select v-model="searchData.type" placeholder="类型">
              <el-option :label="item" :value="index+1" v-for="(item,index) in typeList" :key='index'></el-option>
           </el-select>
        </el-form-item>
       
      
       <el-form-item label="通道ID">
           <el-input v-model="searchData.id" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
         <el-form-item label="状态">
           <el-select v-model="searchData.status" placeholder="状态">
              <el-option label="启用" value="1"></el-option>
              <el-option label="禁用" value="2"></el-option>
           </el-select>
        </el-form-item>
  		</div>
  		
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getPage">查询</el-button>
          </el-form-item>
       
          <el-form-item>
              <el-button type="primary" icon="el-icon-edit" @click="addForm()">添加</el-button>
          </el-form-item>
           <el-form-item>
              <el-button type="primary" icon="el-icon-download" @click="dialogVisible = true">导出</el-button>
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
      label="通道ID">
    </el-table-column>
    <el-table-column
      property="createTime"
      label="创建时间">
    </el-table-column>
    <el-table-column
      property="name"
      label="名称">
    </el-table-column>
      <el-table-column
      property="type"
      label="类型">
      <template slot-scope="scope">
         <span>{{typeList[scope.row.type-1]}}</span>
      </template>
    </el-table-column>
      <el-table-column
      prop="priorityLevel"
      label="优先级">
      <template slot-scope="scope">
         <span>{{scope.row.priorityLevel}}</span>
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
      label="操作" width='150'>
      
       <template slot-scope="scope">
        <el-button
          size="mini"
          type='success'
          @click="editForm(scope.row.id)">编辑</el-button>
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


 
<!--添加编辑-->
<el-dialog
  title="信息填写"
  :visible.sync="addVisible"
  width="30%">
  <div style="width:80%;">
       <div style='margin-bottom:20px;'><img src="static/images/logo2.png" alt=""></div>
     	 <el-form  label-width="100px" :model="sendForm" :rules="rules" ref="sendForm">
    
        <el-form-item label="名称" prop='name'>
           <el-input v-model="sendForm.name"></el-input>
        </el-form-item>
        
         <el-form-item label="类型" prop="type">
           <el-select v-model="sendForm.type" placeholder="类型">
             <el-option :label="item" :value="index+1" v-for="(item,index) in typeList" :key='index'></el-option>
           </el-select>
         </el-form-item>
         
        <el-form-item label="优先级" prop="priorityLevel">
           <el-input v-model="sendForm.priorityLevel"></el-input>
         </el-form-item>
         
        <el-form-item label="状态" prop="status">
             <el-select v-model="sendForm.status" placeholder="状态">
              <el-option label="启用" :value="1" :key='1'></el-option>
              <el-option label="停用" :value="2" :key="2"></el-option>
           </el-select>
         </el-form-item>

      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('sendForm')">确 定</el-button>
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
    <el-button type="success" @click="deleteData">删除</el-button>
  </span>
</el-dialog>


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
        <input type="hidden" name='id' :value="searchData.id">
        <input type="hidden" name='type' :value="searchData.type">
        <input type="hidden" name='status' :value="searchData.status">
     


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

export default{
  name: 'wayManage',
  mixins: [mixin],
  data(){
  	return{ 
     checkedList:[],
     nameList:['通道ID', '创建时间', '名称', '类型', '优先级','状态'],
     matchObj:{
       '通道ID':"id",
       '创建时间':"createTime",
       '名称':"name",
       '类型':"type",
       '优先级':"priorityLevel",
       '状态':"status",
     },
     dialogVisible:false,
   exportData:{
        cols:[{
          name:"id",
          checked:false
        },{
           name:"createTime",
           checked:false
        },{
           name:"name",
           checked:false
        },{
           name:"type",
           checked:false
        },{
           name:"priorityLevel",
           checked:false
        },{
           name:"status",
           checked:false
        }]
     },
     exportUrl:process.env.BASE_API+'/manageapi/channel/export',
         
  		    addVisible:false,
  		    deleteVisible:false,
  		    sendForm:{
  		     	 status:'',id:'',name:'',type:'',priorityLevel:''
           },
          saveName:'ChannelSave',
          delName:'ChannelDel',
          funcName:'ChannelList',
          editName:'ChannelDetail',
          searchData:{
           type:'',id:'',status:''
          },
          typeList:['预授权','代付','资方','短信','电子发票','支付','身份证识别','银行卡识别','保单效验','四要素效验','电子签章','数据存证'],
          rules:{
            name: [{ required: true, message: '请输入名称', trigger: 'change' }],
            type: [{required: true, message: '请选择类型', trigger: 'change' }],
            priorityLevel: [{required: true, message: '请输入优先级', trigger: 'change' }],
            status: [{required: true, message: '请选择状态', trigger: 'change' }],
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
 .el-rate{
 	margin-top: 10px;
 }
</style>