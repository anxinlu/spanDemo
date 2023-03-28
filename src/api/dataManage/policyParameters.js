import request from '../../utils/request'

// 策略参数列表查询
export function policyParametersList(params) {
  return request({
    url: '/1.0/strategy/parameter/listByCondition',
    method: 'POST',
    params
  })
}

// 策略参数编辑
export function editPolicyParameters(params) {
  return request({
    url: '/1.0/strategy/parameter/edit',
    method: 'put',
    data: params
  })
}
// 策略参数编辑
export function editSceneParameters(params) {
  return request({
    url: '/1.0/strategy/scene/edit',
    method: 'put',
    data: params
  })
}
// 策略参数新增
export function addPolicyParameters(params) {
  return request({
    url: '/1.0/strategy/parameter/save',
    method: 'POST',
    data: params
  })
}
// 查询所有策略参数
export function parameterAllList() {
  return request({
    url: '/1.0/strategy/parameter/allList',
    method: 'get'
  })
}
// 场景列表查询
export function sceneListByCondition(params) {
  return request({
    url: `/1.0/strategy/scene/listByCondition?dispatchType=${params.dispatchType}&pageNum=${params.pageNum}&pageSize=${params.pageSize}`,
    method: 'POST'
  })
}
// 查看策略场景详情
export function sceneGetById(params) {
  return request({
    url: `1.0/strategy/scene/id/${params}`,
    method: 'get'
  })
}
// sql下拉
export function sqlSelSqlIdAndName() {
  return request({
    url: '/1.0/sqlSel/sqlIdAndName',
    method: 'get'
  })
}
// 查看sql策略场景详情
export function statementList(params) {
  return request({
    url: `/1.0/sql/statement/list?id=${params}`,
    method: 'get'
  })
}
// 保存场景
export function saveScene(params) {
  return request({
    url: '/1.0/strategy/scene/save',
    method: 'POST',
    data: params
  })
}
// 提交场景
export function submitScene(params) {
  return request({
    url: '/1.0/strategy/scene/submit',
    method: 'POST',
    data: params
  })
}
// 查询所有的策略场景名称
export function sceneDispatchTypeList() {
  return request({
    url: '/1.0/strategy/scene/dispatchTypeList',
    method: 'get'
  })
}
// 策略参数 详情
export function getStrategyDetail(params) {
  return request({
    url: '/1.0/strategy/parameter/detail',
    method: 'get',
    params
  })
}
// 场景管理修改状态
export function sceneStatusChange(params) {
  return request({
    url: '/1.0/strategy/scene/status/change',
    method: 'put',
    params
  })
}
