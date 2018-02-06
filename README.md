Proper BI Web
=====================

环境准备
-------
### 必备软件
* [git](http://www.git-scm.com/) - 版本控制及与 GitHub 交互
* [Node.js](https://nodejs.org/) - 前端开发环境所需工具的包管理器，以及运行代理服务器必备环境
* [ruby](http://www.ruby-lang.org/) - [SASS/SCSS](http://sass-lang.com/) 编译工具的运行环境（mac系统自带该软件不用安装）

> Windows 环境下安装时需注意添加环境变量，以方便在命令行下使用

##### 设置npm全局安装路径和缓存路径
```
$ npm config set prefix "C:\Program Files\nodejs"
$ npm config set cache "C:\Program Files\nodejs\node_cache"
```

### 运行方式
```
# 安装全局命令行组件
$ npm install grunt-cli -g

# 安装 SCSS 编译环境
$ gem install sass
$ gem install compass

# 安装项目依赖的组件
$ npm install

# 发布静态资源，通过浏览器访问
$ npm run serve
# 也可连接实际后端服务器运行
$ npm run serve:real
# 当需要启动后端代理服务器时，需手动启动，修改后也需手动重启
$ node proxy/proxy-server.js

# 进行ts代码检查
$ npm run lint

# 应用构建
$ npm run build
```

#### import其它模块类规范
- 为消除模块间import路径得耦合，每个模块内新建[index.ts]文件，在该文件内导出模块的服务和组件
- 引用其它模块的服务或组件时，使用[index.ts]文件导出的类，禁止使用其它模块相对路径引用
