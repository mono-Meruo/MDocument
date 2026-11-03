---
title: 物品设置
nav_order: 3
---

# 物品设置

可用于配置服装及 VRChat 中可切换显隐的 Toggle 物品的启用状态、初始显示与颜色。

![物品设置UI](/assets/images/item_settings.png)

## 使用方法

1. 打开 M. Avatar Setting 窗口
2. 选择 Menno 虚拟形象
3. 展开“服装设置”区域
4. 勾选所需服装旁边的复选框

## 服装

| 字段 | 说明 |
|---|---|
| 复选框 | 是否启用该服装 |
| 初始状态 | 开启后，在虚拟形象加载时即显示。可同时启用多套服装 |
| 颜色按钮 | 默认色 / 白色。将统一更改所有服装的颜色 |

## Toggle 物品

支持的对象为 Pan（平底锅）、Xondle、Mokia（手机）这三款物品。

| 字段 | 说明 |
|---|---|
| 启用/禁用 | 是否使用该物品 |
| 音效 | 切换时是否播放音效 |
| 初始状态 | 是否在加载虚拟形象时显示该物品 |

物品名称与说明会根据窗口右上角的语言切换按钮（日/英）自动同步切换。

## 重置

点击“重置”按钮并在确认对话框中选择“是”，可将服装与 Toggle 物品的设置全部恢复为初始状态。

## 源文件路径

| 对象 | 路径 |
|---|---|
| 服装预制体 | `Assets/emudotto/Menno/Animation/ModularAvatar/Costume` |
| Toggle 物品预制体 | `Assets/emudotto/Menno/Prefab/ToggleProps.prefab` |
| 服装材质 | `Assets/emudotto/Menno/Materials/Menno_Wear.mat` |
