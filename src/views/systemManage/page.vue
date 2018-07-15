<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData">
  		
  		<div>
  			  <el-form-item label="产品ID">
           <el-input v-model="searchData.id" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="产品名称">
           <el-input v-model="searchData.name" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
        <el-form-item label="产品期数">
           <el-input v-model="searchData.qs" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
     <el-form-item label="支付周期">
           <el-input v-model="searchData.backCycle" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
        <el-form-item label="产品率费">
           <el-input v-model="searchData.rate" @keyup.enter.native="getPage"></el-input>
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
      label="产品ID">
    </el-table-column>
    <el-table-column
      property="createTime"
      label="产品设置时间">
    </el-table-column>
    <el-table-column
      property="name"
      label="产品名称">
    </el-table-column>
      <el-table-column
      property="qs"
      label="产品期数">
    </el-table-column>
      <el-table-column
      property="backCycle"
      label="支付周期">
    </el-table-column>
      <el-table-column
      property="rate"
      label="产品费率">
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


<!--添加/修改-->
<el-dialog
  title="信息填写"
  :visible.sync="addVisible"
  width="30%">
  <div style="width:80%;">
     <div style='margin-bottom:20px;'><img src="static/images/logo2.png" alt=""></div>
  	 <el-form label-width="100px" :model="sendForm" :rules="rules" ref="sendForm">
        <el-form-item label="产品名称" prop='name'>
           <el-input v-model="sendForm.name"></el-input>
        </el-form-item>
        
         <el-form-item label="支付周期" prop="backCycle">
           <el-input v-model="sendForm.backCycle"></el-input>
         </el-form-item>
         
           <el-form-item label="产品费率" prop="rate">
           <el-input v-model="sendForm.rate"></el-input>
         </el-form-item>
         
         <el-form-item label="产品期数" prop="qs">
         	 <el-tooltip class="item" effect="dark" content="期数不能冲突" placement="right-end">
              <el-input v-model="sendForm.qs">
               	<template slot="append"><span class="el-icon-question"></span></template>
             </el-input>
          </el-tooltip>
          
         </el-form-item>
         
       
      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="addVisible = false">取 消</el-button>
    <el-button type="success" @click="submitForm('sendForm')">确定</el-button>
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
        <input type="hidden" name='name' :value="searchData.name">
        <input type="hidden" name='backCycle' :value="searchData.backCycle">
        <input type="hidden" name='qs' :value="searchData.qs">
        <input type="hidden" name='qs' :value="searchData.rate">


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
  name: 'productManage',
  mixins: [mixin],
  data(){
  	return{ 
        checkedList:[],
     nameList:['产品ID', '产品设置时间', '产品名称', '产品期数', '支付周期','产品费率'],
     matchObj:{
       '产品ID':"id",
       '产品设置时间':"createTime",
       '产品名称':"name",
       '产品期数':"qs",
       '支付周期':"backCycle",
       '产品费率':"rate",
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
           name:"qs",
           checked:false
        },{
           name:"backCycle",
           checked:false
        },{
           name:"rate",
           checked:false
        }]
     },
     exportUrl:process.env.BASE_API+'/manageapi/product/export',

  		    addVisible:false,
  		    deleteVisible:false,
          funcName:'ProductList',
          searchData:{
            id:'',name:'',backCycle:'',qs:'',rate:''
          },
          rules:{
            name: [{ required: true, message: '请输入产品名称', trigger: 'change' }],
            backCycle: [{ required: true, message: '请输入支付周期', trigger: 'change' }],
            rate: [{ required: true, message: '请输入产品费率', trigger: 'change' }],
            qs: [{ required: true, message: '请输入产品期数', trigger: 'change' }],
          },
          sendForm:{
              id:'',
              status:'',
              name:'',
              qs:'',
              backCycle:'',
              rate:''
          },
          saveName:'ProductSave',
          delName:'ProductDel',
          editName:'ProductDetail'
         
  		     
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