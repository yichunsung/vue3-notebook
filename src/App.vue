<template>
  <main class="main-container">
    <div class="app-container">
      <img class="app-logo" alt="Elk Tree logo" src="./assets/elkTree.png">
    </div>
    <HelloWorld msg="Welcome to Elk Tree Vue 3"/>
    <Bracker bracker="Welcome Bracker Vue 3" />
  </main>
  
</template>

<script>

import store from '@/store';

import HelloWorld from './components/HelloWorld.vue';
import Bracker from '@/components/Bracker.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Bracker
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

.main-container > div.app-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-logo {
  width: 30vw;
  height: 30vw;
}

</style>
