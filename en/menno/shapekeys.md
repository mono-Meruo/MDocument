---
title: Shape Keys List
nav_order: 6
---

# Shape Key List

You can look up the names and purposes of Menno's shape keys (885 in total). Use them as a reference when adjusting facial expressions or body proportions.

## Usage

1. Select the model in Unity's Inspector.
2. Open the SkinnedMeshRenderer component.
3. Adjust the slider for each shape key under "Blend Shapes" (0 = disabled, 100 = maximum).

Combine multiple shape keys to create custom expressions or body shapes.

## Face (855 keys)

There are 697 functional shape keys (excluding Empty and divider keys). Each category includes options for both eyes, as well as left (`_L`) and right (`_R`) versions, allowing for asymmetrical expressions.

| Category | Count | Description |
|---------|-----|------|
| VRC | 18 | VRChat compatible (audio visemes like v_aa, v_ch, v_dd, and gaze control) |
| EYE | 51 | Eye expressions (closing, smiling, upturned eyes, droopy eyes, half-closed eyes, etc.) |
| EYE_EX | 3 | Eye shader effects (Shader_ON, Shader_Big, Grabpass_ON, etc.) |
| EYE_Action | 7 | Special eye effects (tears, hearts, swirling, dazed, stars, etc.) |
| EYE_Option | 67 | Detailed eye adjustments (lighting, dark circles, position, size, spacing, etc.) |
| PUPIL_Option | 35 | Pupil adjustments (white pupils, converging/diverging, scaling, forward/backward movement) |
| IRIS_Option | 18 | Iris/white area adjustments (blurring, size, forward/backward movement) |
| EYELID_Option | 74 | Eyelid adjustments (tips, edges, fine movements up/down/left/right) |
| EYELASH | 12 | Eyelash expressions (narrowed eyes, sleepy eyes, soft eyes, etc.) |
| EYELASH_Option | 48 | Eyelash adjustments (thickness, length, position for upper/lower lashes) |
| EYEBROW | 48 | Eyebrow expressions (up/down, smiling, angry, confused, fine movements per segment) |
| EYEBROW_Option | 10 | Eyebrow adjustments (thickness, shape, position) |
| MOUTH | 53 | Mouth expressions (vowels a/i/u/e/o, smiling, nikka, triangle, omega, etc.) |
| MOUTH_Option | 8 | Mouth adjustments (gum line, forward/backward position, cheeks) |
| TONGUE | 12 | Tongue expressions (peep out, bend, forward/back/up/down movement) |
| TONGUE_Option | 6 | Tongue adjustments (thin, thick, flat, volume, length) |
| TEETH_Option | 15 | Teeth adjustments (gum line, jaggedness, upper/lower positioning) |
| FACE | 6 | Full-face effects (blushing, dazed expression, wrinkles, etc.) |
| NOSE_Option | 7 | Nose position adjustments (up/down/left/right, forward/backward) |
| EAR_Option | 6 | Ear adjustments (elf ears, size, etc.) |
| JAW_Option | 14 | Jaw adjustments (roundness, cheekbone shape, length, sharpness) |
| SHRINK_Option | 2 | Feature scaling (neck, ears) |
| MMD | 47 | MikuMikuDance compatible expressions (a/i/u/e/o, smirk, wink, etc.) |
| Perfect-Sync | 52 | Expression sync (experimental) |
| Empty (for updates) | 183 | Empty slots for updates |

Expression keys (EYE, MOUTH, EYEBROW, etc.) can be used for shaping adjustments, while adjustment keys (`_Option` suffix. e.g., EYE_Option, MOUTH_Option, JAW_Option) can be used for expression animations.

### Perfect-Sync (Experimental)

This set enables more natural expression syncing. It controls the eyebrows (inner upper, outer upper, lower, etc.), eyes (up/down/left/right, blinking, squinting, etc.), cheeks (puffing, tightening, etc.), nose (wrinkling, etc.), jaw (open/close, forward/backward/left/right, etc.), and various mouth shapes. This may be changed in future updates.

## Body (30 keys)

Used to scale individual body parts. Targets include the neck, shoulders, arms, hands, fingers, chest, back, waist, legs, and feet.

## Hair (50 keys)

Included in the Hair_Bangs object (functional shape keys excluding Empty). Numbered keys (01, 02, etc.) correspond to individual hair strands, allowing you to move or reshape specific clumps.

### BANGS_Option (Bangs, 31 keys)

| Shape Key | Description |
|-------------|------|
| BANGS_OP_短く_Short | Shorten bangs |
| BANGS_OP_長く_Long | Lengthen bangs |
| BANGS_OP_ずらす_Shift | Shift bangs sideways |
| BANGS_OP_ねぐせ_Bedhair | Bedhead style |
| BANGS_OP_ぱっつん_Straight | Straight bangs |
| BANGS_OP_ぱっつん短い_StraightShort | Short straight bangs |
| BANGS_OP_ぱっつん長め_StraightLong | Long straight bangs |
| BANGS_OP_01_Long～BANGS_OP_12_Long | Adjust individual bang clumps (long) |
| BANGS_OP_01_Short～BANGS_OP_12_Short | Adjust individual bang clumps (short) |

### FRONT_Option (Front hair, 5 keys)

| Shape Key | Description |
|-------------|------|
| FRONT_OP_01_Long | Adjust one front hair clump |
| FRONT_OP_02_Long | Adjust another front hair clump |
| FRONT_OP_01_Short | Adjust one front hair clump (short) |
| FRONT_OP_02_Short | Adjust another front hair clump (short) |
| FRONT_OP_Empty | Empty |

### SIDES_Option (Side hair, 14 keys)

| Shape Key | Description |
|-------------|------|
| SIDES_OP_短く_Short | Shorten side hair |
| SIDES_OP_長く_Long | Lengthen side hair |
| SIDES_OP_ぱっつん_Straight | Straighten side hair |
| SIDES_OP_01_Long～SIDES_OP_05_Long | Adjust individual side hair clumps (long) |
| SIDES_OP_01_Short～SIDES_OP_05_Short | Adjust individual side hair clumps (short) |
| SIDES_OP_Empty | Empty |

## Empty Shape Keys

Adding shape keys in the middle of a list in Unity can shift existing indices, causing preset values to mismatch. To prevent this, a number of empty shape keys (Empty) are pre-allocated, and new features are added to these slots during updates.

## Fixing Expression Animations

::: warning Note
If you make significant changes to the eyes, mouth, or other features, default expression animations built on the original mesh may break (causing unnatural blinking, desynced lip-sync, etc.). In such cases, adjust the animation using the following steps.
:::

1. Select the root object of the Menno avatar.
2. Assign `Menno_Layer_FX.controller` to the Animator component (contains default expression animation settings).
3. Open the Animation window via `Window > Animation > Animation`.
4. Select the Menno avatar in the scene.
5. Choose an existing expression animation in the Animation window.
6. Click the keyframe for the modified shape key and edit its value.
7. Verify the expression movement in VRChat Gesture Manager or similar tools, and make fine adjustments if needed.
