---
title: 快速开发
---

# 快速开发

## 简介

为提高开发效率，开发了代码生成工具，预设偏好设置，自动设置常用字段是否显示、查询、填写和验证等。 用户可使用可视化代码生成工具快速生成CRUD代码，节约大量的时间。

## 开发步骤
如需要新增模块，可查看[如何新增模块](/back-end/add-module.html '新增模块')
### 1.创建表
建议表名称使用模块名称_功能名称方式命名。  
下方表格中为通用字段（MySQL），代码生成中预设了偏好设置，建议项目中统一使用以下规范，开发时可根据业务场景调整。

| 字段 | 类型 | 注释 |
| --- | --- | --- |
id|varchar(32)|主键
status|int(2)|状态
version|int(11)|乐观锁
create_user|varchar(32)|创建人
create_date|datetime|创建时间
edit_user|varchar(32)|修改人
edit_date|datetime|修改时间

:::tip 
建议使用`_`命名方式，并填写字段注释，注释会在代码生成中作为默认的`表格标题` 和 `表单label`
:::

### 2.代码生成

#### 基本信息

选择表名`sample_general`，将会根据规范自动填充表单中内容。 默认生成前、后端所有代码，如必须要可根据需求自行勾选需要生成的`文件`和`方法`。
如填写菜单名称，如果菜单中不存在此名称的菜单将会自动生成菜单。
![基本信息](/assets/images/generation/step-1.png)
:::tip
生成方法如勾选了`导入数据`，将会使用`业务名称`和`权限标识`作为导入模板的`模板名称`和`模板代码`自动创建导入模板
:::
#### 列表页面
预览列表页面布局，可拖动调整查询条件与表格字段显示顺序
![列表页面](/assets/images/generation/step-2.png)
#### 表单页面
预览表单页面布局，可拖动调整表单字段显示顺序
![表单页面](/assets/images/generation/step-3.1.png)
可对页面所需显示的表单进行调整
![表单页面](/assets/images/generation/step-3.2.png)
#### 导入、导出
- 对`导入模板`中导入规则进行排序
- 对`导出`中字段顺序进行排序
![表单页面](/assets/images/generation/step-4.png)
#### 完成
显示生成文件列表，点击完成会自动生成下方列表中的文件。
![完成](/assets/images/generation/step-5.png)
### 3.完善
#### 重启后端服务
重启后端服务后，在`权限管理 > 角色管理`中分配相应的菜单后重新登录即可看到生成的页面。可根据实际需求完善功能。
![列表页](/assets/images/sample/list.png)
![详情页](/assets/images/sample/input.png)

