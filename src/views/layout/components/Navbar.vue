<template>

<div>
	  	<el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    
    <!--<breadcrumb class="breadcrumb-container"></breadcrumb>-->
    <div class="breadcrumb-container">
    	<span>欢迎使用乐保分项目管理平台</span>
    	<span>现在时间：{{time}}</span>
    </div>

    <div class="right-menu">
    	  <div class="elAlikLi">
    	     <span>您好，王小明</span>
    	  </div>
    	  
    	  <div class="elAlikLi">
    	     <span class="passwordIcon"  @click="dialogVisible = true"></span>
    	  </div>
    	  
    	  <div class="elAlikLi">
    	  	<span @click="logout" class='exitIcon'></span>
    	  </div>
    	  
    	  <div class="elAlikLi">
    	  		 <router-link to="/documentation">
                  <span class='emailIcon'></span>
                </router-link>
    	  	
    	  </div>
    	  
    	   <div class="elAlikLi">
    	   	 <router-link to="/">
             <span class='homeIcon'></span>
          </router-link>
    	  </div>
    	  
    	  <div class="clearfix"></div>
    	
    </div>
  </el-menu>
  
  <el-dialog
  title="password"
  :visible.sync="dialogVisible"
  width="30%"
 >

  <span>
 
  	<el-form>
  	 <el-form-item label="新密码" label-width="80px">
       <el-input type="password"></el-input>
     </el-form-item>
     
      <el-form-item label="旧密码" label-width="80px">
       <el-input type="password"></el-input>
     </el-form-item>
  	</el-form>
  
  </span>


  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>
  


</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'

export default {
	data(){
		 return {
      dialogVisible: false,
      time:''
   }
	},
	mounted(){
		var that = this;
	    that.getnowTime();
		setInterval(function(){
			that.getnowTime();
		},1000);
	},

	
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    LangSelect,
    ThemePicker
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  methods: {
  	getnowTime:function(){
  		var timestamp = new Date();
		 this.time = timestamp.toLocaleTimeString();
  	},
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.elAlikLi{
	float: left;
	margin-right: 10px;
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
}
.elAlikLi a{
	display: flex;
	align-items: center;
  height: 50px;
}
.elAlikLi span{
	font-size: 14px;
}
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
    font-size: 14px;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .breadcrumb-container span{
  	margin-right: 30px;
  	color:#99a5bd;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
