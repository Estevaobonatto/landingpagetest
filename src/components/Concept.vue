<script setup>
  import './ConceptStyle.css';
</script>

<template>
  <div class="">
    <header class="app-bar">
      <div class="app-bar-title">
        <h1 href="#home">RAZY SOFTWARE</h1>
      </div>
      <div class="app-bar-title">
        <img src="../assets/logo.png" alt="GEPETTO">
      </div>
      <div class="app-bar-actions">
        <a href="#sobre" class="app-bar-action">SOBRE</a>
        <a href="#contato" class="app-bar-action">CONTATO</a>
        <a href="#experimente" class="app-bar-action">TESTE AGORA</a>
      </div>
    </header>
    
    <section class="container-p">
      <h1>GEPETTO</h1>
      <p>O seu software de Gestão</p>
      <button>SAIBA MAIS</button>
    </section>
    
    <section class="img-concept">
      <img src="../assets/FINANCEIRO.png" alt="">
    </section>
    
    <div>
      <h1 class="title-features">Para Todos Os Gostos</h1>
    </div>
    
    <section class="features">
      <div class="feature-card">
        <h2>Gestão Empresarial Completa</h2>
        <p>Com funcionalidades avançadas, nosso software oferece soluções integradas para otimizar processos, melhorar a eficiência e aumentar a produtividade. </p>
        <Button>SAIBA MAIS</Button>
      </div>
      <div class="feature-card">
        <h2>Gestão de Pequenos Negócios</h2>
        <p>Com funcionalidades avançadas, nosso software oferece soluções integradas para otimizar processos, melhorar a eficiência e aumentar a produtividade. </p>
        <Button class="button-card">SAIBA MAIS</Button>
      </div>
      <div class="feature-card">
        <h2>Gestão Para Comércios Locais</h2>
        <p>Com funcionalidades avançadas, nosso software oferece soluções integradas para otimizar processos, melhorar a eficiência e aumentar a produtividade. </p>
        <Button class="button-card">SAIBA MAIS</Button>
      </div>
    </section>
    
    
    <section id="contato" class="contact">
      <h1>Entre em Contato</h1>
      <form>
        <p>E-mail</p>
        <input type="email"/>
        <p>Nome</p>
        <input type="text"/>
        <p>Mensagem</p>
        <textarea></textarea>
        <button type="submit">Enviar Informações</button>
      </form>
    </section>
    
    <footer class="footer-p">
      <img src="../assets/logo.png" alt="">
      <p>Copyright © 2024. Todos os Direitos Reservados.</p>
      <div class="footer-links">
        <a href="#sobre" class="app-bar-action">SOBRE</a>
        <a href="#contato" class="app-bar-action">CONTATO</a>
        <a href="#experimente" class="app-bar-action">TESTE AGORA</a>
      </div>
    </footer>
    
  </div>
</template>