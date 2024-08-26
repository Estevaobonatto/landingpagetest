<script setup>
  import '../styles/ConceptStyle.css';
</script>

<template>
  <div class="">
    <header id="home" class="app-bar">
      <div class="app-bar-title">
        <h1 href="#home">RAZY SOFTWARE</h1>
      </div>
      <div class="app-bar-title">
        <img src="../assets/logo.png" alt="GEPETTO">
      </div>
      <div class="app-bar-actions">
<!-- Substitua o link para a página "Sobre" -->
        <router-link to="/sobre" class="app-bar-action">SOBRE</router-link>

        <router-link to="#contato" class="app-bar-action">CONTATO</router-link>

        <router-link to="/experimente" class="app-bar-action">TESTE</router-link> 
      </div>
    </header>
  </div>
</template>