<template>
  <div class="searchbar">
    <input
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Buscar..."
      class="search-input"
    />
    <button @click="onSearch" class="search-button">
      <i class="pi pi-search" style="font-size: large;"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['search'])
const query = ref('')

function onInput() {
  // Si quieres búsqueda en tiempo real, puedes emitir aquí
  // emit('search', query.value)
}

function onSearch() {
  emit('search', query.value)
}
</script>

<style scoped>
.searchbar {
  display: flex;
  align-items: center;
  gap: 0px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  width: 85%;
  height: 2.5rem;
  border: none;
}

.search-input {
  flex: 1;
  padding: 6px 12px;
  border: none;
  border-radius: 16px 0px 0px 16px;
  height: 100%;
  color: #333;
}
.search-input:focus {
  outline: none;
}
.search-button {
  padding: 6px 12px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 0px 16px 16px 0px;
  cursor: pointer;
  height: 100%;
}

.search-button:hover {
  background-color: #f3f3f3;
}
</style>