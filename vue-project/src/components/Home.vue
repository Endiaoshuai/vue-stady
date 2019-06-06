<template>
  <div id="home">
      <app-header  v-on:titleChanged="updateTitle($event)" v-bind:love="love"></app-header>
      <h1>{{title}}</h1> 
      <users v-bind:users="users"></users>
      <users v-bind:users="users"></users>
      <app-footer v-bind:love="love"></app-footer>
  </div>
</template>

<script>
import Users from './Users'
import Header from './Header'
import Footer from './Footer'


export default {
  name: 'home',
  data() {
    return {
      title: "这是我的第一个Vue脚手架",
      users: [
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
        // { name: 'Tom', age: 25, show: false },
      ],
      love: '传值（string, number, boolean）'
    }
  },
  methods: {
    updateTitle: function(_title) {
      this.love = _title;
    }
  },
   async created() {
    //  this.$http.get("http://127.0.0.1:7001/api/samples")
    //   .then(function (reponse) {
    //   console.log(reponse);
    // })
    const result = await this.$http.get("http://127.0.0.1:7001/api/samples");
    for (let i of result.body) {
      i['show'] = false
    }
    // for (let i in result.body) {
    //   result.body[i]['show'] = false
    // }
    // result.body.forEach((v, i, arr) => {
    //   v['show'] = false
    // });
    this.users = result.body;
    console.log('11111111', this.users);
  },
  components: {
    'users': Users,
    'app-header': Header,
    'app-footer': Footer,
  }

}
</script>

<style scoped>
  h1 {
    color: blue
  }
</style>
