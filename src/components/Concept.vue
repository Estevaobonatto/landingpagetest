<script setup>
</script>

<template>
  <div class="concept">
    <header class="app-bar">
      <div class="app-bar-title">
        <img src="" alt="GEPETTO">
      </div>
      <div class="app-bar-actions">
        <a href="#" class="app-bar-action">Sobre</a>
        <a href="#" class="app-bar-action">Contato</a>
        <a href="#" class="app-bar-action">Login</a>
      </div>
    </header>
    
    <section>
      <h1>GEPETTO</h1>
      <p>O seu software de Gestão</p>
      <button>SAIBA MAIS</button>
    </section>
    
    <section class="features">
      <div class="feature-card">Gestão Empresarial Completa</div>
      <div class="feature-card">Gestão de Pequenos Negócios</div>
      <div class="feature-card">Gestão Para Comércios Locais</div>
    </section>
    <footer>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Nome" />
        <textarea placeholder="Mais Comentários"></textarea>
        <button type="submit">Enviar Informações</button>
      </form>
    </footer>
  </div>
</template>

<style scoped>

  /*
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  */

.concept {
  background-color: #191919;
  color: #fff;
  text-align: center;
  padding: 20px;
}

header h1 {
  color: #7f5af0;
}

button {
  background-color: #7f5af0;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.dashboard {
  display: flex;
  margin-top: 20px;
}

.menu {
  flex: 1;
  background-color: #191919;
  padding: 10px;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin: 10px 0;
  color: #7f5af0;
}

.content {
  flex: 3;
  padding: 10px;
}

.financial-summary div {
  margin: 10px 0;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.feature-card {
  background-color: #7f5af0;
  padding: 20px;
  border-radius: 5px;
  width: 30%;
  gap: 10px;
}

footer {
  margin-top: 20px;
}

form input, form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

form button {
  background-color: #7f5af0;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
