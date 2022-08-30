<template>
  <BasicTable @register="registerTable" class="p-4" size="small">
    <template #toolbar>
      <a-button type="primary" size="small">计算</a-button>
      <a-button type="primary" size="small">保存</a-button>
      <a-button type="primary" size="small">趋势分析</a-button>
      <a-button type="primary" size="small">导出</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { capacityColumns as columns, searchFormSchema } from './guide.data';
  import { getCapacityList } from '/@/api/smart/decision';

  export default defineComponent({
    name: 'Capacity',
    components: { BasicTable },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '',
        api: getCapacityList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: false,
        showTableSetting: false,
        bordered: false,
        showIndexColumn: false,
      });

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handleSuccess,
      };
    },
  });
</script>
