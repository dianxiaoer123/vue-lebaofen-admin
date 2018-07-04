<template>
  <el-row class="panel-group" :gutter="40">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class='card-panel'>
        <div class="card-panel-icon-wrapper icon-people">
           <span class="peopleIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">昨日新增代理人</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="102400" :duration="2600"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <span class="moneyIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">昨日新增消费者</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="81212" :duration="3000"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <span class="orderIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">昨日新增订单笔数</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="9280" :duration="3200"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shoppingCard">
          <span class="jineIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">昨日新增订单金额</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="13600" :duration="3600"></count-to>
        </div>
      </div>
    </el-col>
    
     <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class='card-panel'>
        <div class="card-panel-icon-wrapper icon-people">
           <span class="peopleIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">累计代理人</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="102400" :duration="2600"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <span class="moneyIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">累计消费者</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="81212" :duration="3000"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <span class="orderIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">累计订单笔数</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="9280" :duration="3200"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shoppingCard">
          <span class="jineIcon"></span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">昨日新增订单金额</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="13600" :duration="3600"></count-to>
        </div>
      </div>
    </el-col>
  </el-row>
  
  
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #fff;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    background: #4ab9dc;
    /*&:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shoppingCard {
        background: #34bfa3
      }
    }*/
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      padding:0px 30px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
      background: #2ab0db;
      height: 108px;
      display: flex;
      align-items: center;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      margin: 26px;
      margin-left: 0px;
      text-align: right;
      .card-panel-text {
        line-height: 18px;
        color: white;
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
        
      }
    }
  }

}
</style>
