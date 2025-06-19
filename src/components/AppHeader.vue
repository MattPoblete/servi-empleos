<template>
  <header class="app-header">
    <div class="menu-button-container">
          <Button icon="pi pi-home menu-button" @click="$router.push('/dashboard')" style="font-size: 1.5rem" />
    </div>
    <Searchbar />
    <DrawerComponent />  
  </header>
</template>

<script lang="ts" setup>
import Searchbar from './Searchbar.vue';
import DrawerComponent from './DrawerComponent.vue';
import { Button } from 'primevue';
import { ref } from 'vue';

</script>

<style lang="css" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  gap: 16px;
  margin-bottom: 0.5rem;
}

.app-header-actions {
  display: flex;
  gap: 10px;
}

.menu-button-container {
    background-color: var(--color-white);
    border-radius: var(--border-radius-full);
    width: var(--header-height);
    height: var(--header-height);
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
}
.p-button {
    color: var(--color-secondary);
    position: relative;
    z-index: 1;
}
</style>