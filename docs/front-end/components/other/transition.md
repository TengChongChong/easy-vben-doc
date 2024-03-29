# Transition

用于页面/组件切换动画

## Usage

```vue
<template>
  <div class="p-4">
    <div class="flex">
      <Select
        :options="options"
        v-model:value="value"
        placeholder="选择动画"
        :style="{ width: '150px' }"
      />
      <a-button type="primary" class="ml-4" @click="start"> start </a-button>
    </div>
    <component :is="`${value}Transition`">
      <div class="box" v-show="show"></div>
    </component>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Select } from 'ant-design-vue';
  import {
    FadeTransition,
    ScaleTransition,
    SlideYTransition,
    ScrollYTransition,
    SlideYReverseTransition,
    ScrollYReverseTransition,
    SlideXTransition,
    ScrollXTransition,
    SlideXReverseTransition,
    ScrollXReverseTransition,
    ScaleRotateTransition,
    ExpandXTransition,
    ExpandTransition,
  } from '/@/components/Transition';

  const transitionList = [
    'Fade',
    'Scale',
    'SlideY',
    'ScrollY',
    'SlideYReverse',
    'ScrollYReverse',
    'SlideX',
    'ScrollX',
    'SlideXReverse',
    'ScrollXReverse',
    'ScaleRotate',
    'ExpandX',
    'Expand',
  ];
  const options = transitionList.map((item) => ({
    label: item,
    value: item,
    key: item,
  }));

  export default defineComponent({
    components: {
      Select,
      FadeTransition,
      ScaleTransition,
      SlideYTransition,
      ScrollYTransition,
      SlideYReverseTransition,
      ScrollYReverseTransition,
      SlideXTransition,
      ScrollXTransition,
      SlideXReverseTransition,
      ScrollXReverseTransition,
      ScaleRotateTransition,
      ExpandXTransition,
      ExpandTransition,
    },
    setup() {
      const value = ref('Fade');
      const show = ref(true);
      function start() {
        show.value = false;
        setTimeout(() => {
          show.value = true;
        }, 300);
      }
      return { options, value, start, show };
    },
  });
</script>
<style lang="less" scoped>
  .box {
    width: 150px;
    height: 150px;
    margin-top: 20px;
    background: pink;
  }
</style>
```
