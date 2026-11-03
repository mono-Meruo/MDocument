---
title: MTear 泪水编辑器
nav_order: 3
---

# MTear泪编辑器

使用 MTear 可调节 Menno 泪水的形状、大小与流速。本节介绍了泪水 Mesh 的编辑方法与 Shader 设置参数。

<iframe width="560" height="315" src="https://www.youtube.com/embed/rcjnlMPjgCc?si=4v3UXY1mBSb9ByJN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 组件结构

| 组件名称 | 说明 |
|------|------|
| MTearEditor | 附加在 Avatar 上的组件 |
| MTearEditorWindow | 用于编辑泪水 Mesh 的窗口 |
| Menno_Tear | 泪水使用的 Shader |
| MennoTearEditor | Shader 的自定义 Inspector |

## 编辑泪水 Mesh

1. 打开 Menno Avatar。
2. 在 Hierarchy 面板中展开「Menno」对象。
3. 选择「MTear」对象。
4. 在 Inspector 中点击「编辑泪水 Mesh」按钮。
5. 在弹出的窗口（MTearEditorWindow）中，于「编辑对象」处选择包含泪水 Mesh 的对象。
6. 在 Scene 视图中点击蓝色或红色的球体（骨骼）。
7. 使用显示的手柄进行移动与旋转操作。

- 蓝色和红色分别代表左侧和右侧骨骼。移动任意一侧时，另一侧将自动镜像同步。
- 位置、旋转与缩放均可在 Inspector 中直接输入数值调整。
- 编辑期间会自动切换至视图工具，退出后将恢复为之前的工具状态。

## Shader 设置

通过 Menno_Tear Shader 调整泪水的外观表现。

| 参数项 | Shader 变量名 | 说明 |
|------|-------------|------|
| 泪水流速 | `_Speed` | 泪水的流动速率 |
| 泪水位置 | `_Tear_position` | 泪水的左右偏移量 |
| 泪池强度 | `_Tear_Puddle_intensity` | 眼窝内泪池的大小 |
| 泪滴强度 | `_Tear_Drop_intensity` | 脸颊流下泪水的视觉强度 |
| 泪滴尺寸 | `_Tear_Drop_Size` | 泪滴的大小 |
| 附加泪滴强度 | `_Tear_Drop_extra_intensity` | 次要泪滴的视觉强度 |
| 附加泪滴尺寸 | `_Tear_Drop_extra_Size` | 次要泪滴的大小 |
| 高光自发光 | `_Tear_Specular_Emissive` | 光泽部分的自发光强度 |
| 高光强度 | `_Tear_Specular_Strength` | 光泽的强度 |
| 描边强度 | `_Tear_Outline` | 边缘描边的强度 |
| 描边颜色 | `_Tear_Outline_Color` | 边缘描边的颜色 |
| 扭曲程度 | `_Tear_Distortion` | 背景的折射扭曲程度 |
| 最低光照限制 | `_LightMinLimit` | 暗处环境下的最小亮度保底值 |
| 最高光照限制 | `_LightMaxLimit` | 亮处环境下的最大亮度上限值 |

## 预设

通过 Shader 设置面板底部的按钮应用预设。您也可以将自己的参数保存为自定义预设。

| 预设名称 | 说明 |
|------|------|
| 标准 (Default) | 平衡且自然的泪水表现 |
| 小 (Small) | 小巧且低调的泪水效果 |
| 大 (Big) | 宏大且醒目的泪水效果 |
