<template>
  <nav id="navbar" class="nav-frame">
    <div class="nav-item" @click="routeToHomePage()">
      Home
    </div>
    <div class="nav-item" @click="routeToAboutPage()">
      About
    </div>
  </nav>
</template>

<script>

import { ref } from 'vue';
import { useRouter } from 'vue-router'

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter();
    const pageName = ref('Home page');

    const routeToHomePage = () => {
      router.push({
        name: 'home'
      });
    }

    const routeToAboutPage = () => {
      router.push({
        name: 'about'
      });
    }

    return {
      pageName,
      routeToHomePage,
      routeToAboutPage
    }
  }
}

</script>

<style lang="css" scoped>
  
.nav-frame {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 7vh;
  background-color: #0a2929;
  color: #fff;
  font-size: 20px;
}

.nav-frame > .nav-item {
  margin-right: 1vw;
  margin-left: 0.5vw;
  cursor: pointer;
}

</style>