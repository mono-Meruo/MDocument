---
title: Face Shape Key Preset (Detailed Guide)
nav_order: 3
---

# Face Shape Key Presets (Detailed Guide)

Learn how the buttons work, how values are calculated when stacking presets, where they are saved, and how to troubleshoot issues. Basic steps are in the [Quick Start](/en/menno/mas-settings/face/preset-quickstart/).

![Preset Feature UI](/assets/images/preset_ui.png)

## Interface Items

| Item | Function |
|---|---|
| "Save" button | Saves the current blendshape configuration with the entered name |
| "Strength" slider | Applies the preset at 0–100% intensity. Changes reflect on the face immediately |
| Folder button (next to "Saved Presets:") | Opens the save folder in the project window |
| "X" button | Deletes the preset after confirmation |

## How Presets Are Applied

- Applying a preset does not completely overwrite the current configuration; its effect can be adjusted with intensity.
- When multiple presets are applied simultaneously, their values are added (e.g., smile 0.5 + 0.3 = 0.8).
- Values never exceed 1.0 (e.g., 0.7 + 0.6 results in 1.0, not 1.3).
- Later-applied presets take priority. Presets with 0% intensity are ignored.
- Real-time manual adjustments always take priority.

## Saved Files

Presets are saved as `.asset` files in the following folder. Contents include the preset name, values for each blendshape (0.0–1.0), and the creation timestamp.

```
Assets/emudotto/Menno/Resources/Face_Presets/
```

Presets are saved per project and persist across Unity restarts.

## Using in Other Projects

Preset files can be copied to other projects for use. When selling or distributing them, follow the rules in the [Distribution Guide](/en/menno/mas-settings/face/preset-distribution/).

### Exporting

1. Open the `Face_Presets` folder in the Project window.
2. Select the preset files you want to share.
3. Right-click and select "Export Package".

### Importing

1. Drag and drop the received files into the project.
2. Place the files in the `Face_Presets` folder. If exported from a `Face_Presets` folder, they will be placed here automatically.
3. Reopen the M. Avatar Setting window.

## Troubleshooting

| Symptom | Cause | Solution |
|---|---|---|
| Fails to save | Missing file write permissions | Check permissions for the Unity project folder |
| Fails to apply | Blendshape name was changed | Recreate the preset or manually edit the .asset file |
| Intensity has no effect | Another script is controlling the blendshapes | Disable conflicting scripts or adjust execution order |
