import request from '../../utils/request'
// 查询场景的信息以下拉框的形式返回运行中的场景
export function sceneSelect() {
  return request({
    url: `/1.0/sceneSelect`,
    method: 'get'
  })
}
// 根据报表类型返回对应的指标选择
export function indexSelect(params) {
  return request({
    url: `/1.0/indexSelect?reportType=${params.reportType}&dimensionality=${params.dimensionality}`,
    method: 'get'
  })
}
// 场景报表查询
export function sceneReport(data) {
  return request({
    url: '/1.0/sceneReport',
    method: 'post',
    data
  })
}
// 策略选择下拉框信息   三级联动
export function getStrategySelectList() {
  return request({
    url: '/1.0/strategySelect',
    method: 'get'
  })
}
// 日历流水日期区分
export function dateDistinguish(date) {
  return request({
    url: `/1.0/dateDistinguish?date=${date}`,
    method: 'get'
  })
}
// 策略报表查询
export function strategyReport(data) {
  return request({
    url: '/1.0/strategyReport',
    method: 'post',
    data
  })
}
// 首页数据展示
export function homePageDisplay() {
  return request({
    url: '/1.0/homePageDisplay',
    method: 'get'
  })
}
