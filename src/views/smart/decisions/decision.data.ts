import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '投资方案名称',
    dataIndex: 'name',
    width: 160,
  },
  {
    title: '管理单位',
    dataIndex: 'deptName',
  },
  {
    title: '基准年份',
    dataIndex: 'baseYear',
  },
  {
    title: '投资计划年份',
    dataIndex: 'planYear',
  },
  {
    title: '方案描述',
    dataIndex: 'desc',
    width: 200,
  },
  {
    title: '创建人',
    dataIndex: 'creator',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'deptName',
    label: '管理单位',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '1',
          key: '1',
        },
        {
          label: '选项2',
          value: '2',
          key: '2',
        },
      ],
    },
    colProps: { span: 4 },
  },
  {
    field: 'baseYear',
    label: '基准年',
    component: 'DatePicker',
    colProps: { span: 4 },
  },
  {
    field: 'planYear',
    label: '投资计划年份',
    component: 'DatePicker',
    labelWidth: '120px',
    colProps: { span: 5 },
  },
  {
    field: 'name',
    label: '方案名称',
    component: 'Input',

    colProps: { span: 5 },
  },
];
