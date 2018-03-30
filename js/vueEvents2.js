/* 
*Created by fengyang on 2018/3/30
**/
var vm = new Vue({
    el:"#vue-app",
    data:{

    },
    methods:{
       loginName:function (event) {
          console.log("你在输入名字");
      },
      loginAge:function (event) {
         console.log("你在输入年龄");
      }
    }

});
