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

import { onUnmounted } from 'vue'

onUnmounted(() => {
  window.removeEventListener('storage', checkAuth)
})
</script>

<template>
  <AppHeader v-if="
    isLogged && 
    route.name !== 'login' && 
    route.name !== 'register' && 
    route.name !== 'recover' && 
    route.name !== 'about' &&
    route.name !== 'home'"
  />
  <RouterView />
</template>

<style scoped>
body, html {
  background: var(--color-bg, #f9f9f9);
}
</style>
