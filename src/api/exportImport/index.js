import request from '@utils/request'

// 导出 获取引用关系
export const getReferRelation = (params) => {
  return request({
    url: `/1.0/export/getReferRelation`,
    method: 'post',
    params
  })
}
// 导出确认
export const exportConfirm = (params) => {
  return request({
    url: `/1.0/export/confirm`,
    method: 'get',
    params
  })
}
// 导入 上传文件
export const importUpLoad = (params) => {
  return request({
    url: `/1.0/import/upLoad`,
    method: 'post',
    data: params
  })
}
// 导入 校验文件
export const importCheckApi = (params) => {
  return request({
    url: `/1.0/import/check`,
    method: 'post',
    params
  })
}
// 导入 确认文件
export const importConfirm = (params) => {
  return request({
    url: `/1.0/import/confirm`,
    method: 'post',
    data: params
  })
}

export const test = (params) => {
  return request({
    url: `/1.0/reference`,
    method: 'post',
    data: params
  })
}
