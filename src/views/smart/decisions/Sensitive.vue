<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <SensitiveSide class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <div class="w-3/4 xl:w-4/5 p-4">
      <Card><Chart /></Card>
      <BasicTable @register="registerTable" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { Card } from 'ant-design-vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import SensitiveSide from '/@/views/smart/decisions/SensitiveSide.vue';
  import { useModal } from '/@/components/Modal';
  import Chart from './chart.vue';
  import { sensitiveColumns, searchFormSchema } from './guide.data';
  import { useGo } from '/@/hooks/web/usePage';
  import { getSensitiveList } from '/@/api/smart/decision';

  export default defineComponent({
    name: 'AccountManagement',
    components: { BasicTable, PageWrapper, SensitiveSide, Chart, Card },
    setup() {
      const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '',
        api: getSensitiveList,
        rowKey: 'id',
        columns: sensitiveColumns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        isCanResizeParent: false,
        useSearchForm: false,
        showTableSetting: false,
        bordered: false,
      });

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.id);
      }

      return {
        registerTable,
        registerModal,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
      };
    },
  });
</script>
