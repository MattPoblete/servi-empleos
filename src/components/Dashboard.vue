<template class="dashboard">
  <h2 class="dashboard-title">Servicios cercanos</h2>
  <div class="profiles-list">
    <UserCard v-for="profile in profilesStore.profiles" :key="profile.id" v-bind="profile" />
  </div>
</template>

<script setup lang="ts">
import { useProfilesStore } from '@/stores/store'
import UserCard from './UserCard.vue'
import AppHeader from './AppHeader.vue'
const profilesStore = useProfilesStore()
</script>

<style lang="css" scoped>
  .dashboard {
    padding: 20px;
    background-color: var(--color-bg-alt);
    color: var(--color-text);
    display: inline-block;
  }
  .profiles-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .dashboard-title {
    text-align: center;
    margin-bottom: .5rem;
    font-size: 24px;
    color: var(--color-secondary);
  }
</style>