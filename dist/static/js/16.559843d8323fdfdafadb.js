webpackJsonp([16],{MN0Z:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"userwrap",mixins:[a("svQp").a],data:function(){return{checkedList:[],nameList:["消费者ID","生成时间","姓名","手机","开户银行","银行账号","账户密码","已成交订单数量","订单已还款总额","订单未还款总额","状态","性别"],matchObj:{"消费者ID":"userCode","生成时间":"createTime","姓名":"name","手机":"phone","开户银行":"bank","银行账号":"bankCardNo","账户密码":"initPaswordFlag","已成交订单数量":"orderNum","订单已还款总额":"repaidTotalAmount","订单未还款总额":"unpaidTotalAmount","性别":"gender","状态":"status"},dialogVisible:!1,funcName:"ConsumerList",searchData:{userCode:"",name:"",status:""},exportData:{cols:[{name:"userCode",checked:!1},{name:"createTime",checked:!1},{name:"name",checked:!1},{name:"phone",checked:!1},{name:"bank",checked:!1},{name:"bankCardNo",checked:!1},{name:"initPaswordFlag",checked:!1},{name:"orderNum",checked:!1},{name:"repaidTotalAmount",checked:!1},{name:"unpaidTotalAmount",checked:!1},{name:"gender",checked:!1},{name:"status",checked:!1}]},exportUrl:"http://www.fqp360.com/manageapi/consumer/export"}},methods:{changeStatus:function(e,t){var a=this,n={status:1==e?2:1,id:t};this.$store.dispatch("AgentUpstatus",n).then(function(e){200==e.code&&a.getPage()})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"inputBox"},[a("el-form",{attrs:{inline:!0,model:e.searchData}},[a("div",[a("el-form-item",{attrs:{label:"消费者ID"}},[a("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.userCode,callback:function(t){e.$set(e.searchData,"userCode",t)},expression:"searchData.userCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getPage(t)}},model:{value:e.searchData.name,callback:function(t){e.$set(e.searchData,"name",t)},expression:"searchData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户状态"}},[a("el-select",{attrs:{placeholder:"用户状态"},model:{value:e.searchData.status,callback:function(t){e.$set(e.searchData,"status",t)},expression:"searchData.status"}},[a("el-option",{attrs:{label:"正常",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"黑名单",value:"2"}})],1)],1)],1),e._v(" "),a("div",[a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getPage}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("导出")])],1),e._v(" "),a("el-form-item",[a("router-link",{attrs:{to:"dataChart/ConsumerStatistics"}},[a("el-button",{attrs:{type:"primary"}},[e._v("数据统计")])],1)],1)],1)])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{property:"userCode",label:"消费者ID"}}),e._v(" "),a("el-table-column",{attrs:{property:"createTime",label:"生成时间"}}),e._v(" "),a("el-table-column",{attrs:{property:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{property:"phone",label:"手机"}}),e._v(" "),a("el-table-column",{attrs:{property:"bank",label:"开户银行"}}),e._v(" "),a("el-table-column",{attrs:{property:"bankCardNo",label:"银行账号"}}),e._v(" "),a("el-table-column",{attrs:{property:"initPaswordFlag",label:"账户密码"}}),e._v(" "),a("el-table-column",{attrs:{property:"orderNum",label:"已成交订单数量"}}),e._v(" "),a("el-table-column",{attrs:{property:"repaidTotalAmount",label:"订单已还款金额"}}),e._v(" "),a("el-table-column",{attrs:{property:"unpaidTotalAmount",label:"订单未还款金额"}}),e._v(" "),a("el-table-column",{attrs:{property:"gender",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{property:"status",label:"用户状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n         "+e._s(1==t.row.status?"正常":"黑名单")+"\n      ")]}}])})],1),e._v(" "),a("div",{staticClass:"pageBox"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,40,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalPage},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("img",{attrs:{src:"static/images/logo2.png",alt:""}})]),e._v(" "),a("div",[a("el-checkbox-group",{model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}},e._l(e.nameList,function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("form",{attrs:{method:"POST",action:e.exportUrl}},[a("input",{attrs:{type:"hidden",name:"Ticket"},domProps:{value:e.ticket}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"pageSize"},domProps:{value:e.pageSize}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"pageNo"},domProps:{value:e.currentPage}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"agentCode"},domProps:{value:e.searchData.userCode}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"status"},domProps:{value:e.searchData.status}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"name"},domProps:{value:e.searchData.name}}),e._v(" "),a("div",e._l(e.exportData.cols,function(t,n){return a("div",{key:n},[a("input",{attrs:{type:"hidden",name:"cols["+n+"].name"},domProps:{value:t.name}}),e._v(" "),a("input",{attrs:{type:"hidden",name:"cols["+n+"].checked"},domProps:{value:t.checked}})])})),e._v(" "),a("div",[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("input",{staticClass:"excelBtn",attrs:{value:"导出",type:"submit"}})],1)])])])],1)},staticRenderFns:[]};var l=a("vSla")(n,r,!1,function(e){a("bMrY")},"data-v-45db9eb0",null);t.default=l.exports},bMrY:function(e,t,a){var n=a("lrBO");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("4f54e01c",n,!0)},lrBO:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.inputBox[data-v-45db9eb0] {\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.app-container[data-v-45db9eb0] {\n  min-height: 800px;\n}\n",""])}});