<template>
  <div>
    <div class="guide-tp">
      <ul>
        <li
          :class="curItem === item.key && 'active'"
          v-for="item in list"
          :key="item.key"
          @click="onChange(item.key)"
          >{{ item.label }}</li
        >
      </ul>
    </div>
    <Boundary v-if="curItem === '1'" />
    <Capacity v-if="curItem === '2'" />
    <Sensitive v-if="curItem === '3'" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';

  import { subMenuData } from './guide.data';

  import Boundary from '/@/views/smart/decisions/Boundary.vue';
  import Capacity from '/@/views/smart/decisions/Capacity.vue';
  import Sensitive from '/@/views/smart/decisions/Sensitive.vue';
  export default defineComponent({
    name: 'AccountManagement',
    components: {
      Boundary,
      Capacity,
      Sensitive,
    },
    setup() {
      const list = reactive<any>(subMenuData);
      const curItem = ref<string>('1');

      function onChange(val) {
        curItem.value = val;
      }

      return {
        list,
        onChange,
        curItem,
      };
    },
  });
</script>
<style lang="less">
  .guide-tp {
    background: #fff;
    margin: 5px 16px 0;
    padding: 10px 20px;

    ul {
      display: inline-flex;
      margin: 0;

      li {
        position: relative;
        padding: 5px 10px;
        border: 1px solid #eee;
        margin-right: 50px;
        border-radius: 4px;
        cursor: pointer;

        &.active {
          border: none;
          border-top: 2px solid rgba(56, 165, 161, 1);
          color: rgba(56, 165, 161, 1);
          border-radius: 0;
        }

        &:not(:last-child):after {
          position: absolute;
          right: -53px;
          top: 4px;
          content: '';
          width: 0;
          height: 0;
          border: 11px solid;
          border-color: transparent transparent transparent #38a5a1;
          border-left-width: 26px;
          border-radius: 5px;
        }
      }
    }
  }
</style>
