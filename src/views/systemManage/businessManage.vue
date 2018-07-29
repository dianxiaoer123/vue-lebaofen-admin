<template>
  <div class="app-container">
  	
  	    <el-form :inline="true" label-width="250px">
  		     <el-form-item :label="item.label" :key="item.key" v-for="item in busyConfig">
  		     	<el-input v-model="item.value"></el-input>
           </el-form-item>

          <div style="display:inline; margin-left:-4px;">
              <el-form-item :label="item.label" :key="item.key" v-for="item in payConfig">
  		     	<el-input v-model="item.value"></el-input>
           </el-form-item>
          </div>

        </el-form>   
        
           <div>
        	 <el-button type="success" @click="saveList(3)">确认</el-button>
        	 <el-button type="danger" @click="saveList(3)">修改</el-button>
        </div>

</div>
</template>

<script>
import mixin from '@/utils/configmixin.js';

export default{
  name: 'businessManage',
  mixins: [mixin],
  data(){
  	 return{
           busyConfig:[],
           payConfig:[]
       }
  },
  created(){
       this.getList(3);
       this.getList(4);
  },
  methods: {
 
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

 .app-container{
 	min-height: 800px;
 }
</style>