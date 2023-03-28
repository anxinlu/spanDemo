import request from '../../utils/request'

// 缓存配置列表查询
export function getDiagnosisList(params) {
  return request({
    url: '/1.0/diagnosis/list',
    method: 'get',
    params
  })
}
// 新增接口
export function saveData(params) {
  return request({
    url: '/1.0/diagnosis/execute',
    method: 'post',
    data: params
  })
}
// 删除接口
export function deleteData(params) {
  return request({
    url: `/1.0/diagnosis/delete/${params}`,
    method: 'delete'
  })
}
// 缓存配置列表查询
export function getDetail(params) {
  return request({
    url: `/1.0/diagnosis/detail?id=${params}`,
    method: 'get'
  })
}
// 获取策略参数和字段下拉选项
export function getOptions() {
  return request({
    url: `/1.0/diagnosis/create`,
    method: 'get'
  })
}
