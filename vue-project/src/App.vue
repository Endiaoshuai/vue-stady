<template>
  <div id="app">
    <ul>
      <!-- <li><a href="/">Home</a></li>
      <li><a href="/helloworld">HelloWorld</a></li> -->
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link to='/helloworld'>HelloWorld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  methods: {
    updateTitle: function(_title) {
      this.love = _title;
    }
  },
}
</script>

<style scoped>
  
</style>
