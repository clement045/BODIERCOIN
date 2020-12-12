<template>
  <div id="app">

    <div id="nav">
      <Navigation />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation
  },
  data() {
    return {
      
    }
  }
}
</script>



<style>
@import url("https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900");

#app {
  font-family: "Muli", "sans-serif";
}
</style>
