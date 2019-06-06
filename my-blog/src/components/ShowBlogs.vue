<template>
  <div id='show-blogs' v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" v-model='search'>
    <div  class="single-blog" v-for="(blog, index) in filteredBlogs" :key="index">
      <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
      <article>
        {{blog.body | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search)
      })
    }
  },
  // 局部自定义过滤器
  filters: {
    // 'toUppercase': (value) => {
    //   return value.toUpperCase()
    // },
    // es6方法的形式，- 后面的字母转大写
    toUppercase (value) {
      return value.toUpperCase()
    }
  },
  // 局部自定义指令
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).substring(2, 8)
      }
    }
  },
  async created () {
    const blogs = await this.$http.get('../../static/posts.json')
    this.blogs = blogs.body.slice(0, 10)
  }
}
</script>

<style scoped>
#show-blogs *{
  box-sizing: border-box;
}
#show-blogs{
  max-width: 98%;
  margin: 0px auto
}
.single-blog{
  padding: 5px 15px;
  background: rgb(204, 204, 204);
  margin-top: 10px
}
</style>
