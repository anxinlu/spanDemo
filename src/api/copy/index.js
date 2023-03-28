import request from '@utils/request'

// 复制
const copyApi = (params) => {
  return request({
    url: `/1.0/copy`,
    method: 'post',
    params
  })
}

export default copyApi
