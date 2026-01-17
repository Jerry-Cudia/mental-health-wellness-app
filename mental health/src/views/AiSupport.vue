<script setup>
import { ref, nextTick } from 'vue'
import { getAiMessage } from '../services/aiSupport'

const mood = ref("")
const aiMessage = ref("")
const loading = ref(false)

const askAI = async () => {
  if (!mood.value.trim() || loading.value) return;
  
  loading.value = true;
  aiMessage.value = "";
  
  try {
    const result = await getAiMessage(mood.value);
    aiMessage.value = result;
    mood.value = ""; 
  } catch (err) {
    aiMessage.value = "Connection paused. Please try again.";
  } finally {
    loading.value = false;
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    askAI();
  }
}
</script>

<template>
  <div class="minimal-wrapper">
    <div class="content-box">
      <header class="header">
        <h1 class="title">Reflect</h1>
        <div class="status-dot" :class="{ 'is-loading': loading }"></div>
      </header>

      <main class="response-section">
        <transition name="fade-slide" mode="out-in">
          <div v-if="loading" class="loading-state">
            <span class="pulse-text">Listening</span>
          </div>
          <div v-else-if="aiMessage" class="message-text">
            {{ aiMessage }}
          </div>
          <div v-else class="placeholder-text">
            How is your mind today?
          </div>
        </transition>
      </main>

      <footer class="input-section">
        <div class="input-container">
          <textarea
            v-model="mood"
            @keydown="handleKeydown"
            class="minimal-input"
            placeholder="Type your thought..."
            :disabled="loading"
            rows="1"
          ></textarea>
          
          <button 
            @click="askAI"
            :disabled="loading || !mood.trim()"
            class="send-trigger"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

.minimal-wrapper {
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #ffffff;
  color: #1a1a1a;
}

.content-box {
  width: 100%;
  max-width: 500px;
  padding: 2rem;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #a1a1a1;
}

.status-dot {
  width: 6px;
  height: 6px;
  background-color: #e5e5e5;
  border-radius: 50%;
  transition: background-color 0.5s ease;
}

.status-dot.is-loading {
  background-color: #1a1a1a;
  animation: blink 1s infinite;
}

.response-section {
  min-height: 200px;
  margin-bottom: 3rem;
}

.message-text {
  font-size: 1.25rem;
  line-height: 1.6;
  font-weight: 400;
  color: #1a1a1a;
  white-space: pre-wrap;
}

.placeholder-text {
  font-size: 1.25rem;
  color: #d4d4d4;
  font-weight: 300;
}

.pulse-text {
  font-size: 0.875rem;
  color: #a1a1a1;
  letter-spacing: 0.05em;
}

.input-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 0.5rem;
  transition: border-color 0.3s ease;
}

.input-container:focus-within {
  border-color: #1a1a1a;
}

.minimal-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0.5rem 0;
  font-size: 1rem;
  background: transparent;
  color: #1a1a1a;
  resize: none;
}

.send-trigger {
  background: none;
  border: none;
  color: #1a1a1a;
  cursor: pointer;
  padding: 0.5rem;
  opacity: 0.3;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.send-trigger:not(:disabled) {
  opacity: 1;
}

.send-trigger:hover:not(:disabled) {
  transform: translateX(3px);
}

.send-trigger svg {
  width: 20px;
  height: 20px;
}

/* Animations */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from { opacity: 0; transform: translateY(10px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>