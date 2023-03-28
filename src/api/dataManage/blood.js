import request from '../../utils/request'

// 缓存配置列表查询
export function getCacheConfigurationList(params) {
  return request({
    url: '/1.0/cache/fieldName/parameters',
    method: 'get',
    params
  })
}

// 血缘图
// modelPriName模型名称 modelName模型属性名称
export function getKinShipDiagram(params) {
  const { config } = params
  return request({
    url: `/1.0/getKinShipDiagram?modelPriName=${params.modelName}&modelName=${params.modelPriName}&modelId=${params.modelId}`,
    method: 'post',
    data: config
  })
}
// 血缘图预览
export function getPreviewBloodMap(params) {
  return request({
    url: `/1.0/dataModel/previewKinShipDiagram?modelPriName=${params.modelName}&modelName=${params.modelPriName}&modelId=${params.modelId}`,
    method: 'get'
  })
}
