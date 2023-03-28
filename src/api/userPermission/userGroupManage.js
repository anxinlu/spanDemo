import request from '../../utils/request'

// 用户组列表查询
export function getUserList(params) {
  return request({
    url: '/1.0/userGroup/filedName/parameters',
    method: 'get',
    params
  })
}

// 用户组删除
export function deleteUser(params) {
  return request({
    url: `/1.0/userGroup/delete/?groupId=${params}`,
    method: 'delete'
  })
}
// 新增用户组
export function addUserGroup(params) {
  return request({
    url: '/1.0/userGroup',
    method: 'post',
    data: params
  })
}
// 查询成员列表
export function getMemberList(params) {
  return request({
    url: '/1.0/userGroup/members/filedName/parameters',
    method: 'get',
    params
  })
}
// 用户组新增成员
export function addMember(params) {
  return request({
    url: '/1.0/userGroup/members',
    method: 'post',
    data: params
  })
}

// 用户组成员删除
export function deleteMember(params) {
  return request({
    url: '/1.0/userGroup/delete/members',
    method: 'delete',
    params
  })
}
// 查看资源
export function getResources(params) {
  return request({
    url: `/1.0/userGroup/resources?groupId=${params}`,
    method: 'get'
  })
}
export function editResources(params) {
  return request({
    url: '/1.0/userGroup/Resources',
    method: 'post',
    data: params
  })
}
