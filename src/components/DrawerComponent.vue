<template>
        <Drawer v-model:visible="visible" :position="'right'">
            <template #container="{ closeCallback }">
                <div class="drawer ">
                    <ul class="links-list">
                        <li>
                            <div class="menu-item" @click="closeCallback">
                                <i class="pi pi-user" style="margin-right: 0.5rem;"></i>
                                Perfil
                            </div>
                        </li>
                        <li>
                            <div class="menu-item" @click="closeCallback">
                                <i class="pi pi-bookmark" style="margin-right: 0.5rem;"></i>
                                Guardados
                            </div>
                        </li>
                        <li>
                            <div class="menu-item" @click="closeCallback">
                                <i class="pi pi-briefcase" style="margin-right: 0.5rem;"></i>
                                Mis servicios
                            </div>
                        </li>
                    </ul>
                </div>
            </template>
        </Drawer>
        <div class="menu-button-container">
            <Button icon="pi pi-bars menu-button" @click="visible = !visible.value" style="font-size: 1.5rem" />
        </div>
</template>

<script setup>
import { ref } from "vue";
import { Drawer, Button } from "primevue";

const visible = ref(false);
</script>

<style scoped>
.p-button {
    color: #464646;
    position: relative;
    z-index: 1;
}

.menu-button-container {
    background-color: #fff;
    border-radius: 25%;
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: var(--box-shadow);
    display: flex;
    justify-content: center;
}

.drawer {
    background-color: rgb(255, 255, 255);
    box-shadow: var(--box-shadow);
    color: var(--color-text);
    position: relative;
    height: 100dvh;
}

.links-list {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    color: black;
}

.menu-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.menu-item:hover {
    background-color: #f0f0f0;
}
</style>