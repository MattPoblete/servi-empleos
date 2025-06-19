<script setup lang="ts">
import type { Profile } from '@/types';
import Card from '@/components/Card.vue';
const props = defineProps<Profile>();
</script>

<template>
  <Card
    :name="props.name"
    :occupation="props.occupation"
    :email="props.email"
    :rating="props.rating"
  />
</template>