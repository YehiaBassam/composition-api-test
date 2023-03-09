<template>
  <div>
    <div v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>  
  </div>
</template>

<script>
import getNames from '../composables/getNames';

export default {
  props:["filteredNames"],
  setup( props ) {
    console.log( props.filteredNames )

    const { getUser } = getNames()
    getUser();
  },
}
</script>
