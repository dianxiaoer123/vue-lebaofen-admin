import request from '@/utils/request'

// 产品列表
export function productList(data) {
  return request({
    url: '/manageapi/product/list', 
    method: 'post',
    data
  })
}


// 产品保存修改
export function productSave(data) {
  return request({
    url: '/manageapi/product/save', 
    method: 'post',
    data
  })
}

// 产品删除
export function productDel(id) {
  return request({
    url: '/manageapi/product/del?id='+id, 
    method: 'get'
  })
}


// 产品详情
export function productDetail(id) {
  return request({
    url: '/manageapi/product/detail?id='+id, 
    method: 'get'
  })
}


// 风控列表
export function configList(data) {
  return request({
    url: '/manageapi/config/list', 
    method: 'post',
    data
  })
}

// 风控保存
export function configSave(data) {
  return request({
    url: '/manageapi/config/save', 
    method: 'post',
    data
  })
}

// 通道列表
export function channelList(data) {
  return request({
    url: '/manageapi/channel/list', 
    method: 'post',
    data
  })
}

// 通道保存修改
export function channelSave(data) {
  return request({
    url: '/manageapi/channel/save', 
    method: 'post',
    data
  })
}

// 通道删除
export function channelDel(id) {
  return request({
    url: '/manageapi/channel/del?id='+id, 
    method: 'get'
  })
}


// 通道详情
export function channelDetail(id) {
  return request({
    url: '/manageapi/channel/detail?id='+id, 
    method: 'get'
  })
}

// 协议列表
export function agreementList(data) {
  return request({
    url: '/manageapi/agreement/list', 
    method: 'post',
    data
  })
}

// 协议保存修改
export function agreementSave(data) {
  return request({
    url: '/manageapi/agreement/save', 
    method: 'post',
    data
  })
}

// 协议删除
export function agreementDel(id) {
  return request({
    url: '/manageapi/agreement/del?id='+id, 
    method: 'get'
  })
}


// 协议详情
export function agreementDetail(id) {
  return request({
    url: '/manageapi/agreement/detail?id='+id, 
    method: 'get'
  })
}

// 协议禁用、启用
export function enableAgree(data) {
  return request({
    url: '/manageapi/agreement/enable', 
    method: 'post',
    data
  })
}

// 保险公司列表
export function insuranceList(data) {
  return request({
    url: '/manageapi/insurance/list', 
    method: 'post',
    data
  })
}

// 保险公司保存
export function insuranceSave(data) {
  return request({
    url: '/manageapi/insurance/save', 
    method: 'post',
    data
  })
}

// 保险公司详情
export function insuranceDetail(id) {
  return request({
    url: '/manageapi/insurance/detail?id='+id, 
    method: 'get'
  })
}

// 保险公司删除
export function insuranceDel(id) {
  return request({
    url: '/manageapi/insurance/save', 
    method: 'post',
    data:{
      id:id,
      status:0
    }
  })
}

// 代理保险公司列表
export function insuranceAgencyList(data) {
  return request({
    url: '/manageapi/insurance/agency/list', 
    method: 'post',
    data
  })
}

// 代理保险公司保存
export function insuranceAgencySave(data) {
  return request({
    url: '/manageapi/insurance/agency/save', 
    method: 'post',
    data
  })
}

// 代理保险公司详情
export function insuranceAgencyDetail(id) {
  return request({
    url: '/manageapi/insurance/agency/detail?id='+id, 
    method: 'get'
  })
}

// 代理保险公司删除
export function insuranceAgencyDel(id) {
  return request({
    url: '/manageapi/insurance/agency/save', 
    method: 'post',
    data:{
      id:id,
      status:0
    }
  })
}

// 保险产品列表
export function insuranceProductList(data) {
  return request({
    url: '/manageapi/insurance/product/list', 
    method: 'post',
    data
  })
}

// 保险产品保存
export function insuranceProductSave(data) {
  return request({
    url: '/manageapi/insurance/product/save', 
    method: 'post',
    data
  })
}

// 保险产品详情
export function insuranceProductDetail(id) {
  return request({
    url: '/manageapi/insurance/product/detail?id='+id, 
    method: 'get'
  })
}

// 保险产品删除
export function insuranceProductDel(id) {
  return request({
    url: '/manageapi/insurance/product/save', 
    method: 'post',
    data:{
      id:id,
      status:0
    }
  })
}





