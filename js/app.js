/* 
*Created by fengyang on 2018/3/27
**/

/*解释说明
* 1.el  表示element元素
* 2.data  表示存储数据的,获取的时候可以直接用app.name，在div容器中需要用{{name}}
* 3.methods 表示方法的对象
* 4.v-bind绑定属性， v-html 属性绑定，插入标签
*
*
* */
var app = new Vue({
    el:"#vue-app",
    data:{
      name:"Ms yang",
      job:"web开发",
      website:"http://www.baidu.com",
      websiteTag:"<a href='http://wwww.baidu.com'>百度一下</a>"
    },
    methods:{
        greet:function (time) {
            return "Good "+time+" "+this.name+"!";
        }
    }
});
