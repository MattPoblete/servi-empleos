<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'

const route = useRoute()
const isLogged = ref(false)

function checkAuth() {
  isLogged.value = !!localStorage.getItem('auth')
}

onMounted(checkAuth)
window.addEventListener('storage', checkAuth)
</script>

<template>
  <AppHeader v-if="isLogged || route.name === 'login' ? false : true" />
  <RouterView />
</template>

<style scoped>
body, html {
  background: var(--color-bg, #f9f9f9);
}
</style>
