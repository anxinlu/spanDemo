import request from '../../utils/request'

// 数据模型列表查询
export function getDataModelList(params) {
  return request({
    url: '/1.0/dataModel/fieldName/parameters',
    method: 'get',
    params
  })
}

// 新增数据模型
export function addDataModel(params) {
  return request({
    url: '/1.0/dataModel',
    method: 'post',
    data: params
  })
}
// 编辑
export function editDataModel(params) {
  return request({
    url: '/1.0/dataModel/update',
    method: 'put',
    data: params
  })
}
// 模型属性列表查询
export function getFieldConfigurationlList(params) {
  return request({
    url: '/1.0/dataModel/field/fieldName/parameters',
    method: 'get',
    params
  })
}
// 模型属性编辑
export function editField(params) {
  return request({
    url: '/1.0/dataModel/attribute/update',
    method: 'put',
    data: params
  })
}
// 模型属性新增
export function addField(params) {
  return request({
    url: '/1.0/dataModel/field',
    method: 'post',
    data: params
  })
}
// 模型属性删除
export function deleteField(params) {
  return request({
    url: `/1.0/dataModel/attribute/delete/${params}`,
    method: 'delete'
  })
}
// 模型属性详情
export function getDetailField(params) {
  return request({
    url: `/1.0/dataModel/field/detail?id=${params}`,
    method: 'get'
  })
}
// 模型属性数据类型
export function getType(params) {
  return request({
    url: `/1.0/dataModel/type/list?flag=${params}`,
    method: 'get'
  })
}
// 数据源类型查询
export function getDatasourceType() {
  return request({
    url: `/1.0/datasource/tableName/list`,
    method: 'get'
  })
}
// 表查询
export function getSchema(params) {
  return request({
    url: `/1.0/datasource/schema?datasource=${params}`,
    method: 'get'
  })
}
// 获取sqlname
export function getSqlName() {
  return request({
    url: `/1.0/sqlSel/sqlIdAndName`,
    method: 'get'
  })
}
// 根据id查询sql信息
export function getSqlDetail(id) {
  return request({
    url: `/1.0/sqlDetail?id=${id}`,
    method: 'get'
  })
}
// 根据id查询模型信息
export function getModelDetail(id) {
  return request({
    url: `/1.0/dataModel/detail?id=${id}`,
    method: 'get'
  })
}
export function getDesSion(id) {
  return request({
    url: `/1.0/dataMode/desSion?modelId=${id}`,
    method: 'get'
  })
}
// 查询字段类别
export function getAttributeType(params) {
  return request({
    url: `/1.0/dataModel/attributeType`,
    method: 'get',
    params
  })
}
// 创建字段类别
export function attributeTypeAdd(params) {
  return request({
    url: `/1.0/dataModel/attributeTypeAdd?attributeType=${params.attributeType}`,
    method: 'post'
  })
}
// 创建字段类别
export function attributeTypeDelete(params) {
  return request({
    url: `/1.0/dataModel/attributeTypeDelete?ID=${params.ID}`,
    method: 'post'
  })
}
// 模型属性数据类型(新接口)
export function getModelType(params) {
  return request({
    url: `/1.0/dataModel/attribute/type`,
    method: 'get',
    params
  })
}
