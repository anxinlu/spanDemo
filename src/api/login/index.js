import axios from 'axios'

import request from '../../utils/request'

const baseURL = ''

// export const login = () => {
//     return axios.get(`${baseURL}/login`)
// }
export const loginOut = (param) => {
  return axios.post(`${baseURL}/loginOut`, param)
}
// api方法样例
export function login(params) {
  return request({
    url: `/1.0/login`,
    method: 'post',
    data: params
  })
}
export function getRouters(params) {
  return request({
    url: `/1.0/users/fieldName/parameters?userId=${params}`,
    method: 'get'
  })
}
export function getInfo() {
  return request({
    url: '/1.0/login/userMessage',
    method: 'get'
  })
}
export function logout() {
  return request({
    url: '/1.0/logout',
    method: 'get'
  })
}
export function changepassword(params) {
  return request({
    url: '/1.0/userPassword',
    method: 'put',
    data: params
  })
}
// 获取lang
export function getLang() {
  return request({
    url: '/1.0/i18n',
    method: 'get'
  })
}
// 许可证
export function getLicenseValidate() {
  return request({
    url: '/1.0/licenseValidate',
    method: 'get'
  })
}
