import request from '@utils/request'

// 获取场景表达式参数接口
export const getSceneExpress = (params) => {
  return request({
    url: `/1.0/auxiliary/expression/scene`,
    method: 'post',
    data: params
  })
}
// 获取数据模型字段种下拉
export const getFieldConfigOptions = ({ modelId, modelName }) => {
  return request({
    url: `/1.0/auxiliary/expression/dataModel/select?modelId=${modelId}&modelName=${modelName}`,
    method: 'get'
  })
}
// 获取数据模型表达式字段参数
export const getFieldConfigExpress = ({ modelId, modelName, type }) => {
  return request({
    url: `/1.0/auxiliary/expression/dataModel?modelId=${modelId}&modelName=${modelName}&type=${type}`,
    method: 'get'
  })
}
// 获取数据模型详情数据
export const getFieldConfigDetailData = (id) => {
  return request({
    url: `/1.0/auxiliary/expression/dataModel/detail?modelAttributeId=${id}`,
    method: 'get'
  })
}
// 获取数据模型详情数据
export const getStrategyExpOpt = (params) => {
  return request({
    url: `/1.0/auxiliary/expression/strategyDisposeSelect`,
    method: 'post',
    data: params
  })
}
// 获取数据模型详情数据
export const getStrategyExpList = (params) => {
  return request({
    url: `/1.0/auxiliary/expression/strategyDispose`,
    method: 'post',
    data: params
  })
}
// 校验表达式接口
export const getExpressVerify = (params) => {
  return request({
    url: `/1.0/auxiliary/expression/expressionVerification`,
    method: 'post',
    data: params
  })
}
