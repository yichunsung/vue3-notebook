<template>
  <main class="main-container">
    <nav-bar></nav-bar>
    <main class="app-container">
      <router-view></router-view>
    </main>
    
  </main>
  
</template>

<script>

import store from '@/store';
import Navbar from '@/components/layouts/Navbar.vue';

export default {
  name: 'App',
  components: {
    'nav-bar': Navbar
  },
  provide: {
    store
  }
}
</script>

<style>

.main-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.main-container > main.app-container {
  width: 100%;
  margin-top: 7vh;
}

.app-logo {
  width: 30vw;
  height: 30vw;
}

</style>
