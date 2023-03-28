import request from '../../utils/request'

// 用户列表查询
export function getUserList(params) {
  return request({
    url: '/1.0/user/filedName/parameters',
    method: 'get',
    params
  })
}

// 新增用户
export function addUser(params) {
  return request({
    url: '/1.0/addUser',
    method: 'post',
    data: params
  })
}
