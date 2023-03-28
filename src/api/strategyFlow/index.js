import request from '@utils/request'

const baseURL = ''

// 查询策略流程数据
export const lookStrategyFlowApi = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/total/fieldName/parameters`,
    method: 'get',
    params
  })
}
export const lookPlayBackApi = (params) => {
  return request({
    url: `${baseURL}/1.0/dispatchRecord/debug`,
    method: 'get',
    params
  })
}

// 保存策略
export const strategySave = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/save`,
    method: 'post',
    data: params
  })
}
// 提交策略
export const strategySubmit = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/submit`,
    method: 'post',
    data: params
  })
}
// 策略校验
export const strategyVerify = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/verify`,
    method: 'post',
    data: params
  })
}
// 粘贴
export const strategyVerifyApi = (params) => {
  return request({
    url: `${baseURL}/1.0/paste/verify`,
    method: 'POST',
    data: params
  })
}
// 策略 中获取数据模型 接口数据
export const getModelName = (params) => {
  return request({
    url: `${baseURL}/1.0/dataModel/attribute/list/modelName`,
    method: 'get',
    params
  })
}
// 策略上下文参数查询（策略类型，作用域下拉）
export const strategyPageContextApi = () => {
  return request({
    url: `${baseURL}/1.0/strategy/pageContext`,
    method: 'get'
  })
}
// 策略-分组结果下拉
export const getBatchTypeOptions = (dispatchId) => {
  return request({
    url: `${baseURL}/1.0/strategy/scene/batchType/id/${dispatchId}`,
    method: 'get'
  })
}
