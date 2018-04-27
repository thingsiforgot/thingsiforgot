<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link tag="li" to="/blog" class="nav-link"><a>All posts</a></nuxt-link>
        <nuxt-link tag="li" to="/about" class="nav-link"><a>About</a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: #022d30;
    height: 4.5rem;
  }

  .main-nav {
    height: 100%;
  }

  .nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
  }

  .nav-link.nuxt-link-exact-active {
    border-bottom: 3px solid #38b6c2;
  }

  .nav-link a {
    display: block;
    text-decoration: none;
    color: white;
  }

  .nav-link.nuxt-link-active a,
  .nav-link a:hover,
  .nav-link a:active {
    color: #38b6c2;
  }

</style>
