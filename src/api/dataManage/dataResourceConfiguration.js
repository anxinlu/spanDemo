import request from '../../utils/request'
// 新增数据源
export function addDataSource(params) {
  return request({
    url: '/1.0/datasource/commit',
    method: 'post',
    data: params
  })
}
// 数据源列表查询
export function getDataSourceList(params) {
  return request({
    url: '/1.0/datasource/filedName/parameters',
    method: 'get',
    params
  })
}
// 配置项查询
export function getConfiguration() {
  return request({
    url: '/1.0/datasource/configuration',
    method: 'get'
  })
}
// 查看数据配置
export function viewDataSource(params) {
  return request({
    url: `/1.0/datasource/details?id=${params}`,
    method: 'get'
  })
}
// 编辑
export function editDataSource(params) {
  return request({
    url: '/1.0/datasource/edit',
    method: 'post',
    data: params
  })
}
// 编辑
export function commitDataSource(params) {
  return request({
    url: '/1.0/datasource/commit',
    method: 'post',
    data: params
  })
}
// 测试
export function test(params) {
  return request({
    url: '/1.0/datasource/test',
    method: 'post',
    data: params
  })
}
// 保存数据源
export function saveDataSource(params) {
  return request({
    url: '/1.0/datasource/save',
    method: 'post',
    data: params
  })
}
