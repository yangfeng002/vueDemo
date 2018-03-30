# vue--入门介绍，MVVM（模型->视图，视图->模型）的一个渐进式框架，实现模型和视图的双向绑定
 渐进式框架---说白了就是没有太多限制的框架，angular比较重的一个框架
一、安装：
    1.安装vue,利用命令行工具
        # 全局安装 vue-cli
        ---$ npm install --global vue-cli （也可以在目录下安装）测试安装成功用 vue -V命令
        执行cnpm install vue-cli -g 全局安装
        # 创建一个基于 webpack 模板的新项目
        $ vue init webpack my-project
        # 安装依赖，走你
        $ npm install
        $ cd my-project
        $ npm run dev
    2.通过本地或者CDN加载的方式，需要实例化Vue对象
二、使用（脚本需要在dom元素后面）
   1.首先需要创建vue对象
   var app = new Vue({
     el:"#app",//绑定对象元素
     data:{},  //存储数据
     methods:{} //方法对象

   })
   通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：
  2.div--表达式里面可以运算,每个包含的只能是单个表达式，不能定义变量，不能出现逻辑表达式
    <div> {{ number + 1 }} </div>
    <div> {{ ok ? 'YES' : 'NO' }}  </div>
    <div>{{ message.split('').reverse().join('') }}</div>
    <div v-bind:id="'list-' + id"></div>
  3.指令
    指令都是以v开头的
    v-on:click   <button v-on:click="subtract(1)">减少1岁</button>
    v-bind:value=""   v-bind:href=""
    v-bind 缩写
    <!-- 完整语法 -->
    <a v-bind:href="url">...</a>
    <!-- 缩写 -->
    <a :href="url">...</a>

    v-on 缩写
    <!-- 完整语法 -->
    <a v-on:click="doSomething">...</a>

    <!-- 缩写 -->
    <a @click="doSomething">...</a>

   4.修饰符
   修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
   <form v-on:submit.prevent="onSubmit">...</form>

   事件修饰符
       .stop
       .prevent
       .capture
       .self
       .once
      <!-- 阻止单击事件继续传播 -->
      <a v-on:click.stop="doThis"></a>

      <!-- 提交事件不再重载页面，阻止浏览器的默认行为 -->
      <form v-on:submit.prevent="onSubmit"></form>

      <!-- 修饰符可以串联 -->
      <a v-on:click.stop.prevent="doThat"></a>

      <!-- 只有修饰符 -->
      <form v-on:submit.prevent></form>

      <!-- 添加事件监听器时使用事件捕获模式 -->
      <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
      <div v-on:click.capture="doThis">...</div>

      <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
      <!-- 即事件不是从内部元素触发的 -->
      <div v-on:click.self="doThat">...</div>
      使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
