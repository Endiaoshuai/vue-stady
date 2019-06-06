<template>
  <header>
    <h1 v-on:click="changeLove">{{title}} {{love}}</h1>
    <button v-on:click="changeTitle">修改Header值</button>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    love: {
      type: String
    }
  },
  data () {
    return {
      title: "Vue.js Demo"
    }
  },
  methods: {
    changeLove() {
      this.love = 'changed!'
    },
    changeTitle() {
      this.$emit("titleChanged", "子向父组件传值！")
    }
  },
  // beforeCreate: function() {
  //   alert('beforeCreate(): 组件实例化之前执行的函数');
  // },
  // created: function() {
  //   alert('created(): 组件实例化完毕，单页面还未显示');
  // },
  // beforeMount: function() {
  //   alert('beforeMount(): 组件挂载前，页面扔未展示，但虚拟DOM已经配置');
  // },
  // mounted: function() {
  //   alert('mounted(): 组件挂载后，此方法执行后，页面显示');
  // },
  // beforeUpdate: function() {
  //   alert('组件更新前，页面扔未更新，但虚拟DOM已经配置');
  // },
  // updated: function() {
  //   alert('组件更新，页面仍未展示，但虚拟DOM已经配置');
  // },
  // beforeDestroy: function() {
  //   alert('组件销毁，此方法执行后，页面显示');
  // },
  // destroyed: function() {
  //   alert('组件销毁');
  // }

}
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center
  }
</style>
