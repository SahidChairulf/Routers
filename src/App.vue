<template>

  <NavbarComponent :idMenu="idMenu" :key="idMenu"/>
  <router-view @id-menu="setMenu($event)"/>

</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import { ref } from 'vue';

export default {
  name: 'App',
  components : {
    NavbarComponent
  },
  setup()
  {
    const idMenu = ref(1);

    function setMenu(id)
    {
      idMenu.value = id;
    }

    return{
      setMenu,
      idMenu,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>