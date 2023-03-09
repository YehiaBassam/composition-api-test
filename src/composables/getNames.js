import { ref } from 'vue';
// import ref from 'vue/ref';

const getNames = () => {
  const name = ref('Yehia');
  const getUser = () => {
    console.log(name.value)
  }

  return {
    getUser,
  }
}

export default getNames;