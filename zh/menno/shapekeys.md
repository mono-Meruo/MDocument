---
title: 形状键列表
nav_order: 6
---

# 形状键列表

您可以查阅 Menno 的形状键（共 885 个）的名称和用途。请在调整表情或体型时参考此列表。

## 使用方法

1. 在 Unity 的 Inspector 中选择模型。
2. 展开 SkinnedMeshRenderer 组件。
3. 在 Blend Shapes 中拖动各个形状键的滑块（0 = 无效果，100 = 最大）。

通过组合多个形状键，您可以创建个性化的表情或体型。

## 面部（855 个）

具备功能的形状键共有 697 个（不含 Empty 和分隔用）。每个类别均包含双眼、左眼（`_L`）及右眼（`_R`）版本，支持创建左右不对称的表情。

| 类别 | 数量 | 说明 |
|---------|-----|------|
| VRC | 18 | VRChat 专用（用于语音识别如 v_aa/v_ch/v_dd，及视线控制） |
| EYE | 51 | 眼部表情（闭合、微笑、吊眼、垂眼、眯眼等） |
| EYE_EX | 3 | 眼部 Shader 特效（Shader_ON、Shader_Big、Grabpass_ON 等） |
| EYE_Action | 7 | 眼部特殊特效（眼泪、爱心、旋转、眩晕、星星等） |
| EYE_Option | 67 | 眼部细节调整（光泽、黑眼圈、位置、大小、间距等） |
| PUPIL_Option | 35 | 瞳孔调整（白瞳、收缩、扩散、大小变化、前后移动等） |
| IRIS_Option | 18 | 眼白区域调整（模糊、大小、前后移动等） |
| EYELID_Option | 74 | 眼睑调整（尖端、尾端、上下左右的细微动作等） |
| EYELASH | 12 | 睫毛表情（眯眼、下垂眼、柔和眼等） |
| EYELASH_Option | 48 | 睫毛调整（上下睫毛粗细、长度、位置等） |
| EYEBROW | 48 | 眉毛表情（上下移动、微笑、愤怒、苦恼、各部位动作等） |
| EYEBROW_Option | 10 | 眉毛调整（粗细、形状、位置等） |
| MOUTH | 53 | 口腔表情（口型发音、微笑、苦笑、△、ω 等） |
| MOUTH_Option | 8 | 口腔调整（咬合、前后位置、脸颊等） |
| TONGUE | 12 | 舌头表情（伸出、弯曲、前后上下移动等） |
| TONGUE_Option | 6 | 舌头调整（细、粗、扁平、增厚、长度等） |
| TEETH_Option | 15 | 牙齿调整（咬合、锯齿状、上下位置等） |
| FACE | 6 | 面部整体特效（脸红、眩晕、皱纹等） |
| NOSE_Option | 7 | 鼻子位置（上下左右、前后等） |
| EAR_Option | 6 | 耳朵调整（精灵耳、大小等） |
| JAW_Option | 14 | 下巴调整（圆润度、下颌形状、长度、锐利度等） |
| SHRINK_Option | 2 | 面部区域缩小（颈部、耳朵） |
| MMD | 47 | MikuMikuDance 兼容表情（口型发音、坏笑、眨眼等） |
| Perfect-Sync | 52 | 表情同步专用（实验中） |
| 更新用 Empty | 183 | 更新预留位 |

您也可将表情类（EYE、MOUTH、EYEBROW 等）用于基础形变调整，将调整类（`_Option` 系列，如 EYE_Option、MOUTH_Option、JAW_Option）用于表情动画制作。

### Perfect-Sync（实验中）

本套装旨在实现更自然的面部表情同步。支持控制眉毛（内侧上/外侧上/下等）、眼睛（上下左右/眨眼/眯眼等）、脸颊（鼓起/收紧等）、鼻子（皱纹堆积等）、下巴（开合/前后左右等）以及口型。后续更新可能会对此进行调整。

## 身体（30 个）

用于按身体部位进行缩小调整。适用对象包括颈部、肩膀、手臂、手部、手指、胸部、背部、腰部、腿部及足部等。

## 头发（50 个）

包含于 Hair_Bangs 对象中（不含 Empty 的功能性形状键）。带编号的形状键（如 01、02 等）对应单股发束，可单独移动或改变特定发束的形状。

### BANGS_Option（刘海，31 个）

| 形状键 | 说明 |
|-------------|------|
| BANGS_OP_短く_Short | 缩短刘海 |
| BANGS_OP_長く_Long | 延长刘海 |
| BANGS_OP_ずらす_Shift | 横向偏移刘海 |
| BANGS_OP_ねぐせ_Bedhair | 翘起发丝造型 |
| BANGS_OP_ぱっつん_Straight | 齐刘海 |
| BANGS_OP_ぱっつん短い_StraightShort | 短款齐刘海 |
| BANGS_OP_ぱっつん長め_StraightLong | 长款齐刘海 |
| BANGS_OP_01_Long～BANGS_OP_12_Long | 逐根调整刘海发束 |
| BANGS_OP_01_Short～BANGS_OP_12_Short | 逐根调整刘海发束 |

### FRONT_Option（刘海区域，5 个）

| 形状键 | 说明 |
|-------------|------|
| FRONT_OP_01_Long | 调整一缕前发 |
| FRONT_OP_02_Long | 调整另一缕前发 |
| FRONT_OP_01_Short | 调整一缕前发 |
| FRONT_OP_02_Short | 调整另一缕前发 |
| FRONT_OP_Empty | 空 |

### SIDES_Option（侧发，14 个）

| 形状键 | 说明 |
|-------------|------|
| SIDES_OP_短く_Short | 缩短侧发 |
| SIDES_OP_長く_Long | 延长侧发 |
| SIDES_OP_ぱっつん_Straight | 齐整侧发 |
| SIDES_OP_01_Long～SIDES_OP_05_Long | 逐根调整侧发发束 |
| SIDES_OP_01_Short～SIDES_OP_05_Short | 逐根调整侧发发束 |
| SIDES_OP_Empty | 空 |

## Empty 形状键

若在 Unity 中中途插入形状键，可能导致原有顺序错乱及已配置数值失配。为防止此问题，系统预先预留了大量空形状键（Empty），后续更新将直接向这些预留位添加新功能。

## 修正表情动画

::: warning
大幅修改眼部或口腔形状时，可能会破坏基于原始形态设计的默认表情动画（导致眨眼生硬、口型错位等）。此时请按以下步骤调整动画：
:::

1. 选择 Menno Avatar 的根对象。
2. 为 Animator 组件分配 `Menno_Layer_FX.controller`（内置表情动画默认配置）。
3. 打开 `Window > Animation > Animation` 窗口。
4. 在场景中选中 Menno Avatar。
5. 在 Animation 窗口中打开现有的表情动画。
6. 点击已修改形状键的关键帧并编辑数值。
7. 使用 VRChat Gesture Manager 等工具预览表情动态，必要时进行微调。
