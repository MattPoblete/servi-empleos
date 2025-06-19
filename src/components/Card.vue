<script lang="ts">
import type { Profile } from '@/types';
import type { PropType } from 'vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    name: {
      type: String as PropType<Profile['name']>,
      required: true,
    },
    occupation: {
      type: String as PropType<Profile['occupation']>,
      required: true,
    },
    email: {
      type: String as PropType<Profile['email']>,
      required: true,
    },
    rating: {
      type: Number as PropType<Profile['rating']>,
      required: true,
    },
  },
  setup() {
    const liked = ref(false);
    return { liked };
  }
});
</script>
<template>
  <div class="card-background">
    <div class="card-header">
      <div class="profile-info">
      <img
        src="https://th.bing.com/th/id/R.3182dc6647576b71a2435944769d8e64?rik=chVC2CkODLAQbg&pid=ImgRaw&r=0"
        alt="pfp"
        class="profile-image"
      />
      <h2>{{ name }}</h2>
      </div>
      <div @click="liked = !liked" style="cursor: pointer;">
      <i
        :class="liked ? 'pi pi-bookmark-fill' : 'pi pi-bookmark'"
        :style="{
          marginRight: '0.5rem',
          color: liked ? '#007bff' : '#aaa',
          fontSize: '1.5em',
          transition: 'color 0.2s'
        }"
      ></i>
      </div>
    </div>
    <h3>{{ occupation }}</h3>
    <small>Email: {{ email }}</small>
    <p>
      Rating:
      <span>
      <span v-for="n in 5" :key="n">
        <span v-if="n <= Math.round(rating)">&#9733;</span>
        <span v-else>&#9734;</span>
      </span>
      </span>
      ({{ rating }})
    </p>
    <button>Enviar mensaje</button>
  </div>
</template>

<style lang="css" scoped>
.card-background {
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 16px;
  margin: 16px 0;
  background-color: var(--color-bg);
  color: var(--color-black);
  display: flex;
  flex-direction: column;
}

.card-background h2 {
  font-size: 1.5em;
  margin-bottom: 8px;
}

.card-background p {
  font-size: 1em;
  margin-bottom: 12px;
}

.card-background button {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 32px;
  padding: 8px 12px;
  cursor: pointer;
  transition: var(--transition);
}

.card-background button:hover {
  background-color: var(--color-primary-hover);
}
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-full);
  margin-bottom: 12px;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.profile-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
</style>