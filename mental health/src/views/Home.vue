<template>
  <div class="home-page">
    <section class="hero">
      <h1>Find Your Inner Calm</h1>
      <p>Your journey to mindfulness and mental clarity starts here.</p>
      <router-link to="/breathing" class="cta-button">Start Breathing Exercise</router-link>
    </section>

    <div class="features-grid">
      <div class="feature-card" @click="$router.push('/breathing')">
        <div class="icon-circle">🫁</div>
        <h3>Breathing</h3>
        <p>Regulate your nervous system with guided exercises.</p>
      </div>

      <div class="feature-card" @click="$router.push('/wellness')">
        <div class="icon-circle">☀️</div>
        <h3>Wellness</h3>
        <p>Daily habits and tips for a healthier lifestyle.</p>
      </div>

      <div class="feature-card" @click="$router.push('/ai-support')">
        <div class="icon-circle">🤖</div>
        <h3>AI Support</h3>
        <p>Chat with our assistant whenever you need to talk.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-page {
  animation: fadeIn 0.8s ease-out;
}

/* Hero Style */
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f0f7f0 0%, #ffffff 100%);
  border-radius: 30px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 3rem;
  color: #2d5a27;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 30px;
}

.cta-button {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.05);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: #42b983;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.icon-circle {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: inline-block;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #333;
}

.feature-card p {
  color: #777;
  font-size: 0.9rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .hero h1 { font-size: 2rem; }
}
</style>