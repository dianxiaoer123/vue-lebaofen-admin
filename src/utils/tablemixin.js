
import {Export} from '@/api/export'
export default {
  name: 'tablemixin',
 
  data() {
    return {
      currentPage:1,//当前页码
      totalPage:1,//总页码
      pageSize:20,//每页条数
      tableData:[],
      loading:true,
      
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
      }
  },
  created(){
      this.getPage();
  }
 
}