---
title: 结构
nav_order: 3
---

# 结构说明

查看 Menno 的文件存放位置与预制体内容。

## 文件夹结构

```
Assets/emudotto/Menno/
├── Animation/            # 动画文件
│   ├── ModularAvatar/    # 用于 Modular Avatar 的对象
│   │   └── Costume/      # 用于 M. Avatar Setting 的服装切换 Toggle
│   └── Controllers/      # 动画控制器
├── FBX/                  # 3D 模型文件
├── Materials/            # 材质文件
│   ├── Presets/          # 发色等预设
│   └── Tex_Main/         # 纹理文件
├── Materials_Props/      # 道具材质文件
│   └── Tex_Props/        # 纹理文件
├── Prefab/               # 预制体文件
│   └── ToggleProps.prefab # 道具用预制体
├── Menno.prefab          # Menno 主体预制体
└── MennoScene.unity      # 场景
```

## Menno.prefab

此为角色主体的预制体。将其拖入场景中即可使用。

| 组件 | 作用 |
|---|---|
| VRC Avatar Descriptor | VRChat 角色设置 |
| M Avatar Setup Helper | 与 M. Avatar Setting 的协同配置 |
| Animator | 动画控制 |
| Modular Avatar 组件 | 角色自定义 |

## 预制体层级

```
Menno (根对象)
├── Armature          # 角色骨骼
├── Body              # 身体网格
├── Hair              # 头发网格
├── Hair_Bangs        # 刘海网格
├── Belt              # 腰带网格
├── Boots             # 靴子网格
├── Coat              # 大衣网格
├── Jacket            # 夹克网格
├── Karada            # 躯体细节网格
├── Pants             # 裤子网格
├── Shirt             # 衬衫网格
├── Tie               # 领带网格
├── AutoAnchorObject  # 锚点
├── MTear             # 眼泪特效
├── Costume           # 服装切换对象
└── ToggleProps       # 道具切换对象
```

::: tip
修改材质或纹理前，建议备份原文件。修改方法请参考[修改方法](/zh/menno/customization/)。
:::
