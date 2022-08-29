<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="请选择参与分析的指标"
      :toolbar="false"
      :search="false"
      checkable
      :checkedKeys="['0', '1', '2', '3', '4', '5']"
      :clickRowToExpand="false"
      :treeData="treeData"
      :fieldNames="{ key: 'id', title: 'deptName' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { getSensitiveSideList } from '/@/api/smart/decision';

  export default defineComponent({
    name: 'SensitivieSide',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        treeData.value = (await getSensitiveSideList()) as unknown as TreeItem[];
      }

      function handleSelect(keys) {
        emit('select', keys[0]);
      }

      onMounted(() => {
        fetch();
      });
      return { treeData, handleSelect };
    },
  });
</script>
