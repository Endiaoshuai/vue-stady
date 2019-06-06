<template>
  <div class="users">
    <h1>Hello Users</h1>
    <ul>
      <!-- <li v-for="(user,index) in users" :key='index' v-on:click='user.show=!user.show'>
        <h2>{{user.name}}</h2>
        <h3 v-show='user.show'>{{user.age}}</h3>
      </li> -->
      <li v-for="(user,index) in users" :key='index' v-on:click='user.show=!user.show'>
        <h2>{{user.sampleName}}</h2>
        <!-- <h3 v-show='user.show'>{{user.picture}}</h3> -->
        <img src="user.picture" alt="">
      </li>
    </ul>
    <button v-on:click="deleteArr">删除(传引用)</button>
  </div>
</template> 

<script>
export default {
  name: 'users',
  // props:['users'],
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // users: [
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      //   { name: 'Tom', age: 25, show: false },
      // ]
    }
  },
  methods: {
    deleteArr: function() {
      this.users.pop();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    border: 2px #333 solid;
    box-sizing: border-box
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 250px;
    text-align: center;
    padding: 30;
    border: 1px solid #222;
    margin: 10px
  }

</style>
