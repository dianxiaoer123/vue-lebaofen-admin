import { Message } from 'element-ui'
export default {
  name: 'configmixin',
 
  data() {
    return {
    }
  },
  methods: {
    getList(type){
         var obj = {type:type}
         this.$store.dispatch('ConfigList',obj).then((data) => {
              if(type == 1){
                 this.agentConfig = data.data.list;
              }else if(type == 2){
                  this.comConfig = data.data.list;
              }else if(type == 3){
                this.busyConfig = data.data.list;  
              }else if(type == 4){
                this.payConfig = data.data.list;
                
              }
           
      })
    },
    saveList(type){
        if(type == 1){
           var config = this.agentConfig;
        }else if(type == 2){
          var config = this.comConfig;
        }else if(type == 3){
          var config = this.busyConfig.concat(this.payConfig);
        }
       
       this.$store.dispatch('ConfigSave',config).then((data) => {
           if(data.code == 200){
             Message({
               message: '操作成功！',
               type: 'success',
                duration: 5 * 1000
             })
           }
       })
    }
 }
 
}