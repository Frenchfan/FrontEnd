<script>
export default {
  name: "ProductPriceFormat",
  emits: ['setCurrency'],
  data() {
    return {
      currency: '',
    }
  }
};
</script>

<template>
  <label>
    Select Currency Format:
    <select name="Price" v-model="currency" @change="$emit('setCurrency', currency)">
      <option value="" disabled selected> select currency </option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="RUB">RUB</option>
    </select>
  </label>

</template>

<style scoped>

</style>
