import {productList,productSave,productDel,productDetail,
  configSave,configList,channelList,channelSave,channelDel,channelDetail,
  agreementList,agreementSave,agreementDel,agreementDetail,enableAgree,insuranceList,insuranceSave,
  insuranceDetail,insuranceDel,insuranceAgencySave,insuranceAgencyList,insuranceAgencyDetail,insuranceAgencyDel,
  insuranceProductList,insuranceProductSave,insuranceProductDetail,insuranceProductDel} from '@/api/systemAdmin'


const agent = {
  state: {
     agreeObj:{}
  },
  mutations: {
    setAgreeObj:(state, agreeObj) => {
      state.agreeObj = agreeObj
    },
    
  },
  actions: {
       // 产品列表
       ProductList({ commit }, data) {
        return new Promise((resolve, reject) => {
          productList(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      // 产品保存修改
      ProductSave({ commit }, data) {
        return new Promise((resolve, reject) => {
          productSave(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

      // 产品删除
      ProductDel({ commit }, data) {
        return new Promise((resolve, reject) => {
          productDel(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

       // 产品详情
       ProductDetail({ commit }, data) {
        return new Promise((resolve, reject) => {
          productDetail(data).then(response => {   
            resolve(response.data)
          }).catch(error => {
            reject(error)
          })
        })
      },

         // 风控列表
         ConfigList({ commit }, data) {
          return new Promise((resolve, reject) => {
            configList(data).then(response => {   
              resolve(response.data)
            }).catch(error => {
              reject(error)
            })
          })
        },

         // 风控保存
         ConfigSave({ commit }, data) {
          return new Promise((resolve, reject) => {
            configSave(data).then(response => {   
              resolve(response.data)
            }).catch(error => {
              reject(error)
            })
          })
        },

          // 通道列表
          ChannelList({ commit }, data) {
            return new Promise((resolve, reject) => {
              channelList(data).then(response => {   
                resolve(response.data)
              }).catch(error => {
                reject(error)
              })
            })
          },

          // 通道禁用，启用
          EnableAgree({ commit }, data) {
            return new Promise((resolve, reject) => {
              enableAgree(data).then(response => {   
                resolve(response.data)
              }).catch(error => {
                reject(error)
              })
            })
          },

             // 通道保存修改
             ChannelSave({ commit }, data) {
              return new Promise((resolve, reject) => {
                channelSave(data).then(response => {   
                  resolve(response.data)
                }).catch(error => {
                  reject(error)
                })
              })
            },

              // 通道删除
              ChannelDel({ commit }, data) {
                return new Promise((resolve, reject) => {
                  channelDel(data).then(response => {   
                    resolve(response.data)
                  }).catch(error => {
                    reject(error)
                  })
                })
              },

              // 通道详情
              ChannelDetail({ commit }, data) {
              return new Promise((resolve, reject) => {
                channelDetail(data).then(response => {   
                  resolve(response.data)
                }).catch(error => {
                  reject(error)
                })
              })
            },

               // 协议列表
               AgreementList({ commit }, data) {
                return new Promise((resolve, reject) => {
                  agreementList(data).then(response => {   
                    resolve(response.data)
                  }).catch(error => {
                    reject(error)
                  })
                })
              },

                 // 协议保存修改
                 AgreementSave({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    agreementSave(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                   // 协议删除
               AgreementDel({ commit }, data) {
                return new Promise((resolve, reject) => {
                  agreementDel(data).then(response => {   
                    resolve(response.data)
                  }).catch(error => {
                    reject(error)
                  })
                })
              },

                 // 协议详情
                 AgreementDetail({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    agreementDetail(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 产品列表
                InsuranceList({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceList(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 产品保存
                InsuranceSave({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceSave(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 产品详情
                InsuranceDetail({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceDetail(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 产品删除
                InsuranceDel({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceDel(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 代理保险列表
                InsuranceAgencyList({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceAgencyList(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 代理保险保存
                InsuranceAgencySave({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceAgencySave(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

               // 代理保险详情
                InsuranceAgencyDetail({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceAgencyDetail(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 代理保险删除
                InsuranceAgencyDel({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceAgencyDel(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 保险产品列表
                InsuranceProductList({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceProductList(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 保险产品保存
                InsuranceProductSave({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceProductSave(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 保险产品详情
                InsuranceProductDetail({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceProductDetail(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                // 保险产品删除
                InsuranceProductDel({ commit }, data) {
                  return new Promise((resolve, reject) => {
                    insuranceProductDel(data).then(response => {   
                      resolve(response.data)
                    }).catch(error => {
                      reject(error)
                    })
                  })
                },

                
      
  }
}

export default agent
