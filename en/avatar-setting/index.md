---
title: M. Avatar Setting
description: Unity editor extension for adjusting an avatar's face, hair and items, with automatic setup.
nav_order: 3
---

# M. Avatar Setting

M. Avatar Setting is an editor extension for configuring the VRChat avatar Menno directly in Unity. It covers launch methods and automated setup.

## Required Tools

Please install the following tools first.

- [Modular Avatar](https://github.com/bdunderscore/modular-avatar/releases)
- [lilToon](https://booth.pm/ja/items/3087170)

## Launching

You can open it using either of the following methods.

### From the Menu

1. In the Unity menu, select `Window > M Avatar Setting`.

![Open from menu](/assets/images/mas_01.png)

### From the M. Avatar Setup Helper

1. Select the avatar in the Hierarchy.
2. Press the "Open M. Avatar Setting" button on the "M. Avatar Setup Helper" component in the Inspector.

The window will open while the avatar is selected.

![Open from Setup Helper](/assets/images/mas_02.png)

## Adding Animation Keys

Automatically registers the `_LightMinLimit` value (lower bound for brightness) across all materials in the avatar, which is used by the "Lighting Adjustment" Radial Puppet in the Expression Menu.

1. Open the M. Avatar Setting window.
2. Select an avatar.
3. Press the "Add Animation Keys" button.

![Adding animation keys](/assets/images/mas_03.png)

::: warning Note
This is not yet supported for components that modify hierarchy in Modular Avatar (future support planned).
:::

## Further Reading

The available settings vary depending on the avatar.

- [Menno's Settings](/en/menno/)
- [Update History](/en/avatar-setting/history/)
