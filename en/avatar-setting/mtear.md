---
title: MTear Tear Editor
nav_order: 3
---

# MTear Tear Editor

Adjust the shape, size, and flow speed of tears for Menno avatars with MTear. This page covers tear mesh editing procedures and shader configuration options.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rcjnlMPjgCc?si=4v3UXY1mBSb9ByJN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Components

| Name | Description |
|------|-------------|
| MTearEditor | Component attached to the avatar |
| MTearEditorWindow | Window for editing tear meshes |
| Menno_Tear | Tear shader |
| MennoTearEditor | Custom inspector for the shader |

## Editing Tear Meshes

1. Open the Menno avatar.
2. Expand the "Menno" object in the Hierarchy.
3. Select the "MTear" object.
4. Click the "Edit Tear Mesh" button in the MTearEditor component on the Inspector.
5. In the opened window (MTearEditorWindow), select the object containing the tear mesh from the "Target Object" field.
6. Click a blue or red sphere (bone) in the Scene view.
7. Move and rotate using the displayed handles.

- Blue and red represent the left and right bones. Moving one side automatically mirrors the changes to the other.
- Position, rotation, and scale can also be entered numerically in the Inspector.
- The View tool is automatically activated during editing and reverts to the previous tool upon completion.

## Shader Settings

Adjust the appearance of tears using the Menno_Tear shader.

| Setting | Parameter | Description |
|------|-------------|------|
| Tear speed | `_Speed` | Flow speed of tears |
| Tear position | `_Tear_position` | Horizontal position of tears |
| Puddle intensity | `_Tear_Puddle_intensity` | Size of the tear pool in the eye |
| Drop intensity | `_Tear_Drop_intensity` | Intensity of tears flowing down the cheek |
| Drop size | `_Tear_Drop_Size` | Size of tear drops |
| Extra drop intensity | `_Tear_Drop_extra_intensity` | Intensity of secondary tear drops |
| Extra drop size | `_Tear_Drop_extra_Size` | Size of secondary tear drops |
| Specular emissive | `_Tear_Specular_Emissive` | Specular glow intensity |
| Specular strength | `_Tear_Specular_Strength` | Specular intensity |
| Outline | `_Tear_Outline` | Outline thickness/strength |
| Outline color | `_Tear_Outline_Color` | Outline color |
| Distortion | `_Tear_Distortion` | Background distortion amount |
| Light min limit | `_LightMinLimit` | Minimum brightness in dark areas |
| Light max limit | `_LightMaxLimit` | Maximum brightness in bright areas |

## Presets

Apply settings using the buttons at the bottom of the shader settings. You can also save your custom configuration as a preset.

| Name | Description |
|------|-------------|
| Standard (Default) | Balanced, standard tears |
| Small (Small) | Subtle, smaller tears |
| Big (Big) | Large, prominent tears |
