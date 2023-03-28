import request from '../../utils/request'
// SQL查询列表页
export function getSqlList(params) {
  return request({
    url: '/1.0/sqlList',
    method: 'get',
    params
  })
}
// SQL提交
export function submitSql(params) {
  return request({
    url: '/1.0/sqlSubmit',
    method: 'post',
    data: params
  })
}
// SQL保存
export function saveSql(params) {
  return request({
    url: '/1.0/sqlSave',
    method: 'post',
    data: params
  })
}
// SQL测试
export function testSqls(params) {
  return request({
    url: '/1.0/sqlTest',
    method: 'post',
    data: params
  })
}
// SQL编辑
export function updateSql(params) {
  return request({
    url: '/1.0/sqlUpdate',
    method: 'put',
    data: params
  })
}
// 获取详情
export function getDetail(params) {
  return request({
    url: `/1.0/sqlSel?id=${params}`,
    method: 'get'
  })
}
// 数据源下拉
export function getSqlSelDataSourceId() {
  return request({
    url: '/1.0/sqlSelDataSourceId',
    method: 'get'
  })
}
// 参数类型下拉
export function getSqlSelSelector() {
  return request({
    url: '/1.0/sql/sqlSelSelector',
    method: 'get'
  })
}
