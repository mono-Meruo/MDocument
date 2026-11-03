---
title: Customization
nav_order: 2
---

# Modification Guide

You can modify Menno's textures and materials, add outfits, and edit animations or expressions.

::: warning Note
Back up the original files before making major changes.
:::

## File Locations

| Target | Location |
|---|---|
| Textures (PSD) | `Assets/emudotto/Menno/Materials/Tex_Main/` |
| Materials | `Assets/emudotto/Menno/Materials/` |
| Animations | `Assets/emudotto/Menno/Animation/` |

## Changing Textures

1. Open the PSD file in `Tex_Main` with Photoshop, GIMP, or similar software.
2. Edit and save the file.
3. Return to Unity. Changes will be applied automatically.

## Modifying Materials

1. Select the material in the Project window (you can also select an object in the Hierarchy).
2. Adjust the lilToon parameters in the Inspector. For details, refer to the [lilToon documentation](https://lilxyzw.github.io/lilToon/ja_JP/first.html).

## Adding Outfits

Add them using Modular Avatar.

1. Double-click the outfit's `.unitypackage` file to import it into Unity.
2. Parent the outfit to Menno as a child object.
3. Right-click the outfit object and select `[ModularAvatar] Setup Outfit`.

Modular Avatar detects the outfit's armature, adds a Merge Armature component, and makes the outfit follow Menno's bones.

### Making Outfits Switchable via Expression Menu

1. Select the outfit object.
2. Add `MA Toggle Object` from "Add Component".
3. Set the "Default State" to On or Off.
4. Enter a display name in the "Menu Item Name" field.
5. Configure icons and menu hierarchy if needed.

## Editing Animations

1. Select the animation file in the Project window.
2. Open the Animation window.
3. Add and edit keyframes.
4. Save.

## Adding Expressions

1. Select Menno in the scene.
2. Select the Skinned Mesh Renderer for the body mesh.
3. Adjust expressions using "Blend Shapes" in the Inspector.
4. Record the adjusted expressions as keyframes in the Animation window.

Available shape keys can be viewed on the [Shape Keys](/en/menno/shapekeys/) page.
