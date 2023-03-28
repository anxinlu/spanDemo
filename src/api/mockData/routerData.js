const getRouters1 = {
  code: 200,
  message: '成功',
  data: [
    {
      id: 1,
      path: '',
      name: null,
      component: 'layout',
      meta: { icon: '', title: '首页' },
      metaStr: '{ "title": "首页", "icon": "" }',
      redirect: '/dispatch/strategyManage',
      childrens: '2',
      hidden: null,
      hiddenstr: null,
      strategyPermission: {
        policyEditing: true,
        versionManagement: true,
        policyStatus: true
      },
      status: '1',
      parent: '0',
      children: [
        {
          id: 2,
          path: '/dispatch',
          name: 'dispatch',
          component: null,
          meta: { icon: 'dispatch', title: '派工管理' },
          metaStr: '{ "title": "派工管理", "icon": "dispatch" }',
          redirect: '/dispatch/strategyManage',
          childrens: '1',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '1'
        },
        {
          id: 3,
          path: '/dataManage',
          name: 'dataManage',
          component: null,
          meta: { icon: 'dataManage', title: '数据管理' },
          metaStr: '{ "title": "数据管理", "icon": "dataManage" }',
          redirect: '/dataManage/dataSourceConfiguration',
          childrens: '1',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '1',
          children: []
        },
        {
          id: 4,
          path: '/userPermission',
          name: 'userPermission',
          component: null,
          meta: { icon: 'userPermission', title: '用户权限' },
          metaStr: '{ "title": "用户权限", "icon": "userPermission" }',
          redirect: '/userPermission/userMange',
          childrens: '1',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '1',
          children: []
        },
        {
          id: 5,
          path: '/dispatch/strategyManage',
          name: 'strategyManage',
          component: 'dispatch/strategyManage/index.vue',
          meta: { icon: 'dispatch', title: '策略管理' },
          metaStr: '{ "title": "策略管理", "icon": "dispatch" }',
          parentName: 'dispatch',
          redirect: null,
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 13,
          path: 'policyEditing',
          name: 'policyEditing',
          component: null,
          meta: {},
          metaStr: null,
          redirect: null,
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 14,
          path: 'versionManagement',
          name: 'versionManagement',
          component: null,
          meta: {},
          metaStr: null,
          redirect: null,
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 15,
          path: 'policyStatus',
          name: 'policyStatus',
          component: null,
          meta: {},
          metaStr: null,
          redirect: null,
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 25,
          path: '/dispatch/waterLogging',
          name: 'waterLogging',
          component: 'dispatch/waterLogging/index.vue',
          meta: { icon: 'dispatch', title: '流水日志' },
          metaStr: '{ "title": "流水日志", "icon": "dispatch" }',
          redirect: null,
          parentName: 'dispatch',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 26,
          path: '/dispatch/waterLogging/detail/:id',
          name: 'detailWaterLogging',
          component: 'dispatch/waterLogging/detail.vue',
          meta: { icon: 'waterLogging', title: '派工详情' },
          metaStr: '{"title":"派工详情","icon":"waterLogging"}',
          parentName: 'dispatch',
          redirect: null,
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 27,
          path: '/dispatch/gs/:id',
          name: 'gs',
          component: 'dispatch/strategyManage/generalStrategy/index.vue',
          meta: { icon: 'gs', title: '绘图配置' },
          metaStr: '{"title":"绘图配置","icon":"gs"}',
          redirect: null,
          parentName: 'dispatch',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 31,
          path: '/dispatch/scene',
          name: 'scene',
          component: 'sceneParameters/index.vue',
          meta: { icon: 'dispatch', title: '场景管理' },
          metaStr: "{ title: '场景管理', icon: 'dispatch' }",
          redirect: null,
          childrens: '0',
          parentName: 'dispatch',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 32,
          path: '/dispatch/scene/add/:id/:type',
          name: 'addscene',
          component: 'sceneParameters/addScene.vue',
          meta: { icon: 'dispatch', title: '场景信息' },
          metaStr: "{ title: '场景信息', icon: 'dispatch' }",
          redirect: null,
          parentName: 'dispatch',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 34,
          path: '/dispatch/strategyTest/:id/:dispatchType',
          name: 'strategyTest',
          component: 'dispatch/strategyTest/index.vue',
          meta: { icon: 'dispatch', title: '策略测试' },
          metaStr: "{ title: '策略测试', icon: 'dispatch' }",
          redirect: null,
          childrens: '0',
          parentName: 'dispatch',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 35,
          path: '/dispatch/addStrategyTest/:id/:type/:strategyId/:dispatchType',
          name: 'addStrategyTest',
          component: 'dispatch/strategyTest/addStrategyTest.vue',
          meta: { icon: 'dispatch', title: '策略测试配置' },
          metaStr: "{ title: '策略测试配置', icon: 'dispatch' }",
          redirect: null,
          childrens: '0',
          parentName: 'dispatch',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '2',
          children: []
        },
        {
          id: 6,
          path: '/dataManage/dataSourceConfiguration',
          name: 'dataSourceConfiguration',
          component: 'dataSourceConfiguration/index.vue',
          meta: { icon: 'dataManage', title: '数据源配置' },
          metaStr: '{ "title": "数据源配置", "icon": "dataManage" }',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 7,
          path: '/dataManage/cacheConfiguration',
          name: 'cacheConfiguration',
          component: 'cacheConfiguration/index.vue',
          meta: { icon: 'dataManage', title: '缓存配置' },
          metaStr: '{ "title": "缓存配置", "icon": "dataManage" }',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 8,
          path: '/dataManage/customFunction',
          name: 'customFunction',
          component: 'customFunction/index.vue',
          meta: { icon: 'dataManage', title: '自定义函数' },
          metaStr: '{ "title": "自定义函数", "icon": "dataManage" }',
          redirect: null,
          childrens: '0',
          parentName: 'dataManage',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 9,
          path: '/dataManage/dataModel',
          name: 'dataModel',
          component: 'dataModel/index.vue',
          meta: { icon: 'dataManage', title: '数据模型' },
          metaStr: '{ "title": "数据模型", "icon": "dataManage" }',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 10,
          path: '/dataManage/fieldConfiguration/:id',
          name: 'fieldConfiguration',
          component: 'dataModel/fieldConfiguration.vue',
          meta: { icon: 'dataManage', title: '字段配置' },
          metaStr: '{ "title": "字段配置", "icon": "dataManage" }',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 16,
          path: '/dataManage/dataSourceConfiguration/view/:id',
          name: 'viewConfiguration',
          component: 'dataSourceConfiguration/ViewConfiguration.vue',
          meta: { icon: 'dataManage', title: '查看配置' },
          metaStr: '{"title":"查看配置","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 17,
          path: '/dataManage/dataSourceConfiguration/add/:id',
          name: 'addConfiguration',
          component: 'dataSourceConfiguration/AddConfiguration.vue',
          meta: { icon: 'dataManage', title: '新增配置' },
          metaStr: '{"title":"新增配置","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 18,
          path: '/dataManage/dataSourceConfiguration/edit/:id',
          name: 'editConfiguration',
          component: 'dataSourceConfiguration/EditConfiguration.vue',
          meta: { icon: 'dataManage', title: '编辑配置' },
          metaStr: '{"title":"编辑配置","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 19,
          path: '/dataManage/cacheConfiguration/add',
          name: 'addCache',
          component: 'cacheConfiguration/AddCache.vue',
          meta: { icon: 'dataManage', title: '新增缓存' },
          metaStr: '{"title":"新增缓存","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 20,
          path: '/dataManage/cacheConfiguration/edit/:id',
          name: 'editCache',
          component: 'cacheConfiguration/EditCache.vue',
          meta: { icon: 'dataManage', title: '编辑缓存' },
          metaStr: '{"title":"编辑缓存","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 21,
          path: '/dataManage/customFunction/add',
          name: 'addFunction',
          component: 'customFunction/AddFunction.vue',
          meta: {
            icon: 'dataManage',
            title: '新增自定义函数'
          },
          metaStr: '{"title":"新增自定义函数","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 22,
          path: '/dataManage/customFunction/edit/:id',
          name: 'editFunction',
          component: 'customFunction/EditFunction.vue',
          meta: {
            icon: 'dataManage',
            title: '编辑自定义函数'
          },
          metaStr: '{"title":"编辑自定义函数","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 23,
          path: '/dataManage/fieldConfiguration/add/:id',
          name: 'addfieldConfiguration',
          component: 'dataModel/AddfieldConfiguration.vue',
          meta: { icon: 'dataManage', title: '新增字段' },
          metaStr: '{"title":"新增字段","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 24,
          path: '/dataManage/fieldConfiguration/edit/:id',
          name: 'editfieldConfiguration',
          component: 'dataModel/EditfieldConfiguration.vue',
          meta: { icon: 'dataManage', title: '编辑字段' },
          metaStr: '{"title":"编辑字段","icon":"dataManage"}',
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 28,
          path: '/dataManage/sql',
          name: 'sql',
          component: 'SQL/index.vue',
          meta: { icon: 'dataManage', title: 'SQL查询' },
          metaStr: "{ title: 'SQL查询', icon: 'dataManage' }",
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 29,
          path: '/dataManage/sql/add',
          name: 'sqladd',
          component: 'SQL/AddSql.vue',
          meta: { icon: 'dataManage', title: '新增SQL查询' },
          metaStr: "{ title: '新增SQL查询', icon: 'dataManage' }",
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 30,
          path: '/dataManage/sql/edit/:id',
          name: 'sqledit',
          component: 'SQL/AddSql.vue',
          meta: { icon: 'dataManage', title: '编辑SQL查询' },
          metaStr: "{ title: '编辑SQL查询', icon: 'dataManage' }",
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: true,
          hiddenstr: 'true',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 33,
          path: '/dataManage/policyParameters',
          name: 'policyParameters',
          component: 'policyParameters/index.vue',
          meta: { icon: 'dataManage', title: '策略参数' },
          metaStr: "{ title: '策略参数', icon: 'dataManage' }",
          redirect: null,
          parentName: 'dataManage',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '3',
          children: []
        },
        {
          id: 11,
          path: '/userPermission/userMange',
          name: 'userMange',
          component: 'userMange/index.vue',
          meta: { icon: 'userPermission', title: '用户管理' },
          metaStr: '{ "title": "用户管理", "icon": "userPermission" }',
          redirect: null,
          parentName: 'userPermission',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '4',
          children: []
        },
        {
          id: 12,
          path: '/userPermission/userGroup',
          name: 'userGroup',
          component: 'userGroup/index.vue',
          meta: {
            icon: 'userPermission',
            title: '用户组管理'
          },
          metaStr: '{ "title": "用户组管理", "icon": "userPermission" }',
          redirect: null,
          parentName: 'userPermission',
          childrens: '0',
          hidden: false,
          hiddenstr: 'false',
          strategyPermission: {
            policyEditing: true,
            versionManagement: true,
            policyStatus: true
          },
          status: '1',
          parent: '4',
          children: []
        }
      ]
    }
  ],
  pageInfo: null
}

export default getRouters1
