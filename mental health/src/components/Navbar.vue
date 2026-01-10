<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">🌿</span>
        <span class="logo-text">WellnessApp</span>
      </div>
      
      <div class="links">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/breathing" class="nav-item">Breathing</router-link>
        <router-link to="/wellness" class="nav-item">Wellness</router-link>
        <router-link to="/ai-support" class="nav-item">AI Support</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Main Background - Soft and Clean */
.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Centering the content */
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

/* Logo Design */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d5a27; /* Deep Nature Green */
  cursor: pointer;
}

/* Navigation Links */
.links {
  display: flex;
  gap: 20px;
}

.nav-item {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Hover Effect */
.nav-item:hover {
  background-color: #f0f7f0;
  color: #42b983;
}

/* Active Page Highlight */
.router-link-active {
  color: #42b983;
  background-color: #f0f7f0;
}

/* Responsive: Stack on small screens */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 15px;
  }
}
</style>