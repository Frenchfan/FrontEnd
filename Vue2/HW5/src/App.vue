<script>
 import TaskDescription from "./components/TaskDescription.vue";
 import ProductDetails from "./components/ProductDetails.vue";

 export default {
   name: 'App',
   components: {ProductDetails, TaskDescription},
 }
</script>

<template>
  <div class="app">
    <TaskDescription />
    <ProductDetails />
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
