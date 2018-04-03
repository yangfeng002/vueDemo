/* 
*Created by fengyang on 2018/3/30
**/
var vm = new Vue({
    el:"#vue-app",
    data:{
       name:"",
       age:""
    },
    methods:{
       showName:function () {
          //显示名字
           this.name = this.$refs.name.value;
       },
        showAge:function () {
            //显示年龄
            this.age = this.$refs.age.value;
        }
    }
});

