---
title: Structure
nav_order: 3
---

# Structure Explanation

This section covers the Menno file structure and prefab contents.

## Folder Structure

```
Assets/emudotto/Menno/
├── Animation/            # Animation files
│   ├── ModularAvatar/    # Objects for ModularAvatar
│   │   └── Costume/      # Toggle for costume switching used by M. Avatar Setting
│   └── Controllers/      # Animation controllers
├── FBX/                  # 3D model files
├── Materials/            # Material files
│   ├── Presets/          # Presets for hair color, etc.
│   └── Tex_Main/         # Texture files
├── Materials_Props/      # Item material files
│   └── Tex_Props/        # Texture files
├── Prefab/               # Prefab files
│   └── ToggleProps.prefab # Item prefabs
├── Menno.prefab          # Main prefab for the Menno avatar
└── MennoScene.unity      # Scene file
```

## Menno.prefab

This is the prefab for the avatar itself. Drag and drop it into a scene to use it.

| Component | Purpose |
|---|---|
| VRC Avatar Descriptor | VRChat avatar settings |
| M Avatar Setup Helper | Integration with M. Avatar Setting |
| Animator | Animation control |
| Modular Avatar components | Avatar customization |

## Prefab Hierarchy

```
Menno (Root Object)
├── Armature          # Avatar bones
├── Body              # Body mesh
├── Hair              # Hair mesh
├── Hair_Bangs        # Bangs mesh
├── Belt              # Belt mesh
├── Boots             # Boots mesh
├── Coat              # Coat mesh
├── Jacket            # Jacket mesh
├── Karada            # Body detail mesh
├── Pants             # Pants mesh
├── Shirt             # Shirt mesh
├── Tie               # Tie mesh
├── AutoAnchorObject  # Anchor point
├── MTear             # Tear effect
├── Costume           # Object for costume switching
└── ToggleProps       # Object for toggle items
```

::: tip
It is recommended to back up the original files before modifying materials or textures. See [Customization Guide](/en/menno/customization/) for instructions on how to make changes.
:::
