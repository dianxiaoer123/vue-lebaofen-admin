webpackJsonp([6],{"3cXf":function(t,a,e){t.exports={default:e("RJ+u"),__esModule:!0}},P22C:function(t,a,e){var n=e("ruwO");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("44f45ac3",n,!0)},"RJ+u":function(t,a,e){var n=e("AKd3"),r=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},"fb/q":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("3cXf"),r=e.n(n),i=e("7VF+"),s=e.n(i);e("0xDb");e("TW58");var l={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},dataBar:{type:Object,default:{xdata:[],ydata:[]}}},data:function(){return{chart:null}},mounted:function(){},watch:{dataBar:function(t,a){this.dataBar=t,this.initChart()}},methods:{initChart:function(){this.chart=s.a.init(this.$el,"macarons");var t=this.dataBar,a=t.xdata,e=t.ydata;this.chart.setOption({color:["#F56D61","#A5C562","#F7C258","#4AC7F3"],tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{data:a,itemWidth:10,itemHeight:10},series:[{name:"所占比例 ",type:"pie",radius:["30%","70%"],avoidLabelOverlap:!1,label:{emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},data:e}]})}}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},d={name:"dataChart",components:{PieChart:e("vSla")(l,c,!1,null,null,null).exports},data:function(){return{ageData:{xdata:[],ydata:[]},areaData:{},sexData:{},typeFunc:""}},mounted:function(){var t=this;this.typeFunc=this.$route.params.name,console.log(this.$route),this.$store.dispatch(this.typeFunc).then(function(a){if(200==a.code){var e=a.data.age,n=a.data.area,r=a.data.sex;t.ageData=t.keynameUp(e),t.areaData=t.keynameUp(n),t.sexData=t.keynameUp(r)}})},methods:{keynameUp:function(t){var a=JSON.parse(r()(t).replace(/label/g,"name")),e=JSON.parse(r()(a).replace(/val/g,"value")),n=[];return e.map(function(t){n.push(t)}),{xdata:n,ydata:e}}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("div",{staticClass:"chartBox"},[e("div",{staticClass:"chartName yellowStyl"},[t._v("年龄段")]),t._v(" "),e("pie-chart",{attrs:{dataBar:t.ageData}})],1)]),t._v(" "),e("el-col",{attrs:{span:8}},[e("div",{staticClass:"chartBox"},[e("div",{staticClass:"chartName greenStyl"},[t._v("地区")]),t._v(" "),e("pie-chart",{attrs:{dataBar:t.areaData}})],1)]),t._v(" "),e("el-col",{attrs:{span:8}},[e("div",{staticClass:"chartBox"},[e("div",{staticClass:"chartName blueStyl"},[t._v("性别")]),t._v(" "),e("pie-chart",{attrs:{dataBar:t.sexData}})],1)])],1)],1)},staticRenderFns:[]};var h=e("vSla")(d,o,!1,function(t){e("P22C")},"data-v-09fd0971",null);a.default=h.exports},ruwO:function(t,a,e){(t.exports=e("BkJT")(!1)).push([t.i,"\n.app-container[data-v-09fd0971] {\n  min-height: 800px;\n}\n.chartBox[data-v-09fd0971] {\n  border: 1px solid #eee;\n}\n.chartName[data-v-09fd0971] {\n  font-size: 16px;\n  text-align: center;\n  height: 60px;\n  line-height: 60px;\n  margin-bottom: 30px;\n  color: white;\n}\n.greenStyl[data-v-09fd0971] {\n  background: #A0D468;\n}\n.blueStyl[data-v-09fd0971] {\n  background: #45C1DD;\n}\n.yellowStyl[data-v-09fd0971] {\n  background: #FF9666;\n}\n",""])}});