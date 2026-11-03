---
title: 自定义
nav_order: 2
---

# 修改方法

可以修改 Menno 的纹理和材质，添加服装，以及编辑动画和表情。

::: warning 注意
在大幅修改之前，请备份原始文件。
:::

## 文件位置

| 目标对象 | 位置 |
|---|---|
| 纹理（PSD） | `Assets/emudotto/Menno/Materials/Tex_Main/` |
| 材质 | `Assets/emudotto/Menno/Materials/` |
| 动画 | `Assets/emudotto/Menno/Animation/` |

## 修改纹理

1. 使用 Photoshop 或 GIMP 等软件打开 `Tex_Main` 的 PSD 文件。
2. 进行编辑并保存。
3. 返回 Unity。更改将自动应用。

## 修改材质

1. 在 Project 窗口中选择材质（也可以在 Hierarchy 中选择对象）。
2. 在 Inspector 中调整 lilToon 的参数。详情请参考 [lilToon 文档](https://lilxyzw.github.io/lilToon/ja_JP/first.html)。

## 添加服装

使用 Modular Avatar 进行添加。

1. 双击服装的 unitypackage 文件将其导入 Unity。
2. 将服装作为 Menno 的子对象放置。
3. 右键单击服装对象，选择 `[ModularAvatar] Setup Outfit`。

Modular Avatar 将检测服装的骨骼并添加 Merge Armature 组件，使服装能够跟随 Menno 的骨骼运动。

### 使其可在表情菜单中切换

1. 选择服装对象。
2. 从 "Add Component" 中添加 `MA Toggle Object`。
3. 将 "Default State" 设置为开启或关闭。
4. 在 "Menu Item Name" 中输入显示名称。
5. 根据需要设置图标或菜单层级。

## 编辑动画

1. 在 Project 窗口中选择动画文件。
2. 打开 Animation 窗口。
3. 添加和编辑关键帧。
4. 保存文件。

## 添加表情

1. 在场景中选中 Menno。
2. 选择身体网格的 Skinned Mesh Renderer。
3. 在 Inspector 的 "Blend Shapes" 中调整表情。
4. 在 Animation 窗口中将调整好的表情记录为关键帧。

可用的变形键（Shape Keys）请参阅 [变形键](/zh/menno/shapekeys/)。
