webpackJsonp([18],{"/KzA":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.inputBox[data-v-1fdd257c] {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.app-container[data-v-1fdd257c] {\n  min-height: 800px;\n}\n",""])},DFMp:function(e,t,a){var r=a("/KzA");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("8bSs")("67b00aa8",r,!0)},erlX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("svQp"),o=a("dVeB"),n={name:"pageOrder",mixins:[r.a],data:function(){return{ordernum:"",chageForm:{orderNo:"",phoneNo:"",cvn2:"",expired:"",accNo:""},changerules:{orderNo:[{required:!0,message:"请输入订单号",trigger:"change"}],phoneNo:[{required:!0,message:"请输入手机号码",trigger:"change"}],cvn2:[{required:!0,message:"请输入卡背面的cvn2三位数字",trigger:"change"}],expired:[{required:!0,message:"请输入有效期",trigger:"change"}],accNo:[{required:!0,message:"请输入卡号",trigger:"change"}]},changeVisible:!1,checkedList:[],nameList:["订单号","代理人ID","代理人姓名","消费者ID","消费者姓名","当前支付状态","订单状态","保单号","投保单号","结算户名","电话","结算金额","分期期数","商品金额","结算卡号","身份证号码","信用卡号","开户银行","卡有效期","结算状态"],matchObj:{"订单号":"orderNo","代理人ID":"agentId","代理人姓名":"agentName","消费者ID":"consumerId","消费者姓名":"consumerName","当前支付状态":"currPayStatus","订单状态":"orderStatus","保单号":"insuranceNo","投保单号":"insureSingleNumber","结算户名":"settlementName","电话":"mobile","结算金额":"settlementAmount","分期期数":"periods","商品金额":"goodsAmount","结算卡号":"settlementCardNo","身份证号码":"idCard","信用卡号":"creditCardNo","开户银行":"bank","卡有效期":"cardExpired","结算状态 ":"settlementStatus"},dialogVisible:!1,exportData:{cols:[{name:"orderNo",checked:!1},{name:"agentId",checked:!1},{name:"agentName",checked:!1},{name:"consumerId",checked:!1},{name:"consumerName",checked:!1},{name:"currPayStatus",checked:!1},{name:"orderStatus",checked:!1},{name:"insuranceNo",checked:!1},{name:"insureSingleNumber",checked:!1},{name:"settlementName",checked:!1},{name:"mobile",checked:!1},{name:"settlementAmount",checked:!1},{name:"periods",checked:!1},{name:"goodsAmount",checked:!1},{name:"settlementCardNo",checked:!1},{name:"idCard",checked:!1},{name:"bank",checked:!1},{name:"cardExpired",checked:!1},{name:"settlementStatus",checked:!1},{name:"creditCardNo",checked:!1}]},exportUrl:"http://www.fqp360.com/manageapi/order/export",addVisible:!1,deleteVisible:!1,funcName:"OrderList",searchData:{orderNo:"",settlementStatus:"",status:"",agentId:"",agentName:"",consumerId:"",consumerName:"",currPayStatus:"",sortName:""},sendForm:{orderNo:"",agentId:"",agentName:"",idCard:"",settlementName:"",mobile:"",orderAmount:"",consumerId:"",consumerName:"",creditCardNo:"",orderStatus:"",settlementAmount:"",periods:"",goodsAmount:"",bank:"",cardExpired:"",settlementStatus:""}}},methods:{detailForm:function(e){this.addVisible=!0,this.sendForm=e},collectionOrder:function(e){var t=this,a={orderNo:e};this.$store.dispatch("CollectionOrder",a).then(function(e){200==e.code&&(t.getPage(),Object(o.Message)({message:"催收成功！",type:"success",duration:5e3}))})},showcard:function(e){this.ordernum=e,this.changeVisible=!0},changeCard:function(e){var t=this;this.chageForm.orderNo=this.ordernum,this.$refs[e].validate(function(e){if(!e)return!1;t.$store.dispatch("ChangeCard",t.chageForm).then(function(e){200==e.code&&(t.changeVisible=!1,t.getPage(),Object(o.Message)({message:"更换信用卡成功！",type:"success",duration:5e3}))})})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"inputBox"},[a("el-form",{attrs:{inline:!0,model:e.searchData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"订单号"}},[a("el-input",{staticStyle:{width:"200px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.orderNo,callback:function(t){e.$set(e.searchData,"orderNo",t)},expression:"searchData.orderNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理人姓名"}},[a("el-input",{staticStyle:{width:"200px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.agentName,callback:function(t){e.$set(e.searchData,"agentName",t)},expression:"searchData.agentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理人ID"}},[a("el-input",{staticStyle:{width:"200px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.agentId,callback:function(t){e.$set(e.searchData,"agentId",t)},expression:"searchData.agentId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消费者ID"}},[a("el-input",{staticStyle:{width:"200px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.consumerId,callback:function(t){e.$set(e.searchData,"consumerId",t)},expression:"searchData.consumerId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消费者姓名"}},[a("el-input",{staticStyle:{width:"200px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.consumerName,callback:function(t){e.$set(e.searchData,"consumerName",t)},expression:"searchData.consumerName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("el-select",{attrs:{placeholder:"订单状态"},model:{value:e.searchData.status,callback:function(t){e.$set(e.searchData,"status",t)},expression:"searchData.status"}},[a("el-option",{attrs:{label:"已冻结",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"未冻结",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"冻结失败",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"结算状态"}},[a("el-select",{attrs:{placeholder:"结算状态"},model:{value:e.searchData.settlementStatus,callback:function(t){e.$set(e.searchData,"settlementStatus",t)},expression:"searchData.settlementStatus"}},[a("el-option",{attrs:{label:"已结算",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"未结算",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"结算失败",value:"3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"当前支付状态"}},[a("el-select",{attrs:{placeholder:"当前支付状态"},model:{value:e.searchData.currPayStatus,callback:function(t){e.$set(e.searchData,"currPayStatus",t)},expression:"searchData.currPayStatus"}},[a("el-option",{attrs:{label:"正常",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"扣款失败",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"逾期",value:"3"}})],1)],1),e._v(" "),a("div",[a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getPage}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("导出")])],1)],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{property:"orderNo",label:"订单号"}}),e._v(" "),a("el-table-column",{attrs:{property:"agentId",label:"代理人ID"}}),e._v(" "),a("el-table-column",{attrs:{property:"agentName",label:"代理人姓名"}}),e._v(" "),a("el-table-column",{attrs:{property:"consumerId",label:"消费者ID"}}),e._v(" "),a("el-table-column",{attrs:{property:"consumerName",label:"消费者姓名"}}),e._v(" "),a("el-table-column",{attrs:{property:"orderStatus",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n           "+e._s(1==t.row.orderStatus?"已冻结":"")+"\n           "+e._s(2==t.row.orderStatus?"未冻结":"")+"\n           "+e._s(3==t.row.orderStatus?"冻结失败":"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"currPayStatus",label:"当前支付状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n           "+e._s(1==t.row.currPayStatus?"正常":"")+"\n           "+e._s(2==t.row.currPayStatus?"扣款失败":"")+"\n           "+e._s(3==t.row.currPayStatus?"逾期":"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"insuranceNo",label:"保单号"}}),e._v(" "),a("el-table-column",{attrs:{property:"insureSingleNumber",label:"投保单号"}}),e._v(" "),a("el-table-column",{attrs:{property:"settlementName",label:"结算户名"}}),e._v(" "),a("el-table-column",{attrs:{property:"mobile",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{property:"settlementAmount",label:"结算金额"}}),e._v(" "),a("el-table-column",{attrs:{property:"periods",label:"分期期数"}}),e._v(" "),a("el-table-column",{attrs:{property:"goodsAmount",label:"商品金额"}}),e._v(" "),a("el-table-column",{attrs:{property:"settlementCardNo",label:"结算卡号"}}),e._v(" "),a("el-table-column",{attrs:{property:"idCard",label:"身份证号码"}}),e._v(" "),a("el-table-column",{attrs:{property:"creditCardNo",label:"信用卡号"}}),e._v(" "),a("el-table-column",{attrs:{property:"bank",label:"开户银行"}}),e._v(" "),a("el-table-column",{attrs:{property:"cardExpired",label:"卡有效期"}}),e._v(" "),a("el-table-column",{attrs:{property:"settlementStatus",label:"结算状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n           "+e._s(1==t.row.settlementStatus?"已结算":"")+"\n           "+e._s(2==t.row.settlementStatus?"未结算":"")+"\n           "+e._s(3==t.row.settlementStatus?"结算失败":"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"320"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.detailForm(t.row)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.collectionOrder(t.row.orderNo)}}},[e._v("催收")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.showcard(t.row.orderNo)}}},[e._v("更换信用卡")])]}}])})],1),e._v(" "),a("div",{staticClass:"pageBox"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:100}})],1),e._v(" "),a("el-dialog",{attrs:{title:"详情",visible:e.addVisible,width:"80%"},on:{"update:visible":function(t){e.addVisible=t}}},[a("div",[a("el-form",{attrs:{inline:!0,"label-width":"100px",model:e.sendForm}},[a("el-form-item",{attrs:{label:"订单号"}},[a("el-input",{model:{value:e.sendForm.orderNo,callback:function(t){e.$set(e.sendForm,"orderNo",t)},expression:"sendForm.orderNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理人ID"}},[a("el-input",{model:{value:e.sendForm.agentId,callback:function(t){e.$set(e.sendForm,"agentId",t)},expression:"sendForm.agentId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理人姓名"}},[a("el-input",{model:{value:e.sendForm.agentName,callback:function(t){e.$set(e.sendForm,"agentName",t)},expression:"sendForm.agentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证号码"}},[a("el-input",{model:{value:e.sendForm.idCard,callback:function(t){e.$set(e.sendForm,"idCard",t)},expression:"sendForm.idCard"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单金额"}},[a("el-input",{model:{value:e.sendForm.orderAmount,callback:function(t){e.$set(e.sendForm,"orderAmount",t)},expression:"sendForm.orderAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消费者ID"}},[a("el-input",{model:{value:e.sendForm.consumerId,callback:function(t){e.$set(e.sendForm,"consumerId",t)},expression:"sendForm.consumerId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消费者名称"}},[a("el-input",{model:{value:e.sendForm.consumerName,callback:function(t){e.$set(e.sendForm,"consumerName",t)},expression:"sendForm.consumerName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"信用卡号"}},[a("el-input",{model:{value:e.sendForm.creditCardNo,callback:function(t){e.$set(e.sendForm,"creditCardNo",t)},expression:"sendForm.creditCardNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("el-input",{model:{value:e.sendForm.orderStatus,callback:function(t){e.$set(e.sendForm,"orderStatus",t)},expression:"sendForm.orderStatus"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结算户名"}},[a("el-input",{model:{value:e.sendForm.settlementName,callback:function(t){e.$set(e.sendForm,"settlementName",t)},expression:"sendForm.settlementName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话号"}},[a("el-input",{model:{value:e.sendForm.mobile,callback:function(t){e.$set(e.sendForm,"mobile",t)},expression:"sendForm.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结算金额"}},[a("el-input",{model:{value:e.sendForm.settlementAmount,callback:function(t){e.$set(e.sendForm,"settlementAmount",t)},expression:"sendForm.settlementAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分期期数"}},[a("el-input",{model:{value:e.sendForm.periods,callback:function(t){e.$set(e.sendForm,"periods",t)},expression:"sendForm.periods"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品金额"}},[a("el-input",{model:{value:e.sendForm.goodsAmount,callback:function(t){e.$set(e.sendForm,"goodsAmount",t)},expression:"sendForm.goodsAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开户银行"}},[a("el-input",{model:{value:e.sendForm.bank,callback:function(t){e.$set(e.sendForm,"bank",t)},expression:"sendForm.bank"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"卡有效期"}},[a("el-input",{model:{value:e.sendForm.cardExpired,callback:function(t){e.$set(e.sendForm,"cardExpired",t)},expression:"sendForm.cardExpired"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结算状态"}},[a("el-input",{model:{value:e.sendForm.settlementStatus,callback:function(t){e.$set(e.sendForm,"settlementStatus",t)},expression:"sendForm.settlementStatus"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.addVisible=!1}}},[e._v("返回")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("img",{attrs:{src:"static/images/logo2.png",alt:""}})]),e._v(" "),a("div",[a("el-checkbox-group",{model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}},e._l(e.nameList,function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}))],1),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("form",{attrs:{method:"POST",action:e.exportUrl}},[a("input",{attrs:{type:"hidden",name:"Ticket"},domProps:{value:e.ticket}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"pageSize"},domProps:{value:e.pageSize}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"pageNo"},domProps:{value:e.currentPage}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"orderNo"},domProps:{value:e.searchData.orderNo}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"settlementStatus"},domProps:{value:e.searchData.settlementStatus}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"status"},domProps:{value:e.searchData.status}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"agentId"},domProps:{value:e.searchData.agentId}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"agentName"},domProps:{value:e.searchData.agentName}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"consumerId"},domProps:{value:e.searchData.consumerId}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"consumerName"},domProps:{value:e.searchData.consumerName}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"currPayStatus"},domProps:{value:e.searchData.currPayStatus}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"sortName"},domProps:{value:e.searchData.sortName}}),e._v(" "),e._l(e.exportData.cols,function(t,r){return a("div",{key:r},[a("input",{attrs:{type:"hidden",name:"cols["+r+"].name"},domProps:{value:t.name}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"cols["+r+"].checked"},domProps:{value:t.checked}})])}),e._v(" "),a("div",[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("input",{staticClass:"excelBtn",attrs:{value:"导出",type:"submit"}})],1)],2)])]),e._v(" "),a("el-dialog",{attrs:{title:"更换信用卡",visible:e.changeVisible,width:"500"},on:{"update:visible":function(t){e.changeVisible=t}}},[a("div",[a("el-form",{ref:"chageForm",attrs:{"label-width":"200px",model:e.chageForm,rules:e.changerules}},[a("el-form-item",{attrs:{label:"卡号",prop:"accNo"}},[a("el-input",{model:{value:e.chageForm.accNo,callback:function(t){e.$set(e.chageForm,"accNo",t)},expression:"chageForm.accNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"phoneNo"}},[a("el-input",{model:{value:e.chageForm.phoneNo,callback:function(t){e.$set(e.chageForm,"phoneNo",t)},expression:"chageForm.phoneNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"卡背面的cvn2三位数字",prop:"cvn2"}},[a("el-input",{model:{value:e.chageForm.cvn2,callback:function(t){e.$set(e.chageForm,"cvn2",t)},expression:"chageForm.cvn2"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"有效期",prop:"expired"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择有效期"},model:{value:e.chageForm.expired,callback:function(t){e.$set(e.chageForm,"expired",t)},expression:"chageForm.expired"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.changeCard("chageForm")}}},[e._v("确定")])],1)])],1)},staticRenderFns:[]};var s=a("vSla")(n,l,!1,function(e){a("DFMp")},"data-v-1fdd257c",null);t.default=s.exports}});