---
title: Installation
nav_order: 1
---

# Installation

Steps to install Menno purchased from BOOTH into Unity and upload it to VRChat.

## Video (Installation and M. Avatar Setting Usage)

<iframe width="560" height="315" src="https://www.youtube.com/embed/imeaf9TB4ME?si=0a-RL1EgCnXRjdrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requirements

| Requirement | How to get it |
|---|---|
| [VRChat Creator Companion (VCC)](https://vcc.docs.vrchat.com/#download-it) | Download from the official website |
| Unity 2022.3.x | Install via VCC |
| lilToon | Included in `1. liltoon and MA.unitypackage` |
| Modular Avatar | Included in `1. liltoon and MA.unitypackage` |

## Archive Contents

Extracting the BOOTH archive yields the following structure:

```
License/                         # License PDF (en / ja / ko / zh)
Resources/
  Menno/                         # FBX, Texture
  ToggleProps/                   # FBX, Texture
1. liltoon and MA.unitypackage   # lilToon and Modular Avatar (import first)
2. Menno.unitypackage            # Menno package (import second)
```

## Installation Steps

### 1. Create a Project

1. Download and install VCC ([VCC](https://vcc.docs.vrchat.com/#download-it) or [VRChat official website](https://vrchat.com/home/download)).
2. Launch VCC and complete the initial setup. If you do not have Unity Hub or Unity 2022.3.x, install them here.
3. Click "Create New Project".
4. Specify the project name and save location.
5. Select "Avatar" as the template.
6. Click "Create Project".
7. Click "Open in Unity".

### 2. Import Packages

1. Double-click `1. liltoon and MA.unitypackage`.
2. Click "Import" in the import window.
3. Double-click `2. Menno.unitypackage`.
4. Click "Import" in the import window.

The avatar is placed in `Assets/emudotto/Menno`. M. Avatar Setting is included, so no additional import is required.

::: tip
If you have already installed Modular Avatar via VCC, importing `1. liltoon and MA.unitypackage` is not required.
:::

### 3. Place in Scene

Place it using one of the following methods:

- **Use Sample Scene (Recommended)**: Double-click `Assets/emudotto/Menno/MennoScene.unity` to open it. The avatar, environment, and lighting are already configured.
- **Add to Existing Scene**: Drag and drop `Assets/emudotto/Menno/Menno.prefab` into the scene view.

### 4. Configure with M. Avatar Setting

1. Select Menno in the scene.
2. Open M. Avatar Setting. You can access it from the menu (`Window > M Avatar Setting`) or click the "Open M. Avatar Setting" button in the Inspector.
3. Apply the required settings. Refer to [M. Avatar Setting](/en/avatar-setting/) for usage instructions.

### 5. Upload to VRChat

1. Select Menno in the scene.
2. Open the VRChat SDK Control Panel.
3. Click "Build & Publish".
4. Enter the required information and upload.
