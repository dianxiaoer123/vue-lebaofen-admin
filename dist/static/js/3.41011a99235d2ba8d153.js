webpackJsonp([3],{BYi1:function(t,e,n){var i=n("JNoi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("b65492bc",i,!0)},EOpM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("rVsN"),o=n.n(i),s=n("ZLEe"),a=n.n(s),r={name:"editorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return a()(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=a()(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(console.log(e),this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){for(var n=e.uid,i=a()(this.listObj),o=0,s=i.length;o<s;o++)if(this.listObj[i[o]].uid===n)return this.listObj[i[o]].url=t.files.file,void(this.listObj[i[o]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,n=a()(this.listObj),i=0,o=n.length;i<o;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new o.a(function(o,s){var a=new Image;a.src=n.createObjectURL(t),a.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},o(!0)})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),n("el-dialog",{attrs:{"append-to-body":"",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{action:"https://httpbin.org/post",multiple:!0,"file-list":t.fileList,"show-file-list":!0,"list-type":"picture-card","on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var c=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],d=["bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap\t preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],u={name:"tinymce",components:{editorImage:n("vSla")(r,l,!1,function(t){n("HBnA")},"data-v-30d7bdf1",null).exports},props:{id:{type:String},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date,fullscreen:!1}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:d,menubar:this.menubar,plugins:c,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("tinymce",n.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'+t.url+'" >')})}},destroyed:function(){this.destroyTinymce()}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:this.fullscreen}},[e("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId,value:"textdata"}}),this._v(" "),e("div",{staticClass:"editor-custom-btn-container"},[e("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:this.imageSuccessCBK}})],1)])},staticRenderFns:[]};var h=n("vSla")(u,m,!1,function(t){n("BYi1")},"data-v-50fa1ee0",null).exports,f=n("dVeB"),p={name:"agreeCreate",components:{tinymce:h},data:function(){return{sendForm:{}}},watch:{$route:function(t,e){var n=t.params.id;console.log(t),"/systemManage/agree"==t.path&&"undefined"!=n&&null!=n?this.getData(n):this.sendForm={content:" "}}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$route.params.id,n=t.$route.path;console.log(e),"undefined"!=e&&"/systemManage/agree"==n&&null!=e?t.getData(e):t.sendForm={content:" "}})},methods:{getData:function(t){var e=this;this.$store.dispatch("AgreementDetail",t).then(function(t){200==t.code&&(e.sendForm=t.data)})},getTinymce:function(t){this.sendForm.content=t},sendAgree:function(){this.$store.dispatch("AgreementSave",this.sendForm).then(function(t){200==t.code&&Object(f.Message)({message:"操作成功！",type:"success",duration:5e3})})}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{width:"100%"}},[n("el-form",{attrs:{"label-width":"100px",model:t.sendForm}},[n("el-form-item",{attrs:{label:"标题",prop:"title"}},[n("el-input",{model:{value:t.sendForm.title,callback:function(e){t.$set(t.sendForm,"title",e)},expression:"sendForm.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"摘要",prop:"outline"}},[n("el-input",{model:{value:t.sendForm.outline,callback:function(e){t.$set(t.sendForm,"outline",e)},expression:"sendForm.outline"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"内容",prop:"content"}},[n("tinymce",{attrs:{value:t.sendForm.content},on:{tinymce:t.getTinymce}})],1),t._v(" "),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"warning"},on:{click:t.sendAgree}},[t._v("发布")])],1)],1)],1)])},staticRenderFns:[]};var v=n("vSla")(p,b,!1,function(t){n("dz20")},"data-v-9fdbbbf4",null);e.default=v.exports},HBnA:function(t,e,n){var i=n("MOGX");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("21a1cec6",i,!0)},JNoi:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.tinymce-container[data-v-50fa1ee0] {\r\n  position: relative;\n}\n.tinymce-container[data-v-50fa1ee0] .mce-fullscreen {\r\n  z-index: 10000;\n}\n.tinymce-textarea[data-v-50fa1ee0] {\r\n  visibility: hidden;\r\n  z-index: -1;\n}\n.editor-custom-btn-container[data-v-50fa1ee0] {\r\n  position: absolute;\r\n  right: 0px;\r\n  top: -2px;\r\n  /*z-index: 2005;*/\n}\n.fullscreen .editor-custom-btn-container[data-v-50fa1ee0] {\r\n  z-index: 10000;\r\n  position: fixed;\n}\n.editor-upload-btn[data-v-50fa1ee0] {\r\n  display: inline-block;\n}\r\n",""])},MOGX:function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.editor-slide-upload[data-v-30d7bdf1] {\n  margin-bottom: 20px;\n}\n.editor-slide-upload[data-v-30d7bdf1] .el-upload--picture-card {\n    width: 100%;\n}\n",""])},"O/Sq":function(t,e,n){(t.exports=n("BkJT")(!1)).push([t.i,"\n.app-container[data-v-9fdbbbf4] {\n  min-height: 800px;\n}\n.el-rate[data-v-9fdbbbf4] {\n  margin-top: 10px;\n}\n",""])},dz20:function(t,e,n){var i=n("O/Sq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("4eb9f180",i,!0)}});