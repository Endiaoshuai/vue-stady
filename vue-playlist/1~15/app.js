new Vue({
  el: "#info",
  data: {
    name: 'jack',
    age: 23,
    job: 'Web',
    x: 0,
    y: 0,
    hobby: null,
    sex: null,
    pressKeyName: 0,
    a: 0,
    b: 0,
    changeColor: false,
    changeLength: false,
    resultA: 0,
    website: 'https://www.baidu.com',
    newWebSite: "<a href='https://www.baidu.com'>TheNewStep<a>",
    error: false,
    success: false,
    characters: ['张三','李四','王五'],
    users: [
      { name: 'Henry', age: 20 },
      { name: 'Bucky', age: 21 },
      { name: 'Emliy', age: 22 },
    ]
    },
    methods: {
      saying: function(time) {
        return `good ${time} ${this.name}!`;
      },
      add: function(inc) {
        this.age += inc;
      },
      subtract: function(dec) {
        this.age -= dec;
      },
      updateXY: function(event) {
        console.log(event);
        this.x = event.offsetX;
        this.y = event.offsetY;
      },
      stopxy: function(event) {
        event.stopPropagation();
      },
      alert: function() {
        alert('跳转？')
      },
      logName: function() {
        this.pressKeyName++;
        let spc = document.getElementById("showPressCount")
        spc.innerHTML="正在输入，次数" + this.pressKeyName;
        spc.style.visibility = true;
      },
      logAge: function() {
        let spc = document.getElementById("showPressCount")
        spc.innerHTML="正在输入，次数" + this.pressKeyName;
        spc.style.display = "inherit";
      },
      lostFocus: function() {
        this.pressKeyName = 0;
        document.getElementById("showPressCount").style.visibility = "hidden";
      },
      inputHobby: function() {
        this.hobby = this.$refs.hobby.value;
      },
      // addToA: function() {
      //   console.log("age add to A");
      //   return this.a + this.age;
      // },
      // addToB: function() {
      //   console.log("age add to B");
      //   return this.b + this.age;
      // }
      

    },
    computed: {
      addToA: function() {
        console.log("age add to A");
        return this.a + this.age;
      },
      addToB: function() {
        console.log("age add to B");
        return this.b + this.age;
      },
      changeCL: function () {
        console.log(111);
        return {
          changeColor: this.changeColor,
          changeLength: this.changeLength
        }
      }
    }
})