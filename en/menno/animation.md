---
title: Animation Structure
nav_order: 4
---

# Animation Structure

View the names and locations of Menno's animation files, controllers, and parameters. Use this as a reference when modifying expressions or items.

## Folder Structure

All files are located in `Assets/emudotto/Menno/Animation/`.

| Folder | Contents |
|---|---|
| `AnimaitonLayer/` | Animation controllers |
| `FX_Body/` | Body animations |
| `FX_Face/` | Expression animations |
| `FX_ToggleProp/` | Toggle item animations |
| `Gesture/` | Gesture animations |
| `Locomotion/` | Locomotion animations |
| `ModularAvatar/` | Modular Avatar extensions |
| `Parameters/` | VRChat SDK menus and parameters |

## Animation Controllers

| Controller | Role |
|---|---|
| `AnimaitonLayer/Menno_Layer_FX.controller` | Main FX controller. Manages expressions, body lighting, and toggle items. |
| `AnimaitonLayer/Menno_Layer_Gesture.controller` | Hand gestures |
| `Menno_Props.controller` / `Menno_Props_Gesture.controller` | Item toggles and related gestures. Modular Avatar integrates them into the FX layer upon upload. |

The structure of `Menno_Layer_FX.controller` is as follows:

```
Menno_Layer_FX.controller
├── Expression State Machine
│   ├── Idle_State_Base
│   ├── Smile_Smile
│   ├── Sad_Sad
│   └── Other expressions...
├── Body Lighting State Machine
│   ├── Lighting_OFF
│   └── Lighting_ON
└── Toggle Item State Machine
    ├── Pan_OFF / Pan_ON
    ├── Xondle_OFF / Xondle_ON
    └── Mokia_OFF / Mokia_ON
```

## Expression Animations (FX_Face)

These are the primary expressions. Additional expressions are also available and can be selected from the Expression Menu.

| Animation name | Expression |
|---|---|
| `Menno_初期状態_Base` | Idle / Initial State |
| `Menno_笑顔_Smile` | Smile |
| `Menno_悲しみ_Sad` | Sad |
| `Menno_怒り_Angry` | Angry |
| `Menno_驚愕_surprise` | Surprise |
| `Menno_泣く_Cry` | Crying |
| `Menno_ハート_Heart` | Heart Eyes |
| `Menno_舌出し_Tongue` | Tongue Out |
| `Menno_和み_Calm` | Relaxed / Calm |
| `Menno_目閉じ_Sleep` | Eyes Closed |
| `Menno_冷え_Cold` | Cold / Shivering |
| `Menno_焦り_Impatience` | Impatient |

## Body Animations (FX_Body)

| Animation name | Contents |
|---|---|
| `Menno_Body_Lighting` | Body lighting adjustment |
| `Menno_Body_Cheek` | Cheek pulled by PhysBone |
| `Menno_Body_Cheek_L` | Left cheek pulled by PhysBone |
| `Menno_Body_Cheek_R` | Right cheek pulled by PhysBone |

## Menus and Parameters (Parameters)

| ファイル | 内容 |
|---|---|
| `Menno_ExpressionParameters.asset` | Base parameters |
| `Menno_ExpressionsMenu.asset` | Main menu |
| `Menno_FaceMenu.asset` | Expression menu |
| `Menno_FaceMenu1.asset` / `Menno_FaceMenu2.asset` / `Menno_FaceMenu3.asset` | Additional expression menus |
| `Menno_Props.asset` / `Menno_Props_SubMenu.asset` | Item menu |

### Primary Parameters

| パラメーター名 | タイプ | 内容 |
|---|---|---|
| `VRCFaceBlendH` | Float | Horizontal facial blend (VRChat standard) |
| `VRCFaceBlendV` | Float | Vertical facial blend (VRChat standard) |
| `GestureLeft` | Int | Left hand gesture (VRChat standard) |
| `GestureRight` | Int | Right hand gesture (VRChat standard) |
| `GestureLeftWeight` | Float | Left hand gesture weight (VRChat standard) |
| `GestureRightWeight` | Float | Right hand gesture weight (VRChat standard) |
| `FacialExpression` | Int | Expression selection |
| `BodyLighting` | Float | Body lighting adjustment |
| `Cheek` | Bool | Cheek pull ON/OFF |
| `CheekLeft` | Bool | Left cheek pull ON/OFF |
| `CheekRight` | Bool | Right cheek pull ON/OFF |
| `TogglePan` | Bool | Toggle pan display |
| `ToggleXondle` | Bool | Toggle Xondle/Xontra display |
| `ToggleMokia` | Bool | Toggle phone display |

## Switching Expressions

1. Open the Action Menu in VRChat (press `R` on PC, or the Action Menu button on VR).
2. Open "Expressions" from the Menno menu.
3. Select the desired expression.

The menu hierarchy is as follows:

```
Main Menu
├── Expressions
│   ├── Basic Expressions
│   │   ├── Smile
│   │   ├── Sad
│   │   └── ...
│   ├── Special Expressions
│   │   ├── Heart Eyes
│   │   ├── Burning Eyes
│   │   └── ...
│   └── Emotional Expressions
│       ├── Impatience
│       ├── Cold
│       └── ...
└── Items
    ├── Pan
    ├── Xondle
    └── Mokia
```
