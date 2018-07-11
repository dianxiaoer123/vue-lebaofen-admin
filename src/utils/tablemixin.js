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
      getPage(){
        let formdata = {pageNo:this.currentPage,pageSize:this.pageSize};
        console.log(this.searchData);
        var obj = Object.assign(formdata, this.searchData);
        console.log(obj);
        this.$store.dispatch(this.funcName,obj).then((data) => {
          this.loading = false;
          this.tableData = data.data.dataList;
          this.totalPage = data.data.total;
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