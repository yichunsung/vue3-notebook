<template>
  <div class="hello">
    <h1>{{ counter }}</h1>
    <br />
    <div>
      {{ data.helloMsg }}
    </div>
    <h2>{{ book.title }}</h2>
    <button @click="open()">Open</button>
    <div v-for="(item, idx) in data.list" :key="idx">
      <h3>{{ item.title }}</h3>
      <p>{{ item.value }}</p>
    </div>
  </div>
</template>

<script>

// import { reactive, computed } from 'vue';
import { ref, reactive, inject } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { state } = inject('store');
    console.log(props);
    // let count = 0;
    // const returnCount = count + 1;
    const counter = ref(1);
    const data = ref({
      helloMsg: 'How are you?',
      list: [
        {
          title: "Hi",
          value: 1
        },
        {
          title: "Cool",
          value: 132
        },
        {
          title: "Wolrd",
          value: 442
        }
      ]
    });

    const book = reactive({
      title: "Vue 3 Testing"
    });

    console.log(data);

    

    const open = () => {
      console.log('Event Gogogo', 2020);
      counter.value = counter.value + 1;
      data.value.helloMsg = 'Cow to you';
      console.log(state.location);
    };

    return {
      counter,
      data,
      book,
      open,
      state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
