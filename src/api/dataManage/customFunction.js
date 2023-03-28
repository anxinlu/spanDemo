import request from '../../utils/request'

// 自定义函数列表查询
export function getFunctionList(params) {
  return request({
    url: '/1.0/function/fieldName/parameters',
    method: 'get',
    params
  })
}

// 新增
export function addFunction(params) {
  return request({
    url: '/1.0/function/save',
    method: 'post',
    data: params
  })
}
// 测试用例验证
export function vilidateTest(params) {
  return request({
    url: '/1.0/function/test',
    method: 'post',
    data: params
  })
}
// 提交
export function submit(params) {
  return request({
    url: '/1.0/function/commit',
    method: 'post',
    data: params
  })
}
// 编辑 废弃了
export function editFunction(params) {
  return request({
    url: '/1.0/function/update',
    method: 'put',
    data: params
  })
}
// 返回值类型查询
export function getReturnType() {
  return request({
    url: '/1.0/returnType',
    method: 'get'
  })
}
// 返回值类型查询
export function getDetails(params) {
  return request({
    url: `/1.0/function/details?id=${params}`,
    method: 'get'
  })
}

// 依赖元素
export function getCunstomReturnType(params) {
  return request({
    url: `/1.0/cunstomReturnType?customId=${params}`,
    method: 'get'
  })
}
// 编辑时保存
export function updateSave(params) {
  return request({
    url: '/1.0/function/update',
    method: 'put',
    data: params
  })
}
