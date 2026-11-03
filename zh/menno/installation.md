---
title: ⬇️安装
parent: Menno
nav_order: 1
permalink: /menno/installation/
lang: zh
---

# 从Unity安装Menno和如何使用M Avatar Setting

<iframe width="560" height="315" src="https://www.youtube.com/embed/imeaf9TB4ME?si=0a-RL1EgCnXRjdrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Menno - 安装

本页说明如何安装Menno虚拟形象。

## 下载文件的结构

从BOOTH下载的文件解压后，您将看到以下结构：

```
📁 License
   📄 en.pdf
   📄 ja.pdf
   📄 ko.pdf
   📄 zh.pdf
📁 Resources
   📁 Menno
      📁 FBX
      📁 Texture
   📁 ToggleProps
      📁 FBX
      📁 Texture
📄 1. liltoon and MA.unitypackage
📄 2. Menno.unitypackage
```

* **License** - 各种语言的许可证信息
* **Resources** - 包含虚拟形象的FBX和纹理的资源文件
* **1. liltoon and MA.unitypackage** - 第一个导入的包（包含liltoon和Modular Avatar）
* **2. Menno.unitypackage** - 第二个导入的包，包含Menno虚拟形象

## 前提条件

要使用Menno虚拟形象，您需要：

* [VRChat Creator Companion (VCC)](https://vcc.docs.vrchat.com/#download-it)
* Unity 2022.3.x（通过VCC安装）
* Liltoon
  （通过1. liltoon and MA.unitypackage安装）
* Modular Avatar
  （通过1. liltoon and MA.unitypackage安装）

## 安装步骤（使用VCC）

### 1. 设置VRChat Creator Companion

1. 从[VRChat官方网站](https://vrchat.com/home/download)或[VCC下载页面](https://vcc.docs.vrchat.com/#download-it)下载并安装VRChat Creator Companion (VCC)
2. 启动VCC并完成初始设置
   - 如果需要，安装Unity Hub
   - 安装Unity 2022.3.x

### 2. 使用VCC创建虚拟形象项目

1. 在VCC中点击"创建新项目"
2. 选择项目名称和位置
3. 选择"Avatar"作为模板
4. 点击"创建项目"按钮
5. 项目创建完成后，点击"在Unity中打开"

### 3. 导入所需包

1. 双击`1. liltoon and MA.unitypackage`导入
   - 此包添加liltoon和Modular Avatar
   - 如果您已通过VCC安装了Modular Avatar，可以跳过此步骤
2. 在导入窗口中点击"导入"按钮

### 4. 导入Menno虚拟形象

1. 双击`2. Menno.unitypackage`导入
2. 在导入窗口中点击"导入"按钮
3. 导入后，虚拟形象将放置在`Assets/emudotto/Menno`文件夹中
   - M. Avatar Setting也会在此刻导入。您不需要单独导入它。

### 5. 将虚拟形象放置在场景中

您可以使用以下方法之一将虚拟形象放置在场景中：

#### 方法1：使用示例场景（推荐）
1. 在Unity项目视图中，找到`Assets/emudotto/Menno/MennoScene.unity`
2. 双击`MennoScene.unity`打开它
   - 此场景已放置Menno虚拟形象
   - 环境和光照已设置好

#### 方法2：将虚拟形象添加到现有场景
1. 在Unity项目视图中，找到`Assets/emudotto/Menno/Menno.prefab`
2. 将Menno.prefab拖放到场景视图中

### 6. 配置虚拟形象

1. 在场景中选择Menno对象
2. 打开M. Avatar Setting（[详情请见]({{ site.baseurl }}/avatar-setting/)）
   - 从Unity菜单中选择`Window > M Avatar Setting`
   - 或在Inspector中点击Menno，然后点击"Open M. Avatar Setting"按钮
3. 根据需要配置虚拟形象设置

### 7. 上传到VRChat

1. 在场景中选择Menno对象
2. 打开VRChat SDK控制面板
3. 点击"Build & Publish"按钮
4. 输入所需信息并完成上传 