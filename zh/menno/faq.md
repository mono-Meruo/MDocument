---
title: 常见问题（FAQ）
nav_order: 8
---

# 常见问题（FAQ）

您可以在此查看 Menno 常见问题的原因与解决方法。

## 视线（EyePointer）

### 安装了 Siromori Eye Pointer 但眼睛不移动是为什么？

[Siromori Eye Pointer](https://booth.pm/ja/items/4742883) 的默认动画未兼容 Menno 的 `UpperChest` 骨骼。您可以通过以下任一方法进行修复。

**使用 M. Avatar Setting v1.2.8 及以上版本修复**

1. 下载 [Menno_v1.01_M.AvatarSetting_v1.2.8.zip](https://emudotto.booth.pm/items/6504220)。
2. 在导入界面中仅勾选 `Scripts` 文件夹并导入。
3. 打开 Unity 菜单中的 `Window > M Avatar Setting`。
4. 展开窗口最下方的调试区域。
5. 点击“fixEyePointer”按钮。

::: warning 注意
如果也导入了 `Scripts` 以外的文件夹，可能会覆盖 Menno 的纹理和材质。
:::

**手动修复**

1. 打开以下动画文件：
   - `Assets/Siromori/EyePointer/Animations/Toggle_Off.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On_NoLook.anim`
2. 在文件内所有眼部骨骼路径（如 `LeftEye`、`RightEye` 等）中添加 `UpperChest`。示例：将 `Armature/Hips/Spine/Chest/Neck/Head/LeftEye` 修改为 `Armature/Hips/Spine/Chest/UpperChest/Neck/Head/LeftEye`。

## 服装

### 穿着特定服装时，按 Z 键蹲下后姿势无法恢复是为什么？

因为该服装 Armature 正下方存在 Shape Type 为 `Plane` 且 X 轴旋转为 90 度的碰撞体对象。将其 X 轴旋转值从 `90` 修改为 `0` 即可修复。

已确认存在此问题的服装：

- Pirouette 出品的 [Arcane Attire](https://booth.pm/ja/items/6151859)（魔法师风格）：请遵循下载页面中的 “plusheadのルェルツ_Rwerutu_に着せる方へ.png” 步骤。
- ISHTAR LIBERALIS 出品的 [Theologica](https://booth.pm/ja/items/6350299)（修女风格）：将碰撞体的 X 轴旋转值从 `90` 修改为 `0`。

## 其他问题

### 这里没有的问题应该在哪里咨询？

请通过 [X (Twitter)](https://x.com/_emudotto) 联系我们。
