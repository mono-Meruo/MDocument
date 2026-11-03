---
title: M. Avatar Setting
description: Unity 编辑器扩展。调整虚拟形象的面部、头发和物品，并提供自动设置。
nav_order: 3
---

# M. Avatar Setting

M. Avatar Setting 是一款在 Unity 中对 VRChat 化身 Menno 进行配置的编辑器扩展。您可以了解启动方式和自动设置的用法。

## 所需工具

请先安装以下工具。

- [Modular Avatar](https://github.com/bdunderscore/modular-avatar/releases)
- [lilToon](https://booth.pm/ja/items/3087170)

## 启动

以下任一方式打开。

### 从菜单打开

1. 在 Unity 菜单中选择 `Window > M Avatar Setting`。

![从菜单启动](/assets/images/mas_01.png)

### 从 M. Avatar Setup Helper 打开

1. 在 Hierarchy 中选中化身。
2. 点击 Inspector 中「M. Avatar Setup Helper」组件上的「打开 M. Avatar Setting」按钮。

选中化身后，窗口将打开。

![从 Setup Helper 启动](/assets/images/mas_02.png)

## 添加动画关键帧

自动将化身内所有材质的亮度下限（`_LightMinLimit`）注册到 Expression Menu 中「灯光调整」Radial Puppet 所使用的动画里。

1. 打开 M. Avatar Setting 窗口。
2. 选择化身。
3. 点击「添加动画关键帧」按钮。

![添加动画关键帧](/assets/images/mas_03.png)

::: warning 注意
尚不支持使用 Modular Avatar 修改层级的组件（计划后续支持）。
:::

## 接下来阅读

显示的设置因化身而异。

- [Menno 的设置](/zh/menno/)
- [更新历史](/zh/avatar-setting/history/)
