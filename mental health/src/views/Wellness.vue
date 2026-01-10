<template>
  <div class="wellness-page">
    <header class="wellness-header">
      <h1>Daily Wellness Tips</h1>
      <p>Small habits lead to big changes. Try to focus on one today.</p>
    </header>

    <div class="tips-grid">
      <div v-for="(tip, index) in tips" :key="index" class="tip-card">
        <div class="tip-icon">{{ tip.icon }}</div>
        <h3>{{ tip.title }}</h3>
        <p>{{ tip.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wellness',
  data() {
    return {
      tips: [
        { 
          title: 'Stay Hydrated', 
          description: 'Drink at least 8 glasses of water daily to keep your mind and body sharp.',
          icon: '💧'
        },
        { 
          title: 'Quality Sleep', 
          description: 'Aim for 7-9 hours of restful sleep to allow your brain to recharge.',
          icon: '😴'
        },
        { 
          title: 'Practice Gratitude', 
          description: 'Write down three things you are thankful for today to boost your mood.',
          icon: '📝'
        },
        { 
          title: 'Mindful Movement', 
          description: 'A simple 10-minute walk can significantly reduce stress levels.',
          icon: '🚶'
        }
      ]
    }
  }
}
</script>

<style scoped>
.wellness-page {
  padding: 20px;
}

.wellness-header {
  text-align: center;
  margin-bottom: 3rem;
}

.wellness-header h1 {
  font-size: 2.5rem;
  color: #2d5a27;
  margin-bottom: 10px;
}

/* Grid Layout */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 10px;
}

/* Individual Cards */
.tip-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  border: 1px solid #f0f0f0;
}

.tip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #42b983;
}

.tip-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tip-card h3 {
  margin: 10px 0;
  color: #333;
}

.tip-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .wellness-header h1 {
    font-size: 1.8rem;
  }
}
</style>