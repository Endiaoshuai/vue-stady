<template>
  <footer>
    <p>{{copyright}} {{love}}</p>

  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props: {
    love: {
      type: String
    }
  },
  data() {
    return {
      copyright: "Copyright 2019 Vue Demo"
    }
  }
}
</script>

<style scoped>
  footer{
    background: #333;
    padding: 6px;
  }
  p{
    color: black;
    text-align: center
  }
</style>
