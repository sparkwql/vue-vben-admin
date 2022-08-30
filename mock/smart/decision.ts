import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';
import { ResultEnum } from '../../src/enums/httpEnum';

const planList = [
  {
    name: '2022年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2022年投资方案版本2',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2021年投资方案版本',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2020年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2019年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2018年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2017年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2016年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2016年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
  {
    name: '2016年投资方案版本1',
    deptName: '国网湖南电力',
    baseYear: '2021',
    planYear: '2021',
    desc: '用户知道湖南公司2022年',
    creator: '魏某某',
    createTime: '2022-09-01',
  },
];

const capacityList = () => {
  const result: any[] = [];
  for (let index = 0; index < 9; index++) {
    result.push({
      id: `${index}`,
      metric: [
        '投资能力（万元）',
        '负债总额（万元）',
        '资产总额（万元）',
        '留存利润（万元）',
        '折旧额（万元）',
        '新增负债（万元）',
        '资产负债率',
        '自有资金（万元）',
        '准许收益（万元）',
      ][index],
      '2020Year': 1981300,
      '2021Year': 1981300,
      '2022Year': 1981300,
      '2023Year': 1981300,
      '2024Year': 1981300,
      '2025Year': 1981300,
      total: 111111,
    });
  }
  return result;
};

const deptList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 1; index++) {
    result.push({
      id: `${index}`,
      deptName: ['边界条件'][index],
      orderNo: index + 1,
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '0', '1'],
      children: (() => {
        const children: any[] = [];
        for (let j = 0; j < 3; j++) {
          children.push({
            id: `${index}-${j}`,
            deptName: ['电网经营指标预测', '分压网供负荷预测', '敏感性参数设置'][j],
            orderNo: j + 1,
            createTime: '@datetime',
            remark: '@cword(10,20)',
            'status|1': ['0', '1'],
            parentDept: `${index}`,
            children: undefined,
          });
        }
        return children;
      })(),
    });
  }
  return result;
})();

const sensitiveSide = () => {
  const result: any[] = [];
  for (let index = 0; index < 6; index++) {
    result.push({
      id: `${index}`,
      deptName: [
        '固定资产折旧额(万元)',
        '有效资产总额',
        '资产负债率上限',
        '权益资本收益率',
        '债务资本收益率',
        '固定资产转固率',
      ][index],
      orderNo: index + 1,
    });
  }
  return result;
};
const sensitiveList = () => {
  const result: any[] = [];
  for (let index = 0; index < 6; index++) {
    for (let j = 0; j < 6; j++) {
      result.push({
        id: `${index}`,
        category: ['单因素分析1', '单因素分析2', '单因素分析3'][index],
        param: ['固定资产折旧额(亿元)', '有效资产总额（亿元）', '资产负债率上限值'][index],
        year: [2021, 2022, 2023, 2024, 2025, '合计'][j],
        negativeThree: 206.22,
        negativeFive: 220.68,
        zero: 244.03,
        positiveThree: 269.9,
        positiveFive: 269.9,
      });
    }
  }
  return result;
};
const boundaryList = () => {
  const result: any[] = [];
  for (let index = 0; index < 16; index++) {
    result.push({
      id: `${index}`,
      name: [
        '接收中央及地方额外支持',
        '固定资产折旧额',
        '有效资产总额',
        '报废资产原值',
        '售电量',
        '销售电价（元/千千瓦时）',
        '输配电量（亿千瓦时）',
        '输配电价（元/千千瓦时）',
        '投资收益（万元）',
        '应扣除的准许收入（万元）',
        '价内税金（万元）',
        '权益资本收益率（%）',
        '债务资本收益率（%）',
        '法定盈余公积金（%）',
        '固定资产转固率（%）',
        '资产负债率上限（%）',
      ][index],
      '2021Year': 40,
      '2022Year': 50,
      '2023Year': 60,
      '2024Year': 45,
      '2025Year': 35,
    });
  }
  return result;
};

export default [
  {
    url: '/basic-api/decision/plan',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(planList);
    },
  },
  {
    url: '/basic-api/decision/deptList',
    method: 'get',
    response: () => {
      return resultSuccess(deptList);
    },
  },
  {
    url: '/basic-api/decision/sensitiveSideList',
    method: 'get',
    response: () => {
      return resultSuccess(sensitiveSide());
    },
  },
  {
    url: '/basic-api/decision/sensitiveList',
    method: 'get',
    response: () => {
      return resultSuccess(sensitiveList());
    },
  },
  {
    url: '/basic-api/decision/boundaryList',
    method: 'get',
    response: () => {
      return resultSuccess(boundaryList());
    },
  },
  {
    url: '/basic-api/decision/capacityList',
    method: 'get',
    response: () => {
      return resultSuccess(capacityList);
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];
