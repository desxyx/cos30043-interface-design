<template>
  <header class="topbar">
    <div class="site-logo">
      <img src="/logo.png" alt="SwinTech Logo">
    </div>
    <nav class="navrow">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/travel">Travel Destinations</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>

  <main class="container py-5">
    <router-view />
  </main>

  <footer>
    <div class="footer-top">
      <div class="footer-links">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div class="footer-social">
        <a href="#"><img src="/facebook.svg" alt="Facebook"></a>
        <a href="#"><img src="/github.svg" alt="GitHub"></a>
        <a href="#"><img src="/x.svg" alt="X"></a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>@swintech 2026</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App'
}
</script>
