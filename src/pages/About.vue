<template>
  <main id="About">
    <h1>
      {{ pageName }}
    </h1>
    <br />
    <br />
    <button @click="getLocation">Get Location</button>
    <p>1. {{ lat }}</p>
    <p>2. {{ lng }}</p>
  </main>
</template>

<script>

import { ref, inject } from 'vue';

export default {
  name: 'About',
  setup() {

    const { state } = inject('store');
    const pageName = ref('About this page...');
    const lat = state.location.latitude;
    const lng = state.location.longitude;

    const getLocation = () => {
      console.log(state.location);
    }

    return {
      pageName,
      lat,
      lng,
      getLocation
    }
  }
}

</script>

<style lang="css" scoped></style>