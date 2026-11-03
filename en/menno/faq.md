---
title: Frequently Asked Questions (FAQ)
nav_order: 8
---

# Frequently Asked Questions (FAQ)

Check the causes and fixes for common issues in Menno.

## Gaze (EyePointer)

### Why won't the eyes move after installing Siromori Eye Pointer?

The default animation of [Siromori Eye Pointer](https://booth.pm/ja/items/4742883) does not support the `UpperChest` bone in Menno. You can fix this using either of the following methods.

**To fix with M. Avatar Setting v1.2.8 or later**

1. Download [Menno_v1.01_M.AvatarSetting_v1.2.8.zip](https://emudotto.booth.pm/items/6504220).
2. In the import window, check only the `Scripts` folder and import it.
3. Open `Window > M Avatar Setting` from the Unity menu.
4. Expand the Debug section at the bottom of the window.
5. Click the "fixEyePointer" button.

::: warning Note
Importing folders other than `Scripts` may overwrite Menno's textures and materials.
:::

**To fix manually**

1. Open the following animation files:
   - `Assets/Siromori/EyePointer/Animations/Toggle_Off.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On_NoLook.anim`
2. Add `UpperChest` to all eye bone paths in the file (e.g., `LeftEye`, `RightEye`). Example: Change `Armature/Hips/Spine/Chest/Neck/Head/LeftEye` to `Armature/Hips/Spine/Chest/UpperChest/Neck/Head/LeftEye`.

## Clothing

### Why doesn't the pose revert after crouching with Z when wearing certain outfits?

This occurs because there is a collider object directly under the outfit's Armature with a Shape Type of `Plane` and an X-axis rotation of 90 degrees. Change the X-axis rotation of that collider from `90` to `0` to fix it.

Confirmed outfits:

- Pirouette's "[Arcane Attire](https://booth.pm/ja/items/6151859)" (Mage-style): Follow the steps in "plusheadのルェルツ_Rwerutu_に着せる方へ.png" on the download page.
- ISHTAR LIBERALIS's "[Theologica](https://booth.pm/ja/items/6350299)" (Novice-style): Change the collider's X-axis rotation from `90` to `0`.

## Other

### Where should I ask questions not listed here?

Please contact [X (Twitter)](https://x.com/_emudotto).
