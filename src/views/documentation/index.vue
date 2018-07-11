<template>
  <div class="app-container documentation-container">
     <el-table
    :data="tableData"
    border
    v-loading="loading"
    style="width: 100%">
    <el-table-column
      prop="createTime"
      label="时间">
       <template slot-scope="scope">
          <div v-if='scope.row.type==1'>
             <div>{{scope.row.createTime}}</div>
          </div>

          <div v-else>
             <div :class='scope.row.type==2?"ycStyle":"yjStyle"'>{{scope.row.createTime}}</div>
          </div>  
      </template>
    </el-table-column>
    <el-table-column
      prop="type"
      label="消息类型">
        <template slot-scope="scope">
          <!-- 1:通知,2:异常f56d61,3:预警a5c562 -->
          <div v-if='scope.row.type==1'>
            <div v-if='scope.row.type==1'>通知</div>
            <div v-if='scope.row.type==2'>异常</div>
            <div v-if='scope.row.type==3'>预警</div>      
          </div>

          <div v-else>
             <div :class='scope.row.type==2?"ycStyle":"yjStyle"'>
               <div v-if='scope.row.type==1'>通知</div>
               <div v-if='scope.row.type==2'>异常</div>
               <div v-if='scope.row.type==3'>预警</div>    
             </div>
          </div>
          
      
      </template>
    </el-table-column>
    <el-table-column
      prop="content"
      label="消息内容">
        <template slot-scope="scope">
          <div v-if='scope.row.type==1'>
             <div>{{scope.row.content}}</div>
          </div>

          <div v-else>
             <div :class='scope.row.type==2?"ycStyle":"yjStyle"'>{{scope.row.content}}</div>
          </div>  
  
      </template>
    </el-table-column>
      <el-table-column
      prop="read"
      label="标志">
      <template slot-scope="scope">
      	<div class="flgStyle">
            <a href="javascript:void(0)">
               <span class="emailsn" v-if="!scope.row.read" @click="isRead" :data-id='scope.row.id'></span>
            </a>
            <a href="javascript:void(0)">
              <span class="rightIcon" v-if="scope.row.read"></span>
            </a>  
      	</div>
      
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

  </div>
</template>
<script>
import mixin from '@/utils/tablemixin.js';
export default {
  name: 'documentation',
  mixins: [mixin],
  
  data(){
    return{
     funcName:'MessageList',
     searchData:{}
    }
  },
  methods:{
    isRead(){

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
.flgStyle a:hover{
  cursor: pointer;
}

</style>
