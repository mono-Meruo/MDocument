---
title: 动画结构
nav_order: 4
---

# 动画结构

可查看 Menno 的动画文件、控制器和参数名称及位置。修改表情或物品时请参考此文档。

## 文件夹结构

所有文件均位于 `Assets/emudotto/Menno/Animation/` 目录中。

| 文件夹 | 说明 |
|---|---|
| `AnimaitonLayer/` | 动画控制器 |
| `FX_Body/` | 身体动画 |
| `FX_Face/` | 面部动画 |
| `FX_ToggleProp/` | 开关物品动画 |
| `Gesture/` | 手势动画 |
| `Locomotion/` | 移动动画 |
| `ModularAvatar/` | Modular Avatar 扩展 |
| `Parameters/` | VRChat SDK 菜单与参数 |

## 动画控制器

| 控制器 | 功能 |
|---|---|
| `AnimaitonLayer/Menno_Layer_FX.controller` | 主 FX 控制器。管理面部、身体灯光及开关物品 |
| `AnimaitonLayer/Menno_Layer_Gesture.controller` | 手部手势 |
| `Menno_Props.controller` / `Menno_Props_Gesture.controller` | 物品开关及关联手势。上传时 Modular Avatar 会将其整合至 FX 图层 |

`Menno_Layer_FX.controller` 的结构如下。

```
Menno_Layer_FX.controller
├── 面部状态机
│   ├── 初始状态_Base
│   ├── 微笑_Smile
│   ├── 悲伤_Sad
│   └── 其他表情...
├── 身体灯光状态机
│   ├── 灯光_OFF
│   └── 灯光_ON
└── 开关物品状态机
    ├── Pan_OFF / Pan_ON
    ├── Xondle_OFF / Xondle_ON
    └── Mokia_OFF / Mokia_ON
```

## 面部动画（FX_Face）

主要表情列表。此外还有多种表情，可从 Expression Menu 中选择。

| 动画名称 | 表情 |
|---|---|
| `Menno_初期状態_Base` | 初始状态 |
| `Menno_笑顔_Smile` | 微笑 |
| `Menno_悲しみ_Sad` | 悲伤 |
| `Menno_怒り_Angry` | 愤怒 |
| `Menno_驚愕_surprise` | 惊讶 |
| `Menno_泣く_Cry` | 哭泣 |
| `Menno_ハート_Heart` | 爱心眼 |
| `Menno_舌出し_Tongue` | 吐舌头 |
| `Menno_和み_Calm` | 放松 |
| `Menno_目閉じ_Sleep` | 闭眼 |
| `Menno_冷え_Cold` | 寒冷 |
| `Menno_焦り_Impatience` | 焦躁 |

## 身体动画（FX_Body）

| 动画名称 | 说明 |
|---|---|
| `Menno_Body_Lighting` | 身体灯光调节 |
| `Menno_Body_Cheek` | PhysBone 脸颊牵引 |
| `Menno_Body_Cheek_L` | PhysBone 左脸颊牵引 |
| `Menno_Body_Cheek_R` | PhysBone 右脸颊牵引 |

## 菜单与参数（Parameters）

| 文件 | 说明 |
|---|---|
| `Menno_ExpressionParameters.asset` | 基础参数 |
| `Menno_ExpressionsMenu.asset` | 主菜单 |
| `Menno_FaceMenu.asset` | 表情菜单 |
| `Menno_FaceMenu1.asset` / `Menno_FaceMenu2.asset` / `Menno_FaceMenu3.asset` | 附加表情菜单 |
| `Menno_Props.asset` / `Menno_Props_SubMenu.asset` | 物品菜单 |

### 主要参数

| 参数名称 | 类型 | 说明 |
|---|---|---|
| `VRCFaceBlendH` | Float | 面部水平混合（VRChat 标准） |
| `VRCFaceBlendV` | Float | 面部垂直混合（VRChat 标准） |
| `GestureLeft` | Int | 左手手势（VRChat 标准） |
| `GestureRight` | Int | 右手手势（VRChat 标准） |
| `GestureLeftWeight` | Float | 左手手势强度（VRChat 标准） |
| `GestureRightWeight` | Float | 右手手势强度（VRChat 标准） |
| `FacialExpression` | Int | 表情选择 |
| `BodyLighting` | Float | 身体灯光调节 |
| `Cheek` | Bool | 脸颊牵引开关 |
| `CheekLeft` | Bool | 左脸颊牵引开关 |
| `CheekRight` | Bool | 右脸颊牵引开关 |
| `TogglePan` | Bool | 平底锅显示/隐藏 |
| `ToggleXondle` | Bool | Xondle/Xontra 显示/隐藏 |
| `ToggleMokia` | Bool | 手机显示/隐藏 |

## 表情切换方法

1. 在 VRChat 中打开动作菜单（PC端按 `R` 键，VR端使用动作菜单按钮）。
2. 在 Menno 的菜单中选择「表情」。
3. 选择所需表情。

菜单层级如下：

```
主菜单
├── 表情
│   ├── 基础表情
│   │   ├── 微笑
│   │   ├── 悲伤
│   │   └── ...
│   ├── 特殊表情
│   │   ├── 爱心眼
│   │   ├── 燃烧眼
│   │   └── ...
│   └── 情感表现
│       ├── 焦躁
│       ├── 寒冷
│       └── ...
└── 物品
    ├── 平底锅
    ├── Xondle
    └── Mokia
```
