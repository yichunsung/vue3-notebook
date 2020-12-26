<template>
  <main id="bracker">
    <h1 class="bracker-heading">
      {{ computedBracker }}
    </h1>
    <button @click="goBracker()">Go</button>
  </main>
</template>

<script>

import { reactive, computed, inject } from 'vue';
import store from '@/store';

/**
 *  1. import { inject } from 'vue';
 *  
 *  const { mutations } = inject('store');
 *
 *  mutations.location(data);
 *
 *  2. import store from '@/store/index.js';
 *
 *  const { setLocation } = store.mutations
 *
 *  setLocation(data);
 *    
 */

export default {
  name: 'Bracker',
  props: {
    bracker: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    console.log(props.bracker);

    const { mutations } = inject('store'); // const { mutations } = store;
    const { setLocation } = store.mutations;
    const location = reactive({
      longitude: 126,
      latitude: 24
    });

    const goBracker = () => {
      // console.log('bracker', props.bracker);
      location.longitude = 133;
      // console.log(location);
      console.log(store);
      console.log(mutations);
      setLocation(location);
      // mutations.setLocation(location);
    };

    const computedBracker = computed(() => {
      return `${ props.bracker } Hello World`;
    });

    

    return {
      goBracker,
      computedBracker
    }
  }
}

</script>

<style lang="css" scoped>
  
.bracker-heading {
  color: blue;
}

</style>