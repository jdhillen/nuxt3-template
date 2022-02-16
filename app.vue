<!--|== Template =============================================================================== -->
<template>
  <div class="app">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <a href="https://nuxtjs.org" target="_blank">External Link</a>
    </nav>
    <NuxtPage/>
    <footer>Footer Goes Here</footer>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script></script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.app {
  text-align: center;
  margin-top: 50px;
}
</style>