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
      property="orderNo"
      label="订单号">
    </el-table-column>
     <el-table-column
      property="agentId"
      label="代理人ID">
    </el-table-column>
     <el-table-column
      property="agentName"
      label="代理人姓名">
    </el-table-column>
     <el-table-column
      property="consumerId"
      label="消费者ID">
    </el-table-column>
     <el-table-column
      property="consumerName"
      label="消费者姓名">
    </el-table-column>
     <el-table-column
      property="orderStatus"
      label="订单状态">
        <template slot-scope="scope">
           {{scope.row.orderStatus == 0?"已冻结":""}}
           {{scope.row.orderStatus == 1?"未冻结":""}}
           {{scope.row.orderStatus == 2?"冻结失败":""}}
      </template>
    </el-table-column>
    <el-table-column
      property="currPayStatus"
      label="当前支付状态">
        <template slot-scope="scope">
           {{scope.row.currPayStatus == 1?"正常":""}}
           {{scope.row.currPayStatus == 2?"扣款失败":""}}
           {{scope.row.currPayStatus == 3?"逾期":""}}
      </template>
    </el-table-column>
     <el-table-column
      property="insuranceNo"
      label="保单号">
    </el-table-column>
    <el-table-column
      property="insureSingleNumber"
      label="投保单号">
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
           {{scope.row.settlementStatus == 1?"已结算":""}}
           {{scope.row.settlementStatus == 2?"未结算":""}}
           {{scope.row.settlementStatus == 3?"结算失败":""}}
      </template>
    </el-table-column>
      <el-table-column
      label="操作" width='360'>
      
       <template slot-scope="scope">
           <el-button
          size="mini"
          type='primary'
          @click="talkForm(scope.row.orderNo)" v-if='scope.row.appealsStatus==1'>申诉通过</el-button>
        <el-button
          size="mini"
          type='success'
          @click="detailForm(scope.row)">详情</el-button>
          <el-button
          size="mini"
          type="danger"
          @click="collectionOrder(scope.row.orderNo)">催收</el-button>
          <el-button
          size="mini"
          type="danger"
          @click="showcard(scope.row.orderNo)">更换信用卡</el-button>
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



<!--添加-->
<el-dialog
  title="详情"
  :visible.sync="addVisible"
  width="80%">
  <div class='detailBoxFrame'>
  	 <el-form :inline="true" label-width="100px" :model="sendForm">
        <el-form-item label="订单号:">
          <span>{{sendForm.orderNo}}</span>
        </el-form-item>

       <el-form-item label="代理人ID:">
          <span>{{sendForm.agentId}}</span>
        </el-form-item>
        
        <el-form-item label="代理人姓名:">
          <span>{{sendForm.agentName}}</span>
        </el-form-item>

        <el-form-item label="身份证号码:">
          <span>{{sendForm.idCard}}</span>
        </el-form-item>

        <el-form-item label="订单金额:">
           <span>{{sendForm.orderAmount}}</span>
        
        </el-form-item>

        <el-form-item label="消费者ID:">
          <span>{{sendForm.consumerId}}</span>
       
        </el-form-item>

         <el-form-item label="消费者名称:">
           <span>{{sendForm.consumerName}}</span>
         
        </el-form-item>

        <el-form-item label="信用卡号:">
          <span>{{sendForm.creditCardNo}}</span>
        
        </el-form-item>

        <el-form-item label="订单状态:">
          <span>{{sendForm.orderStatus == 0?"已冻结":""}}</span>
          <span>{{sendForm.orderStatus == 1?"未冻结":""}}</span>
          <span>{{sendForm.orderStatus == 2?"冻结失败":""}}</span>
          
        </el-form-item>

        <el-form-item label="结算户名:">
          <span>{{sendForm.settlementName}}</span>
          
        </el-form-item>

        <el-form-item label="电话号:">
          <span>{{sendForm.mobile}}</span>
          
        </el-form-item>
       <el-form-item label="结算金额:">
         <span>{{sendForm.settlementAmount}}</span>
        
        </el-form-item>

        <el-form-item label="分期期数:">
          <span>{{sendForm.periods}}</span>
         
        </el-form-item>

        <el-form-item label="商品金额:">
          <span>{{sendForm.goodsAmount}}</span>
        
        </el-form-item>

        <el-form-item label="开户银行:">
          <span>{{sendForm.bank}}</span>
       
        </el-form-item>

         <el-form-item label="卡有效期:">
           <span>{{sendForm.cardExpired}}</span>
         
        </el-form-item>

         <el-form-item label="结算状态:">
           <span>{{sendForm.settlementStatus == 1?"已结算":""}}</span>
           <span>{{sendForm.settlementStatus == 2?"未结算":""}}</span>
           <span>{{sendForm.settlementStatus == 3?"结算失败":""}}</span>
        </el-form-item>

      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="success" @click="addVisible = false">返回</el-button>
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
        <input type="hidden" name='orderNo' :value="searchData.orderNo">
        <input type="hidden" name='settlementStatus' :value="searchData.settlementStatus">
        <input type="hidden" name='status' :value="searchData.status">
        <input type="hidden" name='agentId' :value="searchData.agentId">
        <input type="hidden" name='agentName' :value="searchData.agentName">
        <input type="hidden" name='consumerId' :value="searchData.consumerId">
        <input type="hidden" name='consumerName' :value="searchData.consumerName">
        <input type="hidden" name='currPayStatus' :value="searchData.currPayStatus">
        <input type="hidden" name='sortName' :value="searchData.sortName">


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


<!-- 更换信用卡 -->
<el-dialog
  title="更换信用卡"
  :visible.sync="changeVisible"
  width="650px">
  <div>
  	 <el-form label-width="200px" :model="chageForm" :rules="changerules" ref="chageForm">
        <el-form-item label="卡号" prop="accNo">
           <el-input v-model="chageForm.accNo"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phoneNo">
          <el-input v-model="chageForm.phoneNo"></el-input>
        </el-form-item>

        <el-form-item label="手机验证码" prop="code">
          <el-input v-model="chageForm.code" style='width:200px;'></el-input>
           <el-button
          size="mini"
          type='primary'
          @click="getCode()">获取验证码</el-button>
        </el-form-item>

       <el-form-item label="卡背面的cvn2三位数字" prop="cvn2">
           <el-input v-model="chageForm.cvn2"></el-input>
        </el-form-item>
        
        <el-form-item label="有效期" prop="expired">
             <el-date-picker
              value-format="timestamp"
              format='yyMM'
               v-model="dateExp"
               type="month"
               placeholder="选择有效期">
             </el-date-picker>
        </el-form-item>

      </el-form>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="success" @click="changeCard('chageForm')">确定</el-button>
  </span>
</el-dialog>

<!-- 申诉通过 -->
<el-dialog
  title=""
  :visible.sync="talkVisible"
  width="500">
  <div>
  	  是否确认申诉通过?
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="talkVisible = false">取 消</el-button> 
    <el-button type="success" @click="sureTalk">确定</el-button>
  </span>
</el-dialog>



</div>
</template>

<script>
import mixin from '@/utils/tablemixin.js';
import { Message } from 'element-ui'
import { dateFormat } from '@/utils/formatDate.js'
export default {
  name: "pageOrder",
  mixins: [mixin],
  data() {
    return {
      dateExp:'',
      talkId:'',
      talkVisible:false,
      ordernum:'',
      chageForm:{
        orderNo:'',
        phoneNo:'',
        cvn2:'',
        expired:'',
        accNo:'',
        code:''
      },
      changerules:{
            orderNo: [{ required: true, message: '请输入订单号', trigger: 'change' }],
            phoneNo: [{ required: true, message: '请输入手机号码', trigger: 'change' }],
            cvn2: [{ required: true, message: '请输入卡背面的cvn2三位数字', trigger: 'change' }],
            expired: [{ required: true, message: '请输入有效期', trigger: 'change' }],
            accNo: [{ required: true, message: '请输入卡号', trigger: 'change' }],
            code:[{ required: true, message: '请输入手机验证码', trigger: 'change' }],
          },
      changeVisible:false,
        checkedList:[],
     nameList:['订单号', '代理人ID', '代理人姓名', '消费者ID', '消费者姓名', '当前支付状态', '订单状态', '保单号', '投保单号', '结算户名', '电话','结算金额','分期期数','商品金额','结算卡号'
     ,'身份证号码','信用卡号','开户银行','卡有效期','结算状态'],
     matchObj:{
       '订单号':"orderNo",
       '代理人ID':"agentId",
       '代理人姓名':"agentName",
       '消费者ID':"consumerId",
       '消费者姓名':"consumerName", 
       '当前支付状态':"currPayStatus",
       '订单状态':"orderStatus", 
       '保单号':"insuranceNo",
       '投保单号':"insureSingleNumber",
       '结算户名':"settlementName",
       '电话':"mobile",
       '结算金额':"settlementAmount",
       '分期期数':"periods",
       '商品金额':"goodsAmount",
       '结算卡号':"settlementCardNo",
       '身份证号码':"idCard",
       '信用卡号':"creditCardNo",
       '开户银行':"bank",
       '卡有效期':"cardExpired",
       '结算状态':"settlementStatus",
     },
     dialogVisible:false,
   exportData:{
        cols:[{
          name:"orderNo",
          checked:false
        },{
          name:"agentId",
          checked:false
        },{
          name:"agentName",
          checked:false
        },{
          name:"consumerId",
          checked:false
        },{
          name:"consumerName",
          checked:false
        },{
          name:"currPayStatus",
          checked:false
        },{
          name:"orderStatus", 
          checked:false
        },{
           name:"insuranceNo",
           checked:false
        },{
           name:"insureSingleNumber",
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
           name:"bank",
           checked:false
        },{
           name:"cardExpired",
           checked:false
        },{
           name:"settlementStatus",
           checked:false
        },{
           name:"creditCardNo",
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

   mounted(){
     this.$nextTick(() => {
       var name = this.$route.params.name;
       if(name != ":name"){
        this.searchData.consumerName=name;
        this.getPage();
       }
     
    })
  },

  watch:{
    dateExp:function(value){
      console.log(value);
      var b = new Date(value);
      var a = dateFormat(b);
      this.chageForm.expired = a.substring(2,4)+a.substring(5,7);
    }
  },

  methods: {
    getCode(){
      var phone = this.chageForm.phoneNo;
        if(phone.length != 11){
          if(phone.length == 0){
            Message({
             message: '手机号不能为空',
             type: 'error',
             duration: 5 * 1000
            })
          }else{
              Message({
             message: '手机号格式不对！',
             type: 'error',
             duration: 5 * 1000
            })
          }
         
      }else{
        this.$store.dispatch('SendCode',{phone:phone}).then((data)=>{
          console.log(data);
         if(data.code == 200){
            console.log(data);
         }
      })
      }
    },
    talkForm(id){
      this.talkVisible = true;
      this.talkId = id;
    },
    sureTalk(){
      this.$store.dispatch('ConfirmAppealsOrder',{orderNo:this.talkId}).then((data)=>{
         if(data.code == 200){
           this.talkVisible = false;
         }
      })
    },
    detailForm(obj){
       this.addVisible = true;
       this.sendForm = obj;
    },
    collectionOrder(num){
      var obj = {
        orderNo:num
      }
       this.$store.dispatch('CollectionOrder',obj).then((data) => {
          if(data.code == 200){
             this.getPage();
               Message({
             message: '催收成功！',
             type: 'success',
             duration: 5 * 1000
            })
          }
        
       })
    },
    showcard(ordernum){
      this.ordernum = ordernum;
      this.changeVisible = true;
    },
    changeCard(formName){
        this.chageForm.orderNo = this.ordernum;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('ChangeCard',this.chageForm).then((data) => {
            if(data.code == 200){
              this.changeVisible = false;
             this.getPage();
               Message({
                message: '更换信用卡成功！',
                type: 'success',
                duration: 5 * 1000
              })
            }    
            })
          } else {
            return false;
          }
        });
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
.detailBoxFrame span{
  display: block;
  width:200px;
}

</style>