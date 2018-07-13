
import {Export} from '@/api/export'
import { Message } from 'element-ui'
export default {
  name: 'tablemixin',
 
  data() {
    return {
      currentPage:1,//当前页码
      totalPage:1,//总页码
      pageSize:20,//每页条数
      tableData:[],
      loading:true,
      delId:'',
    }
  },
   methods:{
     exportFile(){
      let formdata = {pageNo:this.currentPage,pageSize:this.pageSize};
      var obj = Object.assign(formdata, this.exportData, this.searchData);
      Export(this.exportUrl,obj);      
     },
      getPage(){
        let formdata = {pageNo:this.currentPage,pageSize:this.pageSize};
     
        var obj = Object.assign(formdata, this.searchData);
      
        this.$store.dispatch(this.funcName,obj).then((data) => {
          this.loading = false;
          if(data.code == 200){
            this.tableData = data.data.dataList;
            this.totalPage = data.data.total;
          }
        
       })
      },
      handleSizeChange(val) {
         this.getPage();
      },
      handleCurrentChange(val) {
         this.getPage();
      },
         // 打开添加
     addForm(){
        this.emptyObj(this.sendForm);
        this.addVisible = true;
     },
     // 打开编辑
     editForm(id){
        this.addVisible = true;
        this.$store.dispatch(this.editName,id).then((data) => {
          if(data.code == 200){
            this.sendForm=data.data;
          }
        
        })
        
     },
    //  提交表单 修改或添加
    submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.saveData(this.sendForm);
          } else {
            return false;
          }
        });
    },
    saveData(obj){
          this.$store.dispatch(this.saveName,obj).then((data) => {
          if(data.code == 200){
            //  刷新表格
             this.getPage();
             this.addVisible = false;
            Message({
             message: '操作成功！',
             type: 'success',
             duration: 5 * 1000
            })
          }
        
        })
     },
     deleteForm(id){
       this.deleteVisible = true;
       this.delId = id;
     },
     deleteData(){
       this.$store.dispatch(this.delName,this.delId).then((data) => {
          if(data.code == 200){
            //  刷新表格
             this.getPage();
             this.deleteVisible = false;
            Message({
             message: '删除成功！',
             type: 'success',
             duration: 5 * 1000
            })
          }
        
        })
     },
    //  表单清空
    emptyObj(obj){
       for(var key in obj){
          obj[key] = '';
       }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    
  },
  created(){
      this.getPage();
  }
 
}