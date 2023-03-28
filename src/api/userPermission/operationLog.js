import request from '../../utils/request'

// 操作类型获取
export function getOperationSelect() {
  return request({
    url: '/1.0/operationSelect',
    method: 'get'
  })
}

// 操作日志list获取
export function getOperationList(data) {
  return request({
    url: '/1.0/operaTion',
    method: 'post',
    data
  })
}
