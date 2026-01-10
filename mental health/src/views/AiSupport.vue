<template>
  <div class="ai-support-page">
    <div class="chat-container">
      <div class="chat-header">
        <div class="bot-info">
          <span class="bot-avatar">🤖</span>
          <div>
            <h3>Wellness AI</h3>
            <span class="status">Online | Always here to listen</span>
          </div>
        </div>
      </div>

      <div class="message-window" ref="messageWindow">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
          <div class="message-bubble">
            {{ msg.text }}
          </div>
        </div>
      </div>

      <div class="chat-input-area">
        <input 
          v-model="userMessage" 
          @keyup.enter="sendMessage"
          placeholder="Type how you're feeling..." 
          type="text"
        />
        <button @click="sendMessage" :disabled="!userMessage">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiSupport',
  data() {
    return {
      userMessage: '',
      messages: [
        { role: 'bot', text: 'Hello! I am your Wellness Assistant. How are you feeling today?' }
      ]
    }
  },
  methods: {
    sendMessage() {
      if (!this.userMessage.trim()) return;
      
      // Add user message
      this.messages.push({ role: 'user', text: this.userMessage });
      
      // Clear input
      const savedMessage = this.userMessage;
      this.userMessage = '';

      // Placeholder for AI Response logic
      setTimeout(() => {
        this.messages.push({ 
          role: 'bot', 
          text: `I hear you. It sounds like you're thinking about "${savedMessage}". I'm here to support you.` 
        });
        this.scrollToBottom();
      }, 1000);
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messageWindow;
        container.scrollTop = container.scrollHeight;
      });
    }
  }
}
</script>

<style scoped>
.ai-support-page {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.chat-container {
  width: 100%;
  max-width: 600px;
  background: white;
  height: 70vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  overflow: hidden;
}

.chat-header {
  background: #f0f7f0;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.bot-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bot-avatar {
  font-size: 2rem;
  background: white;
  padding: 8px;
  border-radius: 50%;
}

.chat-header h3 { margin: 0; color: #2d5a27; }
.status { font-size: 0.8rem; color: #666; }

/* Message Window */
.message-window {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fdfdfd;
}

.message { display: flex; width: 100%; }
.message.user { justify-content: flex-end; }
.message.bot { justify-content: flex-start; }

.message-bubble {
  max-width: 80%;
  padding: 12px 18px;
  border-radius: 18px;
  font-size: 0.95rem;
  line-height: 1.4;
}

.bot .message-bubble {
  background: #f1f1f1;
  color: #333;
  border-bottom-left-radius: 4px;
}

.user .message-bubble {
  background: #42b983;
  color: white;
  border-bottom-right-radius: 4px;
}

/* Input Area */
.chat-input-area {
  padding: 20px;
  display: flex;
  gap: 10px;
  border-top: 1px solid #eee;
}

input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
}

button {
  background: #42b983;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
}

button:disabled { background: #ccc; }
</style>