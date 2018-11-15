export function  shortDateFormat(dateObj) {
  return new Date(dateObj).toISOString().substr(5,5).replace('-','/');
}

export function dateFormat(dateObj) {
  return new Date(dateObj).toISOString().substr(0,10);
}

export const icons = {
  mine: {
    name: '我是业主',
    icons: [
      {
        id: null,
        name: '我的足迹',
        classNames: ['icon', 'iconfont', 'icon-foot', 'icon-fs', 'orange'],
        url: ''
      },
      {
        id: null,
        name: '我的地址',
        classNames: ['icon', 'iconfont', 'icon-address', 'icon-fs', 'deep-sky-blue'],
        url: '',
      },
      {
        id: null,
        name: '我的评价',
        classNames: ['icon', 'iconfont', 'icon-rating', 'icon-fs', 'hot-pink'],
        url: '',
      },
      {
        id: null,
        name: '我的收藏',
        classNames: ['icon', 'iconfont', 'icon-collection', 'icon-fs', 'yellow-green'],
        url: '',
      },
      {
        id: null,
        name: '缴费记录',
        classNames: ['icon', 'iconfont', 'icon-fee', 'icon-fs', 'light-sky-blue'],
        url: '/pm/list/payments',
      },
      {
        id: null,
        name: '报修记录',
        classNames: ['icon', 'iconfont', 'icon-repair-record', 'icon-fs', 'light-sea-green'],
        url: '/pm/list/repairs',
      },
      {
        id: null,
        name: '投诉记录',
        classNames: ['icon', 'iconfont', 'icon-complain-record', 'icon-fs', 'fire-brick'],
        url: '/pm/list/repairs?type=2',
      },
      {
        id: null,
        name: '我的建议',
        classNames: ['icon', 'iconfont', 'icon-suggestion', 'icon-fs', 'rebec-ca-purple'],
        url: '/pm/list/repairs?type=3'
      }
    ]
  },
  assets: {
    name: '我的资产',
    icons: [
      {
        id: null,
        name: '余额',
        classNames: ['icon', 'iconfont', 'icon-balance', 'icon-fs', 'orange-red'],
        url: '',
      },
      {
        id: null,
        name: '房源',
        classNames: ['icon', 'iconfont', 'icon-house', 'icon-fs', 'deep-sky-blue'],
        url: '/pm/list/houses'
      },
      {
        id: null,
        name: '订单',
        classNames: ['icon', 'iconfont', 'icon-order', 'icon-fs', 'light-sea-green'],
        url: '',
      },
      {
        id: null,
        name: '积分',
        classNames: ['icon', 'iconfont', 'icon-gift', 'icon-fs', 'hot-pink'],
        url: '',
      }
    ]
  },
  more: {
    name: '更多推荐',
    icons: [
      {
        id: null,
        name: '物业缴费',
        classNames: ['icon', 'iconfont', 'icon-pm-fee', 'icon-fs', 'light-sky-blue'],
        url: '/pm/pm-expense',
      },
      {
        id: null,
        name: '生活缴费',
        classNames: ['icon', 'iconfont', 'icon-life-fee', 'icon-fs', 'medium-sea-green'],
        url: '/pm/expense',
      },
      {
        id: null,
        name: '物业报修',
        classNames: ['icon', 'iconfont', 'icon-pm-repair', 'icon-fs', 'dark-orange'],
        url: '/pm/repair',
      },
      {
        id: null,
        name: '投诉建议',
        classNames: ['icon', 'iconfont', 'icon-complain', 'icon-fs', 'rebec-ca-purple'],
        url: '/pm/suggestion',
      },
      {
        id: null,
        name: '便民服务',
        classNames: ['icon', 'iconfont', 'icon-heart-service', 'icon-fs', 'yellow-green'],
        url: '/pm/service',
      },
      {
        id: null,
        name: '社区公告',
        classNames: ['icon', 'iconfont', 'icon-notice', 'icon-fs', 'light-sea-green'],
        url: '/pm/list/notices',
      },
      {
        id: null,
        name: '我的收藏',
        classNames: ['icon', 'iconfont', 'icon-collection', 'icon-fs', 'light-sea-green'],
        hide: true,
        url: '',
      }
    ]
  },
  oa: {
    name: '办公管理',
    icons: [
      {
        id: null,
        name: '待办事项',
        classNames: ['icon', 'iconfont', 'icon-pending', 'icon-fs', 'orange'],
        url: '/oa/pending',
      },
      {
        id: null,
        name: '已办事项',
        classNames: ['icon', 'iconfont', 'icon-done', 'icon-fs', 'light-sky-blue'],
        url: '',
      },
      {
        id: null,
        name: '工作总结',
        classNames: ['icon', 'iconfont', 'icon-complain', 'icon-fs', 'dark-orange'],
        url: '',
      },
      {
        id: null,
        name: '通知公告',
        classNames: ['icon', 'iconfont', 'icon-notice', 'icon-fs', 'yellow-green'],
        url: '',
      },
    ],
  },
  pm: {
    name: '物业管理',
    icons: [
      {
        id: null,
        name: '房屋验收',
        classNames: ['icon', 'iconfont', 'icon-house-check', 'icon-fs', 'deep-pink'],
        url: '',
      },
      {
        id: null,
        name: '房屋查验',
        classNames: ['icon', 'iconfont', 'icon-house-check', 'icon-fs', 'orange-red'],
        url: '',
      },
      {
        id: null,
        name: '装修巡查',
        classNames: ['icon', 'iconfont', 'icon-house-check', 'icon-fs', 'deep-sky-blue'],
        url: '',
      },
      {
        id: null,
        name: '装修验收',
        classNames: ['icon', 'iconfont', 'icon-house-check', 'icon-fs', 'medium-sea-green'],
        url: '',
      },
      {
        id: null,
        name: '设备管理',
        classNames: ['icon', 'iconfont', 'icon-facility', 'icon-fs', 'light-sky-blue'],
        url: '',
      },
      {
        id: null,
        name: '园区巡查',
        classNames: ['icon', 'iconfont', 'icon-around-check', 'icon-fs', 'hot-pink'],
        url: '',
      },
      {
        id: null,
        name: '工单填报',
        classNames: ['icon', 'iconfont', 'icon-complain', 'icon-fs', 'yellow-green'],
        url: '/oa/job',
      },
      {
        id: null,
        name: '能耗抄表',
        classNames: ['icon', 'iconfont', 'icon-instrument', 'icon-fs', 'light-sea-green'],
        url: '',
      },
      {
        id: null,
        name: '业主信息',
        classNames: ['icon', 'iconfont', 'icon-owner', 'icon-fs', 'dark-orange'],
        url: '',
      },
      {
        id: null,
        name: '扫描兑奖',
        classNames: ['icon', 'iconfont', 'icon-barcode', 'icon-fs', 'dark-slate-grey'],
        url: '',
      },
      {
        id: null,
        name: '虚位以待',
        classNames: ['icon', 'iconfont', 'icon-owner', 'icon-fs'],
        hide: true,
        url: '',
      },
      {
        id: null,
        name: '虚位以待',
        classNames: ['icon', 'iconfont', 'icon-owner', 'icon-fs'],
        hide: true,
        url: '',
      }
    ]
  }
};
