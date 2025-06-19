<template>
  <header class="app-header">
    <Searchbar />
    <DrawerComponent />  
  </header>
</template>

<script lang="ts" setup>
import Searchbar from './Searchbar.vue';
import DrawerComponent from './DrawerComponent.vue';
import { ref } from 'vue';

</script>

<style lang="css" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  gap: 16px;
  margin-bottom: 0.5rem;
}

.app-header-actions {
  display: flex;
  gap: 10px;
}
</style>