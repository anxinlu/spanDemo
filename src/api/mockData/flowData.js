import d from './flowData.json'

const Mock = require('mockjs')

const data = JSON.stringify(Mock.mock(d))
export default data
