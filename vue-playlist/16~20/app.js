
Vue.component("mydiv", {
  template: `
    <p>
      {{name}}: 大家早上好。
      <button v-on:click='changeName'>改变名字</button>
    </p>    
  `,
  data: function() {
    return {
      name: '海绵宝宝'
    }
  },
  methods: {
    changeName: function() {
      this.name = '黑大帅';
    }
  }
})


new Vue({
  el: '#one',
  data: {
    title: 'title-one'
  },
  methods: {
    show: function() {
      alert('title-one');
    },
    getNum: function() {
      return 123;
    }
  },
  computed: {
    greet: function() {
      return 'title-one';
    }
  }
});

new Vue({
  el: '#two',
  data: {
    title: 'title-two'
  },
  methods: {
    show: function() {
      alert('title-two');
    },
    changeOneTitle: function() {
      one.title = 'already changed one title!'
    }
  },
  computed: {
    greet: function() {
      return 'title-two';
    }
  }
});

