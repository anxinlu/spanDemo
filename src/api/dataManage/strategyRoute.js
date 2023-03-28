import request from '../../utils/request'
// 策略路由单个查询
export function queryByScene(sceneID) {
  return request({
    url: `/1.0/strategy/route/queryByScene?sceneID=${sceneID}`,
    method: 'get'
  })
}
// 查询场景下所有策略
export function getStrategyListById(sceneID) {
  return request({
    url: `/1.0/strategy/route/getStrategyListById?sceneID=${sceneID}`,
    method: 'get'
  })
}
// 策略路由保存
export function saveRoute(data) {
  return request({
    url: `/1.0/strategy/route/saveRoute`,
    method: 'post',
    data
  })
}
// 策略路由提交
export function commitRoute(data) {
  return request({
    url: `/1.0/strategy/route/commitRoute`,
    method: 'post',
    data
  })
}
// 策略路由验证
export function verifyRoute(data) {
  return request({
    url: `/1.0/strategy/route/verifyRoute`,
    method: 'post',
    data
  })
}
