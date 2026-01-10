<template>
  <div class="breathing-page">
    <div class="content-card">
      <h1>Breathing Exercises</h1>
      <p class="subtitle">Follow the circle to calm your mind.</p>

      <div class="timer-container">
        <div class="breathing-circle" :class="{ 'animating': isRunning }"></div>
        
        <p class="status-text">{{ statusText }}</p>
      </div>

      <button @click="toggleBreathing" class="control-btn">
        {{ isRunning ? 'Stop' : 'Start Exercise' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breathing',
  data() {
    return {
      isRunning: false,
      statusText: 'Ready?'
    }
  },
  methods: {
    toggleBreathing() {
      this.isRunning = !this.isRunning;
      if (this.isRunning) {
        this.updateText();
      } else {
        this.statusText = 'Ready?';
      }
    },
    updateText() {
      if (!this.isRunning) return;
      this.statusText = "Inhale...";
      setTimeout(() => {
        if (this.isRunning) this.statusText = "Exhale...";
      }, 4000); // Matches half of the 8s animation cycle
      
      setTimeout(() => {
        if (this.isRunning) this.updateText();
      }, 8000);
    }
  }
}
</script>

<style scoped>
.breathing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.content-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
}

/* The Circle Logic */
.breathing-circle {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #b2dfdb, #4db6ac);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(77, 182, 172, 0.3);
  transition: transform 4s ease-in-out;
}

/* Animation Keyframes */
.animating {
  animation: breathe 8s infinite ease-in-out;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.8); opacity: 1; }
}

.status-text {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #2d5a27;
}

.control-btn {
  background-color: #42b983;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background-color: #369a6d;
  transform: translateY(-2px);
}
</style>