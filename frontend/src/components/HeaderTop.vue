<script setup>
  import './ConceptStyle.css';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="">
    <header id="home" class="app-bar">
      <div class="app-bar-title">
        <router-link to="/">RAZY SOFTWARE</router-link>
      </div>
      <div class="app-bar-title">
        <img src="../assets/logo.png" alt="GEPETTO">
      </div>
      <div class="app-bar-actions">
        <router-link to="/sobre" class="app-bar-action">SOBRE</router-link>

        <router-link to="#contato" class="app-bar-action">CONTATO</router-link>

        <router-link to="/experimente" class="app-bar-action">TESTE</router-link> 
      </div>
    </header>
  </div>
</template>