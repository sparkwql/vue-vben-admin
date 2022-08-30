import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'account',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const capacityColumns: BasicColumn[] = [
  {
    title: '指标',
    dataIndex: 'metric',
    width: 180,
    align: 'left',
  },
  {
    title: '2020',
    dataIndex: '2020Year',
  },
  {
    title: '2021',
    dataIndex: '2021Year',
  },
  {
    title: '2022',
    dataIndex: '2022Year',
  },
  {
    title: '2023',
    dataIndex: '2023Year',
  },
  {
    title: '2024',
    dataIndex: '2024Year',
  },
  {
    title: '2025',
    dataIndex: '2025Year',
  },
  {
    title: '合计',
    dataIndex: 'total',
  },
];

export const boundaryColumns: BasicColumn[] = [
  {
    title: '指标名称',
    dataIndex: 'name',
    width: 180,
    align: 'left',
  },
  {
    title: '2021年',
    dataIndex: '2021Year',
  },
  {
    title: '2022年',
    dataIndex: '2022Year',
  },
  {
    title: '2023年',
    dataIndex: '2023Year',
  },
  {
    title: '2024年',
    dataIndex: '2024Year',
  },
  {
    title: '2025年',
    dataIndex: '2025Year',
  },
];

export const sensitiveColumns: BasicColumn[] = [
  {
    title: '分析类别',
    dataIndex: 'category',
    width: 180,
    align: 'left',
    // customCell: (_, index) => ({
    //   rowSpan: index && index % 6 ? 6 : 0,
    //   colspan: 1,
    // }),
  },
  {
    title: '敏感性参数',
    dataIndex: 'param',
    width: 180,
    align: 'left',
    // customCell: (_, index) => ({
    //   rowSpan: index && index % 6 ? 6 : 0,
    //   colspan: 1,
    // }),
  },
  {
    title: '年份',
    dataIndex: 'year',
  },
  {
    title: '-5%',
    dataIndex: 'negativeFive',
  },
  {
    title: '-3%',
    dataIndex: 'negativeThree',
  },
  {
    title: '0',
    dataIndex: 'zero',
  },
  {
    title: '3%',
    dataIndex: 'positiveThree',
  },
  {
    title: '5%',
    dataIndex: 'positiveFive',
  },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'metric',
    label: '指标名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value)
              .then(() => resolve())
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
      },
    ],
  },
  {
    field: 'pwd',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: false,
  },
  {
    label: '角色',
    field: 'role',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'roleName',
      valueField: 'roleValue',
    },
    required: true,
  },
  {
    field: 'dept',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];

export const subMenuData = [
  {
    key: '1',
    label: '边界条件设定',
  },
  {
    key: '2',
    label: '投资能力测算',
  },
  {
    key: '3',
    label: '敏感性分析',
  },
  {
    key: '4',
    label: '投资规模设定',
  },
  {
    key: '5',
    label: '分压投资测算',
  },
  {
    key: '6',
    label: '分区比例测算',
  },
  {
    key: '7',
    label: '分区投资修正',
  },
  // {
  //   key: '8',
  //   label: '分压投资分配',
  // },
];
