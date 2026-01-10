<template>
  <div id="app">
    <Navbar />

    <main class="content-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* 1. Global Reset & Typography */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f8faf8; /* Light, calming background */
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 2. Layout Wrapper */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: calc(100vh - 70px); /* Adjusts for Navbar height */
}

/* 3. Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 4. Global Component Styles (Cards, Buttons) */
h1, h2, h3 {
  color: #2d5a27;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: background 0.3s;
}
</style>