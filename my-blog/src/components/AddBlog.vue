<template>
  <div id="add-blog">
    <h1>add-blog</h1>
    <form action="" v-show='!result'>
      <label for="">主题</label>
      <input type="text" v-model="blog.title">
      <label for="">内容</label>
      <textarea name="" id="" cols="30" rows="10" v-model="blog.content"></textarea>
      <div id="checkboxes">
        <span>分类：</span>
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for="">Php</label>
        <input type="checkbox" value="Php" v-model="blog.categories">
      </div>
      <label for="">作者</label>
      <select name="" id="" v-model="blog.author">
        <option :value="author" v-for="(author, index) in authores" :key="index" >{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <hr>
    <div v-show='result'>
      <h1>添加成功</h1>
    </div>
    <div  id='preview'>
      <h3>博客总览</h3>
      <p>主题：{{blog.title}}</p>
      <p>内容：{{blog.content}}</p>
      <p>分类：</p>
      <ul>
        <li v-for="(category,index) in blog.categories" :key='index'> {{category}} </li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
      blog: {
        titel: '',
        content: '',
        categories: [],
        author: ''
      },
      authores: ['Tom', 'Jack', 'Rose'],
      result: false
    }
  },
  methods: {
    async post () {
      const result = await this.$http.post('http://jsonplaceholder.typicode.com/posts',
        {
          title: this.blog.titel,
          userId: 1,
          id: 1,
          body: this.blog.content
        })
      if (result.status === 201) this.result = true
    }
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px
}
input[type='text'],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
#checkboxes label{
  display: inline-block;
}
#checkboxes input{
  display: inline-block;
  margin-right: 15px;
}
button{
  display: block;
  margin: 20px 0;
  background: rgba(247, 4, 24, 0.952);
  color: #fff;
  border: 0px;
  padding:  12px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 20px 0
}
h3{
  margin-top: 10px;
}
ul{
  width: 400px;
  margin: 0;
  padding: 0 0;
}
li{
  list-style: none;
  display: inline-block;
  padding-left: 20px
}

</style>
