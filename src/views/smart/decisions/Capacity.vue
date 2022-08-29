<template>
  <BasicTable @register="registerTable" />
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
        useSearchForm: true,
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
