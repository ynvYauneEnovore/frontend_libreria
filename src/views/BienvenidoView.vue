<template>
  <div class="welcome">
    <div class="welcome-content">
      <h1 class="welcome-title">¡Bienvenido a LibreríaSasi!</h1>
      <p class="welcome-description">Explora nuestro amplio catálogo de libros y encuentra tus lecturas favoritas.</p>
      <router-link to="/catalog" class="welcome-button">Ver Catálogo</router-link>
    </div>
  </div>
</template>

<style>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.welcome-content {
  text-align: center;
}

.welcome-title {
  font-size: 2.5rem;
  color: #333333;
}

.welcome-description {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #555555;
}

.welcome-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: #ee5007;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.welcome-button:hover {
  background-color: #dd4400;
}
</style>
