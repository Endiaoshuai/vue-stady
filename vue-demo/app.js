new Vue({
  el: '#vue-game',
  data: {
    health: 100,
    change: false,
  },
  methods: {
    punsh: function() {
      this.health -= 20;
      if (this.health == 0) {
        this.change = true;
      }
    },
    restart: function() {
      this.health = 100;
    }
  }
})