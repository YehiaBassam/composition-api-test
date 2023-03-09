<template>
  <div id="app">
    <h1 ref="customH1" style="margin:auto;margin-bottom: 20px;">test</h1>
    <h2 style="margin:auto;margin-bottom: 20px;">Welcome {{ name }}, your age is {{ age }}</h2>
    <button @click="clickMe">Click !!</button>
    <button @click="age++" style="margin: 10px;">increase age</button>

    <input v-model="search" placeholder="search..."/>

    <NamesList :filteredNames="filteredNames"/>
  </div>
</template>

<script>
import NamesList from './components/NamesList.vue';
import { ref, computed, watch, watchEffect, onMounted, onUnmounted, onUpdated } from 'vue';

export default {
  name: 'App',
  components:{ NamesList },

  setup(){
    // name + age
    const name = ref('yehia');
    const age = ref(30);
    let customH1 = ref('first');
    
    const clickMe = () => {
      customH1.value.innerHTML = 'second';
      name.value = 'Ali';
    }

    // search + Computed + watch
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);
    const search = ref('');

    const filteredNames = computed(() => {
      return names.value.filter( name => name.includes(search.value) );
    })

    watch(search, ()=> { 
      console.log('watch', search.value);
    })
    
    watchEffect(() => { // watch any variables inside
      console.log('watchEffect', search.value);
    })

    // onMounted + onUnMounted + onUpdateed
    onMounted(() => { console.log('onMounted') })
    onUnmounted(() => { console.log('onUnmounted') })
    onUpdated(() => { console.log('onUpdated') })

    return { 
      name,
      names,
      filteredNames,
      search,
      age,
      clickMe,
      customH1,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
