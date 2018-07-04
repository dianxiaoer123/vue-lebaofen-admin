<template>
  <div class="app-container documentation-container">
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="时间">
       <template slot-scope="scope">
         <div v-bind:class='[scope.row.type == 1?yjSty:"",scope.row.type == 2?ycSty:""]'>{{scope.row.date}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="style"
      label="消息类型">
        <template slot-scope="scope">
         <div v-bind:class='[scope.row.type == 1?yjSty:"",scope.row.type == 2?ycSty:""]'>{{scope.row.style}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="cont"
      label="消息内容">
        <template slot-scope="scope">
         <div v-bind:class='[scope.row.type == 1?yjSty:"",scope.row.type == 2?ycSty:""]'>{{scope.row.cont}}</div>
      </template>
    </el-table-column>
      <el-table-column
      prop="flag"
      label="标志">
      <template slot-scope="scope">
      	<div class="flgStyle">
      		   <span class="emailIcon" v-if="scope.row.flag==1"></span>
             <span class="rightIcon" v-if="scope.row.flag==2"></span>
      	</div>
      
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

  </div>
</template>
<script>


export default {
  name: 'documentation',
 
  data() {
    return {
    	yjSty:'yjSty',
    	ycSty:'ycSty',
     tableData:[{
     	  date:'2017-06-11 15:10:56',
     	  style:'通知',
     	  cont:'张三用户发起补卡请求',
     	  flag:'1',
     	  type:0
     },{
     	  date:'2017-06-11 15:10:56',
     	  style:'通知',
     	  cont:'张三用户发起补卡请求',
     	  flag:'2',
     	  type:0
     },{
     	  date:'2017-06-11 15:10:56',
     	  style:'通知',
     	  cont:'张三用户发起补卡请求',
     	  flag:'1',
     	  type:1
     },{
     	  date:'2017-06-11 15:10:56',
     	  style:'通知',
     	  cont:'张三用户发起补卡请求',
     	  flag:'2',
     	  type:2
     },{
     	  date:'2017-06-11 15:10:56',
     	  style:'通知',
     	  cont:'张三用户发起补卡请求',
     	  flag:'2',
     	  type:0
     },{
     	  date:'2017-06-11 15:10:56',
     	  style:'通知',
     	  cont:'张三用户发起补卡请求',
     	  flag:'1',
     	  type:1
     },{
     	  date:'2017-06-11 15:10:56',
     	  style:'通知',
     	  cont:'张三用户发起补卡请求',
     	  flag:'2',
     	  type:2
     }]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container{
	min-height: 800px;
}
.yjSty{
	color:#2ab0db;
}
.ycSty{
	color:#ff9666;
}
.flgStyle{
	text-align: center;
}

</style>
