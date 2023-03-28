import request from '@utils/request'

const baseURL = ''

// 查询策略管理
export const strategyManageListApi = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/fielNames/parametes`,
    method: 'get',
    params
  })
}
// 查询版本管理列表
export const strategyVersionListApi = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/strategyVersion/fieldName/parameters`,
    method: 'get',
    params
  })
}

// 新增策略管理
export const strategyAddApi = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy`,
    method: 'post',
    data: params
  })
}

// 修改策略管理
export const strategyEditApi = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy`,
    method: 'put',
    data: params
  })
}
// 修改策略状态
export const strategyStatusEditApi = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/status/change`,
    method: 'put',
    params
  })
}
// 策略版本快照恢复
export const strategyVersionApi = (params) => {
  return request({
    url: `${baseURL}/1.0/strategy/strategyVersion`,
    method: 'put',
    data: params
  })
}
