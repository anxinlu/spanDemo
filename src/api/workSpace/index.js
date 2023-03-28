import request from '@utils/request'

// 新增工作空间
export const addWorkSpaceApi = (params) => {
  return request({
    url: `/1.0/workspace/add`,
    method: 'post',
    data: params
  })
}
// 编辑工作空间
export const editWorkSpaceApi = (params) => {
  return request({
    url: `/1.0/workspace/edit`,
    method: 'put',
    data: params
  })
}
// 删除工作空间
export const deleteWorkSpaceApi = (id) => {
  return request({
    url: `/1.0/workspace/delete/${id}`,
    method: 'get'
  })
}
// 查询工作空间列表
export const searchWorkSpaceListApi = (params) => {
  return request({
    url: `/1.0/workspace/listByCondition`,
    method: 'post',
    params
  })
}
// 查询所有工作空间名称
export const searchAllWorkSpaceNamesApi = () => {
  return request({
    url: `/1.0/workspace/allNameList`,
    method: 'get'
  })
}
// 添加空间成员
export const addWorkSpacePeoplesApi = (params) => {
  return request({
    url: `/1.0/workspace/addPeoples`,
    method: 'post',
    data: params
  })
}
/**
 * 接口: 查询系统中的所有用户
 * 业务处理: 查询当前空间下面的用户信息
 * 使用场景: 在添加工作空间成员时
 */
export const searchAllUsersApi = () => {
  return request({
    url: `/1.0/user/allUser`,
    method: 'get'
  })
}
// 设置用户选择的工作空间
export const setSelectWorkSpaceApi = ({ workSpaceName, loginPlatform }) => {
  return request({
    url: `/1.0/workSpaceName/set/${workSpaceName}/${loginPlatform}`,
    method: 'get'
  })
}
// 获取用户选择的工作空间
export const getSelectWorkSpaceApi = (loginPlatform) => {
  return request({
    url: `/1.0/workSpaceName/select/${loginPlatform}`,
    method: 'get'
  })
}
