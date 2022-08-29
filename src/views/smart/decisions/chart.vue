<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts" setup>
  import { onMounted, PropType, ref, Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

  defineProps({
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '220px',
    },
  });
  onMounted(() => {
    setOptions({
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['-5', '-3', '0', '3', '5'],
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: 'solid',
            color: 'rgba(226,226,226,0.5)',
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: [
        {
          type: 'value',
          max: 100,
          name: '投资能力',
          splitNumber: 4,
          axisTick: {
            show: false,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)'],
            },
          },
        },
      ],
      grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      series: [
        {
          smooth: false,
          name: '单因素-因变量1',
          data: [11, 22, 40, 60, 80, 90],
          type: 'line',
          // itemStyle: {
          //   color: '#5ab1ef',
          // },
        },
        {
          smooth: false,
          name: '单因素-因变量2',
          data: [20, 30, 40, 70, 85, 95],
          type: 'line',
          // itemStyle: {
          //   color: '#019680',
          // },
        },
        {
          smooth: false,
          name: '单因素-因变量3',
          data: [30, 35, 40, 68, 80, 90],
          type: 'line',
        },
      ],
    });
  });
</script>
