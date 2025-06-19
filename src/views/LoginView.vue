<template>
  <div class="login-outer">
    <img :src="logo" alt="Logo" class="login-logo" />
    <div class="login-container">
      <form class="login-form" @submit.prevent="onLogin">
        <label class="login-label" for="email">Correo electrónico</label>
        <InputText
          id="email"
          v-model="email"
          type="email"
          placeholder=""
          class="login-input"
          :class="{'p-invalid': emailError}"
          required
        />
        <small v-if="emailError" class="p-error">El correo es obligatorio</small>

        <label class="login-label" for="password">Contraseña</label>
        <InputText
          id="password"
          v-model="password"
          type="password"
          placeholder=""
          class="login-input"
          :class="{'p-invalid': passwordError}"
          required
        />
        <small v-if="passwordError" class="p-error">La contraseña es obligatoria</small>

        <Button type="submit" label="Iniciar sesión" class="login-btn login-btn-primary" />
        <div class="login-actions">
          <Button label="Recuperar contraseña" link class="login-link-btn" @click="onRecover" />
          <Button label="Registro" link class="login-link-btn" @click="onRegister" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import logo from '@/assets/logo.svg'

const router = useRouter()
const email = ref('')
const password = ref('')
const emailError = ref(false)
const passwordError = ref(false)

function onLogin() {
  emailError.value = !email.value
  passwordError.value = !password.value
  if (!emailError.value && !passwordError.value) {
    localStorage.setItem('auth', 'true')
    router.push({ name: 'dashboard' })
  }
}
function onRecover() {}
function onRegister() {}
</script>

<style scoped>
.login-outer {
  min-height: 100vh;
  background: var(--color-bg, #f9f9f9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 48px;
}
.login-logo {
  width: 260px;
  margin-bottom: 32px;

}
.login-logo path {
    color: #226199 !important;
}
.login-container {
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 40px 32px 32px 32px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.login-label {
  font-size: 1.35rem;
  color: #6c7680;
  font-weight: 500;
  margin-bottom: 2px;
  margin-top: 0.5rem;
}
.login-input,
.password-inner-input {
  width: 100%;
  font-size: 1.15rem;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 12px 16px;
  border: 2px solid #e3e7ed;
  background: #f9fafd;
  color: #2a2a2a;
  transition: border-color 0.2s;
}
.login-input:focus,
.password-inner-input:focus {
  border-color: #226199;
  outline: none;
}
.password-input :deep(.p-password-input) {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.login-btn-primary {
  background: #226199;
  color: #fff;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 14px 0;
  margin-top: 10px;
  margin-bottom: 8px;
  border: none;
}
.login-btn-primary:hover {
  background: #17446b;
}
.login-actions {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 8px;
}
.login-link-btn {
  color: #17446b;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: underline;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}
.login-link-btn:hover {
  color: #226199;
  text-decoration: underline;
}
.p-error {
  color: #e24c4b;
  font-size: 0.95em;
  margin-bottom: -8px;
  margin-top: -8px;
  display: block;
}
.p-invalid {
  border-color: #e24c4b !important;
}

.p-password-mask-icon	{
  border: solid 1px red;
}
.p-password-unmask-icon {
  border: solid 1px green;
}
</style>
