<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "QCron",
  setup(props) {
    const value = ref("* * * * *");
    return { value };
  },
});
</script>

<template>
  <cron-core v-model="value">
    <template #default="{ fields, period, error }"> </template>
  </cron-core>
</template>
