<template>
  <main id="home">
    <h1>
      {{ pageName }}
    </h1>
    <HelloWorld msg="Welcome to Elk Tree Vue 3"/>
    <Bracker bracker="Welcome Bracker Vue 3" />
  </main>
</template>

<script>

import { ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Bracker from '@/components/Bracker.vue';


export default {
  name: 'Index',
  components: {
    HelloWorld,
    Bracker
  },
  setup() {
    const pageName = ref('Home page');

    return {
      pageName
    }
  }
}

</script>

<style lang="css" scoped></style>