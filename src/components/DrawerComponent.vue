<template>
        <Drawer v-model:visible="visible" :position="'right'">
            <template #container="{ closeCallback }">
                <div class="drawer">
                    <ul class="links-list">
                        <li>
                            <RouterLink to="perfil" class="menu-item" @click="closeCallback">
                                <i class="pi pi-user" style="margin-right: 0.5rem;"></i>
                                Perfil
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="guardados" class="menu-item" @click="closeCallback">
                                <i class="pi pi-bookmark" style="margin-right: 0.5rem;"></i>
                                Guardados
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="mis-servicios" class="menu-item" @click="closeCallback">
                                <i class="pi pi-briefcase" style="margin-right: 0.5rem;"></i>
                                Mis servicios
                            </RouterLink>
                        </li>
                    </ul>
                    <div class="logout-btn-container">
                        <Button label="Cerrar sesión" icon="pi pi-sign-out" class="logout-btn" @click="onLogout(closeCallback)" />
                    </div>
                </div>
            </template>
        </Drawer>
        <div class="menu-button-container">
            <Button icon="pi pi-bars menu-button" @click="visible = !visible" style="font-size: 1.5rem" />
        </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Drawer, Button } from "primevue";
import { RouterLink, useRouter } from "vue-router";

const visible = ref(false);
const router = useRouter();

function onLogout(closeCallback: () => void) {
  localStorage.removeItem('auth');
  closeCallback();
  router.push({ name: 'login' });
}
</script>

<style scoped>
.p-button {
    color: var(--color-secondary);
    position: relative;
    z-index: 1;
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

.drawer {
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    color: var(--color-text);
    position: relative;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-items: space-between;
}

.links-list {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    color: var(--color-black);
}

.menu-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius-sm);
    transition: var(--transition);
    text-decoration: none;
    color: inherit;
}

.menu-item:hover {
    background-color: var(--color-bg-alt);
}
ul li {
    list-style: none;
}
.logout-btn-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.logout-btn {
  width: 100%;
  gap: 1rem;
}
</style>