webpackJsonp([12],{HweO:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.inputBox[data-v-6ed3f518] {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.app-container[data-v-6ed3f518] {\n  min-height: 800px;\n}\n",""])},Q3Qr:function(e,t,a){var n=a("HweO");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("763c4c9e",n,!0)},dy4A:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"pagePermission",mixins:[a("svQp").a],data:function(){return{checkedList:[],nameList:["订单编号","订单时间","代理人ID","代理人姓名","订单金额","消费者","订单手续费","手续费状态"],matchObj:{"订单编号":"orderNo","订单时间":"orderTime","代理人ID":"agentCode","代理人姓名":"agentName","订单金额":"orderAmount","消费者":"consumerName","订单手续费":"amount","手续费状态":"feeStatus"},dialogVisible:!1,exportData:{cols:[{name:"orderNo",checked:!1},{name:"orderTime",checked:!1},{name:"agentCode",checked:!1},{name:"agentName",checked:!1},{name:"orderAmount",checked:!1},{name:"consumerName",checked:!1},{name:"amount",checked:!1},{name:"feeStatus",checked:!1}]},exportUrl:"http://www.fqp360.com/manageapi/finance/agent/fee/export",funcName:"FeeList",searchData:{agentName:"",agentCode:"",orderNo:"",consumerName:"",feeStatus:""}}},methods:{}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"inputBox"},[a("el-form",{attrs:{inline:!0,model:e.searchData}},[a("el-form-item",{attrs:{label:"订单编号"}},[a("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.orderNo,callback:function(t){e.$set(e.searchData,"orderNo",t)},expression:"searchData.orderNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理人ID"}},[a("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.agentCode,callback:function(t){e.$set(e.searchData,"agentCode",t)},expression:"searchData.agentCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"代理人姓名"}},[a("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.agentName,callback:function(t){e.$set(e.searchData,"agentName",t)},expression:"searchData.agentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消费者"}},[a("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.consumerName,callback:function(t){e.$set(e.searchData,"consumerName",t)},expression:"searchData.consumerName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手续费状态"}},[a("el-select",{attrs:{placeholder:"手续费状态"},model:{value:e.searchData.feeStatus,callback:function(t){e.$set(e.searchData,"feeStatus",t)},expression:"searchData.feeStatus"}},[a("el-option",{attrs:{label:"",value:""}}),e._v(" "),a("el-option",{attrs:{label:"已支付",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"未支付",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"已退回",value:"3"}})],1)],1),e._v(" "),a("div",[a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getPage}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("导出")])],1)],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{property:"orderNo",label:"订单编号"}}),e._v(" "),a("el-table-column",{attrs:{property:"orderTime",label:"订单时间"}}),e._v(" "),a("el-table-column",{attrs:{property:"agentCode",label:"代理人ID"}}),e._v(" "),a("el-table-column",{attrs:{property:"agentName",label:"代理人姓名"}}),e._v(" "),a("el-table-column",{attrs:{property:"orderAmount",label:"订单金额"}}),e._v(" "),a("el-table-column",{attrs:{property:"consumerName",label:"消费者"}}),e._v(" "),a("el-table-column",{attrs:{property:"amount",label:"订单手续费"}}),e._v(" "),a("el-table-column",{attrs:{property:"status",label:"手续费状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.feeStatus?a("div",[e._v("已支付")]):e._e(),e._v(" "),2==t.row.feeStatus?a("div",[e._v("未支付")]):e._e(),e._v(" "),3==t.row.feeStatus?a("div",[e._v("已退回")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pageBox"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,40,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("img",{attrs:{src:"static/images/logo2.png",alt:""}})]),e._v(" "),a("div",[a("el-checkbox-group",{model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}},e._l(e.nameList,function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}))],1),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("form",{attrs:{method:"POST",action:e.exportUrl}},[a("input",{attrs:{type:"hidden",name:"Ticket"},domProps:{value:e.ticket}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"pageSize"},domProps:{value:e.pageSize}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"pageNo"},domProps:{value:e.currentPage}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"id"},domProps:{value:e.searchData.agentName}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"name"},domProps:{value:e.searchData.agentCode}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"backCycle"},domProps:{value:e.searchData.orderNo}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"qs"},domProps:{value:e.searchData.consumerName}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"qs"},domProps:{value:e.searchData.feeStatus}}),e._v(" "),e._l(e.exportData.cols,function(t,n){return a("div",{key:n},[a("input",{attrs:{type:"hidden",name:"cols["+n+"].name"},domProps:{value:t.name}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"cols["+n+"].checked"},domProps:{value:t.checked}})])}),e._v(" "),a("div",[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("input",{staticClass:"excelBtn",attrs:{value:"导出",type:"submit"}})],1)],2)])])],1)},staticRenderFns:[]};var r=a("vSla")(n,o,!1,function(e){a("Q3Qr")},"data-v-6ed3f518",null);t.default=r.exports}});