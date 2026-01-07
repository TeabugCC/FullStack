# FullStack
A respository includes vue3+vite+pinia, nest  and mySql.

技术架构：微前端 ➕ Monorepo
参考 
https://juejin.cn/post/7225800207329230905

https://juejin.cn/post/7098893450967269383
https://juejin.cn/post/7145053017325174797

技术选型：vue3 ➕ vite ➕ pinia ➕ element-ui plus =====> wind
后端采用 nest（基于express平台） ➕ mysql ====> moon
当前优先采用mysql 9.0
node版本 20
构架工具： 前端构建 vite
          后端构建 webpack
          数据库
包管理工具使用：pnpm

先实现一个完整的通路，然后，借鉴已有企业级框架完善结构。
  可能存在某些看起来冗余的设计，尽量理解。
  已实现功能可以参考相关企业级的功能设计。

  后段选择nest的原因是应用较多且可以直接使用esm进行模块管理。虽然，express也可以，但是这种框架级支持更友好。

  后续运行与移植：
    1. 代码库克隆与运行
    2. 数据库的安装与数据同步迁移

