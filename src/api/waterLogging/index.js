import request from '@utils/request'

const baseURL = ''

// 查询策略场景下拉
export const dispatchTypeList = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/scene/dispatchTypeList`,
    method: 'get',
    params
  })
}
// 查询流水日志
export const waterLoggingListApi = (params) => {
  return request({
    url: `${baseURL}/1.0/dispatchRecord/dispatchRecord`,
    method: 'get',
    params
  })
}
// 流水类型 inputParams
export const getInputQueryApi = (params) => {
  return request({
    url: `${baseURL}/1.0/dispatchRecord/getInputQuery`,
    method: 'get',
    params
  })
}
// 流水日志 导入
export const exportDispatchRecordApi = (params) => {
  return request({
    url: `${baseURL}/1.0/dispatchRecord/exportDispatchRecord`,
    method: 'get',
    params
  })
}
