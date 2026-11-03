---
title: 安装
nav_order: 1
---

# 安装指南

以下是将 BOOTH 购买的 Menno 导入 Unity 并上传至 VRChat 的步骤。

## 视频演示（安装与 M. Avatar Setting 操作）

<iframe width="560" height="315" src="https://www.youtube.com/embed/imeaf9TB4ME?si=0a-RL1EgCnXRjdrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 必备工具

| 所需内容 | 获取方式 |
|---|---|
| [VRChat Creator Companion (VCC)](https://vcc.docs.vrchat.com/#download-it) | 从官网下载 |
| Unity 2022.3.x | 通过 VCC 安装 |
| lilToon | 包含在 `1. liltoon and MA.unitypackage` 中 |
| Modular Avatar | 包含在 `1. liltoon and MA.unitypackage` 中 |

## 下载文件内容

解压 BOOTH 提供的压缩包后，文件结构如下：

```
License/                         # 授权 PDF 文档（en / ja / ko / zh）
Resources/
  Menno/                         # FBX 模型与贴图
  ToggleProps/                   # FBX 模型与贴图
1. liltoon and MA.unitypackage   # lilToon 与 Modular Avatar（需优先导入）
2. Menno.unitypackage            # Menno 主体资源（随后导入）
```

## 操作步骤

### 1. 创建项目

1. 下载并安装 VCC（[VCC](https://vcc.docs.vrchat.com/#download-it) 或 [VRChat 官网](https://vrchat.com/home/download)）。
2. 启动 VCC 并完成首次设置。若未安装 Unity Hub 和 Unity 2022.3.x，请在此步骤中完成安装。
3. 点击「新建项目」。
4. 输入项目名称并选择保存路径。
5. 模板选择「Avatar」。
6. 点击「创建项目」。
7. 点击「在 Unity 中打开」。

### 2. 导入包

1. 双击 `1. liltoon and MA.unitypackage`。
2. 在导入窗口中点击「导入」。
3. 双击 `2. Menno.unitypackage`。
4. 在导入窗口中点击「导入」。

模型资源将存入 `Assets/emudotto/Menno` 目录。由于已包含 M. Avatar Setting，无需单独导入。

::: tip
若已通过 VCC 安装 Modular Avatar，则无需导入 `1. liltoon and MA.unitypackage`。
:::

### 3. 放置到场景中

请按以下任一方式将其放置到场景中：

- **使用示例场景（推荐）**：双击 `Assets/emudotto/Menno/MennoScene.unity` 打开。模型、环境与灯光均已配置完毕。
- **添加至现有场景**：将 `Assets/emudotto/Menno/Menno.prefab` 拖拽至 Scene 视图即可。

### 4. 使用 M. Avatar Setting 进行配置

1. 选中场景中的 Menno。
2. 打开 M. Avatar Setting。可通过菜单栏 `Window > M Avatar Setting`，或点击 Inspector 面板中的「打开 M. Avatar Setting」按钮进入。
3. 按需完成相关设置。详细用法请参阅 [M. Avatar Setting](/zh/avatar-setting/)。

### 5. 上传至 VRChat

1. 选中场景中的 Menno。
2. 打开 VRChat SDK 的控制面板。
3. 点击「Build & Publish」。
4. 填写必要信息并完成上传。
