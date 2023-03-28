import request from '../../utils/request'

// 测试用例列表接口
export function testCaseGetList(params) {
  return request({
    url: `/1.0/strategy/testCase/getList`,
    method: 'get',
    params
  })
}
// 测试用例数据模型（模型表头）
export function testCaseAttrList(params) {
  return request({
    url: '/1.0/strategy/testCase/attrList',
    method: 'post',
    data: params
  })
}
// 测试用例保存接口
export function testCaseSave(params) {
  return request({
    url: '/1.0/strategy/testCase/save',
    method: 'post',
    data: params
  })
}
// 测试用例删除接口
export function testCaseDelete(params) {
  return request({
    url: `/1.0/strategy/testCase/delete`,
    method: 'delete',
    data: params
  })
}
// 测试用例导出接口
export function testCaseExport(params) {
  return request({
    url: `/1.0/strategy/testCase/export?testCaseId=${params}`,
    method: 'get'
  })
}
// 测试用例导入接口
export function importStrategyCase(params) {
  return request({
    url: `/1.0/strategy/testCase/importStrategyCase`,
    method: 'post',
    data: params
  })
}
// 测试用例执行接口
export function testCaseExecute(params) {
  return request({
    url: `/1.0/strategy/testCase/execute?strategyCaseId=${params.strategyCaseId}&ignoreValidate=${params.ignoreValidate}`,
    method: 'get'
  })
}
// 测试用例编辑
export function getStrategyCaseDetailsDataList(params) {
  return request({
    url: `/1.0/strategy/testCase/getStrategyCaseDetailsDataList?strategyCaseId=${params}`,
    method: 'get'
  })
}
// 获取测试用例表头数据
export function getStrategyCaseDataList(params) {
  return request({
    url: `/1.0/strategy/testCase/getStrategyCaseDataList?strategyId=${params}`,
    method: 'get'
  })
}
