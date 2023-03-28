import request from '@utils/request'

// 新增工作空间
export const quoteApi = ({ id, moduleType }) => {
  return request({
    url: `/1.0/reference?id=${id}&moduleType=${moduleType}`,
    method: 'get'
  })
}

export const test = (params) => {
  return request({
    url: `/1.0/reference`,
    method: 'post',
    data: params
  })
}
