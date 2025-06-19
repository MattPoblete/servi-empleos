<template>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" :position="'right'">
            <template #container="{ closeCallback }">
                <div class="drawer flex flex-col h-full">
                    <div class="mt-auto">
                        <hr class=" border-t border-0 border-surface-200 dark:border-surface-700" />
                    
                    </div>
                </div>
            </template>
        </Drawer>
        <div class="menu-button-container">
            <Button icon="pi pi-bars menu-button" @click="visible = !visible.value" style="font-size: 1.5rem" />
        </div>
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
</style>