import request from '../../utils/request'

// 缓存配置列表查询
export function getCacheConfigurationList(params) {
  return request({
    url: '/1.0/cache/fieldName/parameters',
    method: 'get',
    params
  })
}

// 缓存配置编辑
export function editCacheConfiguration(params) {
  return request({
    url: '/1.0/cache/update',
    method: 'put',
    data: params
  })
}
// 缓存配置新增
export function addCacheConfiguration(params) {
  return request({
    url: '/1.0/cache/commit',
    method: 'post',
    data: params
  })
}
// 缓存配置保存
export function saveCacheConfiguration(params) {
  return request({
    url: '/1.0/cache/save',
    method: 'post',
    data: params
  })
}
// 缓存配置编辑
export function detialCacheConfiguration(params) {
  return request({
    url: `/1.0/cache/detail?id=${params}`,
    method: 'get'
  })
}
// 查询数据源类型
export function getType() {
  return request({
    url: '/1.0/datasource/type',
    method: 'get'
  })
}
// 查询数据源
export function getDataSource(params) {
  return request({
    url: `/1.0/datasource/name/list?type=${params}`,
    method: 'get'
  })
}
// 缓存配置 切换引用状态
export function reFerenceStatus(params) {
  return request({
    url: `/1.0/editDelete/reference/status`,
    method: 'get',
    params
  })
}
// 缓存配置 切换引用状态
export function editDelete(params) {
  return request({
    url: `/1.0/editDelete/delete`,
    method: 'delete',
    params
  })
}
