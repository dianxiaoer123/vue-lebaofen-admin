<template>
  <div class="app-container">
  	
  	<div class='inputBox'>
  	<el-form :inline="true" :model="searchData" label-width="100px" >
     <el-form-item label="订单号">
        <el-input style='width:200px;' v-model="searchData.orderNo" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="代理人姓名">
         <el-input style='width:200px;' v-model="searchData.agentName" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="代理人ID">
         <el-input style='width:200px;' v-model="searchData.agentId" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
      <el-form-item label="消费者ID">
           <el-input style='width:200px;' v-model="searchData.consumerId" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
  		<el-form-item label="消费者姓名">
           <el-input style='width:200px;' v-model="searchData.consumerName" @keyup.enter.native="getPage"></el-input>
      </el-form-item>
      
       <el-form-item label="订单状态">
          <el-select  v-model='searchData.status' placeholder="订单状态">
            <el-option label="已冻结" value="1"></el-option>
            <el-option label="未冻结" value="2"></el-option>
            <el-option label="冻结失败" value="3"></el-option>
          </el-select>
      </el-form-item>
      
         <el-form-item label="结算状态">
              <el-select  v-model='searchData.settlementStatus' placeholder="结算状态">
                <el-option label="已结算" value="1"></el-option>
                <el-option label="未结算" value="2"></el-option>
                <el-option label="结算失败" value="3"></el-option>
            </el-select>
      </el-form-item>
      
         <el-form-item label="当前支付状态">
              <el-select  v-model='searchData.currPayStatus' placeholder="当前支付状态">
                <el-option label="正常" value="1"></el-option>
                <el-option label="扣款失败" value="2"></el-option>
                <el-option label="逾期" value="3"></el-option>
            </el-select>
      </el-form-item>
  
    
      
    
      <div>
      	  <el-form-item>
              <el-button type="primary" icon="el-icon-search" @click="getPage">查询</el-button>
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
      property="orderNo"
      label="订单号">
    </el-table-column>
     <el-table-column
      property="settlementName"
      label="结算户名">
    </el-table-column>
    <el-table-column
      property="mobile"
      label="电话">
    </el-table-column>
    <el-table-column
      property="settlementAmount"
      label="结算金额">
    </el-table-column>
      <el-table-column
      property="periods"
      label="分期期数">
    </el-table-column>
      <el-table-column
      property="goodsAmount"
      label="商品金额">
    </el-table-column>
      <el-table-column
      property="settlementCardNo"
      label="结算卡号">
    </el-table-column>
      <el-table-column
      property="idCard"
      label="身份证号码">
    </el-table-column>
      <el-table-column
      property="creditCardNo"
      label="信用卡号">
    </el-table-column>
      <el-table-column
      property="bank"
      label="开户银行">
    </el-table-column>
      <el-table-column
      property="cardExpired"
      label="卡有效期">
    </el-table-column>
      <el-table-column
      property="settlementStatus"
      label="结算状态">
      <template slot-scope="scope">
         
      </template>
    </el-table-column>
      <el-table-column
      label="操作">
      
       <template slot-scope="scope">
        <el-button
          size="mini"
          type='success'
          @click="detailForm(scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
     
<div class='pageBox'>
 <el-pagination
  background
  layout="prev, pager, next"
  :total="100">
 </el-pagination>
</div>


<!--添加-->
<el-dialog
  title="详情"
  :visible.sync="addVisible"
  width="80%">
  <div>
  	 <el-form :inline="true" label-width="100px" :model="sendForm">
        <el-form-item label="订单号">
          <el-input v-model="sendForm.orderNo"></el-input>
        </el-form-item>

       <el-form-item label="代理人ID">
           <el-input v-model="sendForm.agentId"></el-input>
        </el-form-item>
        
        <el-form-item label="代理人姓名">
           <el-input v-model="sendForm.agentName"></el-input>
        </el-form-item>

        <el-form-item label="身份证号码">
           <el-input v-model="sendForm.idCard"></el-input>
        </el-form-item>

        <el-form-item label="订单金额">
           <el-input v-model="sendForm.orderAmount"></el-input>
        </el-form-item>

        <el-form-item label="消费者ID">
           <el-input v-model="sendForm.consumerId"></el-input>
        </el-form-item>

         <el-form-item label="消费者名称">
           <el-input v-model="sendForm.consumerName"></el-input>
        </el-form-item>

        <el-form-item label="信用卡号">
           <el-input v-model="sendForm.creditCardNo"></el-input>
        </el-form-item>

        <el-form-item label="订单状态">
           <el-input v-model="sendForm.orderStatus"></el-input>
        </el-form-item>

        <el-form-item label="结算户名">
           <el-input v-model="sendForm.settlementName"></el-input>
        </el-form-item>

        <el-form-item label="电话号">
           <el-input v-model="sendForm.mobile"></el-input>
        </el-form-item>
       <el-form-item label="结算金额">
           <el-input v-model="sendForm.settlementAmount"></el-input>
        </el-form-item>

        <el-form-item label="分期期数">
           <el-input v-model="sendForm.periods"></el-input>
        </el-form-item>

        <el-form-item label="商品金额">
           <el-input v-model="sendForm.goodsAmount"></el-input>
        </el-form-item>

        <el-form-item label="开户银行">
           <el-input v-model="sendForm.bank"></el-input>
        </el-form-item>

         <el-form-item label="卡有效期">
           <el-input v-model="sendForm.cardExpired"></el-input>
        </el-form-item>

         <el-form-item label="结算状态">
           <el-input v-model="sendForm.settlementStatus"></el-input>
        </el-form-item>

      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="success" @click="addVisible = false">返回</el-button>
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
    <el-button type="primary" @click="deleteVisible = false">确定</el-button>
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
        <input type="hidden" name='id' :value="searchData.orderNo">
        <input type="hidden" name='name' :value="searchData.settlementStatus">
        <input type="hidden" name='backCycle' :value="searchData.backCycle">
        <input type="hidden" name='qs' :value="searchData.status">
        <input type="hidden" name='qs' :value="searchData.agentId">
        <input type="hidden" name='qs' :value="searchData.agentName">
        <input type="hidden" name='qs' :value="searchData.consumerId">
        <input type="hidden" name='qs' :value="searchData.consumerName">
        <input type="hidden" name='qs' :value="searchData.currPayStatus">

 

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


</div>
</template>

<script>
import mixin from '@/utils/tablemixin.js';
export default {
  name: "pageOrder",
  mixins: [mixin],
  data() {
    return {
 checkedList:[],
     nameList:['订单号', '结算户名', '电话', '结算金额', '分期期数','商品金额','结算卡号','身份证号码','信用卡号','开户银行','卡有效期','结算状态'],
     matchObj:{
       '订单号':"orderNo",
       '结算户名':"settlementName",
       '电话':"mobile",
       '结算金额':"settlementAmount",
       '分期期数':"periods",
       '商品金额':"goodsAmount",
       '结算卡号':"settlementCardNo",
       '身份证号码':"idCard",
       '信用卡号':"creditCardNo",
       '开户银行':"bank",
       '卡有效期':'cardExpired',
       '结算状态':'settlementStatus'
     },
     dialogVisible:false,
   exportData:{
        cols:[{
          name:"orderNo",
          checked:false
        },{
           name:"settlementName",
           checked:false
        },{
           name:"mobile",
           checked:false
        },{
           name:"settlementAmount",
           checked:false
        },{
           name:"periods",
           checked:false
        },{
           name:"goodsAmount",
           checked:false
        },{
           name:"settlementCardNo",
           checked:false
        },{
           name:"idCard",
           checked:false
        },{
           name:"creditCardNo",
           checked:false
        },{
           name:"bank",
           checked:false
        },{
           name:"cardExpired",
           checked:false
        },{
           name:"settlementStatus",
           checked:false
        }]
     },
     exportUrl:process.env.BASE_API+'/manageapi/order/export',

       addVisible:false,
  		 deleteVisible:false,
       funcName:'OrderList',
       searchData:{
          orderNo:'',settlementStatus:'',status:'',agentId:'',agentName:'',
          consumerId:'',consumerName:'',currPayStatus:'',sortName:''
       },
       sendForm:{
         orderNo:'',agentId:'',agentName:'',idCard:'',settlementName:'',mobile:'',
         orderAmount:'',consumerId:'',consumerName:'',creditCardNo:'',orderStatus:'',
         settlementAmount:'',periods:'',goodsAmount:'',bank:'',cardExpired:'',settlementStatus:''
       }
 
    };
  },

  methods: {
    detailForm(obj){
       this.addVisible = true;
       this.sendForm = obj;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.inputBox {
  margin-top: 30px;
  margin-bottom: 20px;
}
.app-container {
  min-height: 800px;
}

</style>