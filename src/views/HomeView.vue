<script setup lang="ts">
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="landing-root">
    <section class="hero">
      <div class="hero-content">
        <h1>Encuentra o ofrece servicios en segundos, desde tu celular</h1>
        <p class="hero-subtitle">
          ServiEmpleos conecta a clientes y profesionales para resolver cualquier necesidad a domicilio, fácil y rápido.
        </p>
        <div class="hero-buttons">
          <Button label="Ir a la app" @click="router.push('/dashboard')" class="download-btn appstore" />
        </div>
      </div>
      <div class="hero-mockup">
        <img src="https://placehold.co/260x500?text=App+Mockup" alt="App Mockup" />
      </div>
    </section>

    <section class="how-it-works">
      <h2>¿Cómo funciona?</h2>
      <div class="steps">
        <div class="step">
          <i class="pi pi-search step-icon"></i>
          <h3>1. Busca</h3>
          <p>Encuentra el servicio o profesional que necesitas en tu zona.</p>
        </div>
        <div class="step">
          <i class="pi pi-users step-icon"></i>
          <h3>2. Elige</h3>
          <p>Compara perfiles, calificaciones y precios antes de decidir.</p>
        </div>
        <div class="step">
          <i class="pi pi-comments step-icon"></i>
          <h3>3. Contacta</h3>
          <p>Habla directamente con el profesional o cliente desde la app.</p>
        </div>
        <div class="step">
          <i class="pi pi-check-circle step-icon"></i>
          <h3>4. ¡Listo!</h3>
          <p>Recibe o brinda el servicio y califica la experiencia.</p>
        </div>
      </div>
    </section>

    <section class="benefits">
      <div class="benefits-columns">
        <div class="benefits-group">
          <h2>Para Clientes</h2>
          <ul>
            <li><i class="pi pi-map-marker benefit-icon"></i> Encuentra servicios cerca de ti</li>
            <li><i class="pi pi-clock benefit-icon"></i> Respuesta rápida y disponibilidad inmediata</li>
            <li><i class="pi pi-star benefit-icon"></i> Profesionales calificados y verificados</li>
            <li><i class="pi pi-shield benefit-icon"></i> Seguridad y confianza en cada contacto</li>
          </ul>
        </div>
        <div class="benefits-group">
          <h2>Para Proveedores</h2>
          <ul>
            <li><i class="pi pi-briefcase benefit-icon"></i> Consigue más clientes en tu zona</li>
            <li><i class="pi pi-chart-line benefit-icon"></i> Haz crecer tu reputación y tus ingresos</li>
            <li><i class="pi pi-mobile benefit-icon"></i> Gestiona todo desde tu celular</li>
            <li><i class="pi pi-bolt benefit-icon"></i> Sin comisiones ocultas, tu ganancia es tuya</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2>Reseñas:</h2>
      <div class="testimonials-list">
        <div class="testimonial">
          <Avatar icon="pi pi-user" shape="circle" class="testimonial-avatar" />
          <blockquote>
            “Encontré un plomero en minutos y el trabajo fue excelente. ¡Muy recomendable!”
          </blockquote>
          <span class="testimonial-name">María G.</span>
        </div>
        <div class="testimonial">
          <Avatar icon="pi pi-user" shape="circle" class="testimonial-avatar" />
          <blockquote>
            “Gracias a ServiEmpleos ahora tengo clientes nuevos cada semana.”
          </blockquote>
          <span class="testimonial-name">Carlos P.</span>
        </div>
        <div class="testimonial">
          <Avatar icon="pi pi-user" shape="circle" class="testimonial-avatar" />
          <blockquote>
            “La app es fácil de usar y me siento seguro contratando servicios.”
          </blockquote>
          <span class="testimonial-name">Ana L.</span>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <span class="footer-logo-text">ServiEmpleos</span>
        </div>
        <div class="footer-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Contacto</a>
        </div>
        <div class="footer-social">
          <i class="pi pi-facebook"></i>
          <i class="pi pi-instagram"></i>
          <i class="pi pi-twitter"></i>
        </div>
      </div>
      <div class="footer-copy">
        © 2025 ServiEmpleos. Todos los derechos reservados.
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* General */
.landing-root {
  font-family: 'Poppins', 'Lato', Arial, sans-serif;
  background: var(--color-bg, #f9f9f9);
  color: var(--color-text, #222);
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
/* Hero Section */
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  background: var(--color-white, #fff);
  border-radius: 0 0 32px 32px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  margin-bottom: 32px;
}
.hero-content h1 {
  font-size: 2.4rem;
  color: var(--color-primary, #007BFF);
  font-weight: 700;
  margin-bottom: 16px;
}
.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-secondary, #555);
  margin-bottom: 28px;
}
.download-btn {
  font-size: 1.1rem;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}
.appstore {
  background: var(--color-primary, #007BFF);
  color: var(--color-white, #fff);
  border: none;
}
.appstore:hover {
  background: var(--color-primary-hover, #005bb5);
}
.playstore {
  background: var(--color-accent, #FFA500);
  color: var(--color-white, #fff);
  border: none;
}
.playstore:hover {
  background: #cc8400;
}
.hero-mockup img {
  border-radius: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  width: 100%;
  max-width: 260px;
}
/* How it works */
.how-it-works {
  padding: 32px 0 24px 0;
  background: var(--color-bg, #f9f9f9);
  text-align: center;
}
.how-it-works h2 {
  font-size: 2rem;
  color: var(--color-primary, #007BFF);
  margin-bottom: 32px;
  font-weight: 700;
}
.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
}
.step {
  background: var(--color-white, #fff);
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 24px 18px;
  width: 210px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.step-icon {
  font-size: 2.2rem;
  color: var(--color-accent, #FFA500);
  margin-bottom: 10px;
}
.step h3 {
  font-size: 1.2rem;
  color: var(--color-primary, #007BFF);
  margin-bottom: 6px;
  font-weight: 600;
}
.step p {
  color: var(--color-text, #444);
  font-size: 1rem;
}
/* Beneficios */
.benefits {
  background: var(--color-white, #fff);
  padding: 40px 0 32px 0;
}
.benefits-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}
.benefits-group {
  background: var(--color-bg, #f9f9f9);
  border-radius: 18px;
  padding: 28px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.benefits-group h2 {
  color: var(--color-accent, #FFA500);
  font-size: 1.3rem;
  margin-bottom: 18px;
  font-weight: 700;
}
.benefits-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.benefits-group li {
  color: var(--color-text, #333);
  display: flex;
  align-items: center;
  font-size: 1.08rem;
  margin-bottom: 14px;
}
.benefit-icon {
  color: var(--color-primary, #007BFF);
  font-size: 1.3rem;
  margin-right: 10px;
}
/* Testimonios */
.testimonials {
  background: var(--color-bg, #f9f9f9);
  padding: 40px 0 32px 0;
  text-align: center;
}
.testimonials h2 {
  color: var(--color-primary, #007BFF);
  font-size: 2rem;
  margin-bottom: 32px;
  font-weight: 700;
}
.testimonials-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.testimonial {
  background: var(--color-white, #fff);
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 24px 18px;
  width: 260px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonial-avatar {
  margin-bottom: 10px;
  background: var(--color-primary, #007BFF);
  color: var(--color-white, #fff);
}
.testimonial blockquote {
  font-size: 1.05rem;
  color: var(--color-text, #444);
  margin: 0 0 10px 0;
  font-style: italic;
}
.testimonial-name {
  color: var(--color-primary, #007BFF);
  font-weight: 600;
  font-size: 1rem;
}
/* CTA Final */
.cta-final {
  background: var(--color-white, #fff);
  padding: 40px 0 32px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  border-radius: 32px 32px 0 0;
  margin-top: 32px;
}
.cta-content {
  flex: 1 1 320px;
  min-width: 260px;
  text-align: left;
  padding-left: 32px;
}
.cta-content h2 {
  color: var(--color-primary, #007BFF);
  font-size: 2rem;
  margin-bottom: 18px;
  font-weight: 700;
}
.cta-mockup {
  flex: 1 1 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 16px;
}
.cta-mockup img {
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  width: 100%;
  max-width: 180px;
}
/* Footer */
.footer {
  background: var(--color-bg, #f9f9f9);
  padding: 32px 0 12px 0;
  border-top: 1px solid var(--color-border, #e3e7ed);
  margin-top: 32px;
}
.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto 8px auto;
  gap: 24px;
}
.footer-logo-text {
  font-size: 1.5rem;
  color: var(--color-primary, #007BFF);
  font-weight: 700;
  letter-spacing: 1px;
}
.footer-links {
  display: flex;
  gap: 24px;
}
.footer-links a {
  color: var(--color-primary, #007BFF);
  text-decoration: none;
  font-size: 1rem;
}
.footer-links a:hover {
  text-decoration: underline;
}
.footer-social {
  color: var(--color-accent, #FFA500);
}
.footer-copy {
  text-align: center;
  color: #888;
  font-size: 0.95rem;
  margin-top: 8px;
}
@media (max-width: 900px) {
  .hero, .cta-final, .benefits-columns, .testimonials-list {
    flex-direction: column;
    align-items: center;
  }
  .hero-content, .hero-mockup, .cta-content, .cta-mockup {
    padding: 0;
    max-width: 100%;
  }
}
</style>
