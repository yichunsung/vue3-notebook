// import { reactive, readonly } from 'vue';
import { reactive, readonly } from 'vue';

const state = reactive({
  location: {
    longitude: 126,
    latitude: 60
  },
  marker: 'Elk Tree Station'
});

const mutations = {
  setLocation(location) {
    state.location = location;
  }
}

export default {
  state: readonly(state),
  mutations
};