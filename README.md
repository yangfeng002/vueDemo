# vue--入门介绍，MVVM（模型->视图，视图->模型）的一个渐进式框架，实现模型和视图的双向绑定
 渐进式框架---说白了就是没有太多限制的框架，angular比较重的一个框架
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
