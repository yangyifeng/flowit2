<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #f8f8f8;
}

* {
  box-sizing: border-box;
}
</style>
