# Vue 3 + TypeScript + Vite

## package.json
- scripts
  - --host
    > 在配置的时候加上--host，方便自动获取本地网络地址。
  - --force 
    > 由于Vite的快是因为它将代码分为依赖和源码，依赖大多数时间不会改变，所以在开发运行中，依赖只会请求一次，而如果我们更新了依赖，浏览器没有同步更新就可能会造成运行错误，所以可以在脚本内添加--force来避免错误，每次启动运行脚本就会更新依赖，避免浏览器的强缓存所带来的影响。