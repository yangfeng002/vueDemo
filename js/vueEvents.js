/* 
*Created by fengyang on 2018/3/28
**/

/*
* v:on:click 绑定事件
*
*
* */

new Vue({
  el:"#vue-event",
  data:{
   age:20,
      x:0,
      y:0,
      website:"http://www.baidu.com"
  },
  methods:{
    add:function (value) {
        this.age+=value;
    },
    subtract:function (value) {
        this.age -=value;
    },
    updateXY:function (event) {
       this.x = event.offsetX;
       this.y = event.offsetY;
    },
    stopMoving:function (event) {
        event.stopPropagation();
    }
  }

});
