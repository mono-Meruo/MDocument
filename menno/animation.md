---
title: アニメーション構造
nav_order: 4
---

# アニメーション構造

Mennoのアニメーションファイル、コントローラー、パラメーターの名前と場所を確認できます。表情やアイテムを改変するときの参照に使ってください。

## フォルダ構成

ファイルはすべて `Assets/emudotto/Menno/Animation/` にあります。

| フォルダ | 内容 |
|---|---|
| `AnimaitonLayer/` | アニメーションコントローラー |
| `FX_Body/` | 体のアニメーション |
| `FX_Face/` | 表情アニメーション |
| `FX_ToggleProp/` | トグルアイテムのアニメーション |
| `Gesture/` | ジェスチャーアニメーション |
| `Locomotion/` | 移動アニメーション |
| `ModularAvatar/` | Modular Avatar拡張 |
| `Parameters/` | VRChat SDKのメニューとパラメーター |

## アニメーションコントローラー

| コントローラー | 役割 |
|---|---|
| `AnimaitonLayer/Menno_Layer_FX.controller` | メインのFXコントローラー。表情・ボディライティング・トグルアイテムを管理 |
| `AnimaitonLayer/Menno_Layer_Gesture.controller` | 手のジェスチャー |
| `Menno_Props.controller` / `Menno_Props_Gesture.controller` | アイテムのトグルと関連するジェスチャー。アップロード時にModular AvatarがFXレイヤーへ統合 |

`Menno_Layer_FX.controller` の構成は次のとおりです。

```
Menno_Layer_FX.controller
├── 表情ステートマシン
│   ├── 初期状態_Base
│   ├── 笑顔_Smile
│   ├── 悲しみ_Sad
│   └── その他の表情...
├── ボディライティングステートマシン
│   ├── ライティング_OFF
│   └── ライティング_ON
└── トグルアイテムステートマシン
    ├── Pan_OFF / Pan_ON
    ├── Xondle_OFF / Xondle_ON
    └── Mokia_OFF / Mokia_ON
```

## 表情アニメーション（FX_Face）

主な表情です。このほかにも多くの表情があり、Expression Menuから選べます。

| アニメーション名 | 表情 |
|---|---|
| `Menno_初期状態_Base` | 初期状態 |
| `Menno_笑顔_Smile` | 笑顔 |
| `Menno_悲しみ_Sad` | 悲しい |
| `Menno_怒り_Angry` | 怒り |
| `Menno_驚愕_surprise` | 驚き |
| `Menno_泣く_Cry` | 泣き |
| `Menno_ハート_Heart` | 目がハート形 |
| `Menno_舌出し_Tongue` | 舌を出す |
| `Menno_和み_Calm` | リラックス |
| `Menno_目閉じ_Sleep` | 目を閉じる |
| `Menno_冷え_Cold` | 寒そう |
| `Menno_焦り_Impatience` | 焦り |

## ボディアニメーション（FX_Body）

| アニメーション名 | 内容 |
|---|---|
| `Menno_Body_Lighting` | 体のライティング調整 |
| `Menno_Body_Cheek` | PhysBoneで頬が引っ張られる |
| `Menno_Body_Cheek_L` | PhysBoneで左頬が引っ張られる |
| `Menno_Body_Cheek_R` | PhysBoneで右頬が引っ張られる |

## メニューとパラメーター（Parameters）

| ファイル | 内容 |
|---|---|
| `Menno_ExpressionParameters.asset` | 基本パラメーター |
| `Menno_ExpressionsMenu.asset` | メインメニュー |
| `Menno_FaceMenu.asset` | 表情メニュー |
| `Menno_FaceMenu1.asset` / `Menno_FaceMenu2.asset` / `Menno_FaceMenu3.asset` | 追加の表情メニュー |
| `Menno_Props.asset` / `Menno_Props_SubMenu.asset` | アイテムメニュー |

### 主なパラメーター

| パラメーター名 | タイプ | 内容 |
|---|---|---|
| `VRCFaceBlendH` | Float | 水平方向の表情ブレンド（VRChat標準） |
| `VRCFaceBlendV` | Float | 垂直方向の表情ブレンド（VRChat標準） |
| `GestureLeft` | Int | 左手のジェスチャー（VRChat標準） |
| `GestureRight` | Int | 右手のジェスチャー（VRChat標準） |
| `GestureLeftWeight` | Float | 左手のジェスチャーの強さ（VRChat標準） |
| `GestureRightWeight` | Float | 右手のジェスチャーの強さ（VRChat標準） |
| `FacialExpression` | Int | 表情の選択 |
| `BodyLighting` | Float | 体のライティング調整 |
| `Cheek` | Bool | 頬の引っ張りON/OFF |
| `CheekLeft` | Bool | 左頬の引っ張りON/OFF |
| `CheekRight` | Bool | 右頬の引っ張りON/OFF |
| `TogglePan` | Bool | フライパンの表示/非表示 |
| `ToggleXondle` | Bool | Xondle・Xontraの表示/非表示 |
| `ToggleMokia` | Bool | 携帯電話の表示/非表示 |

## 表情の切り替え方

1. VRChatでアクションメニューを開きます（PCは `R` キー、VRはアクションメニューボタン）。
2. Mennoのメニューから「表情」を開きます。
3. 使いたい表情を選びます。

メニューの階層は次のとおりです。

```
メインメニュー
├── 表情
│   ├── 基本表情
│   │   ├── 笑顔
│   │   ├── 悲しみ
│   │   └── ...
│   ├── 特殊表情
│   │   ├── ハート目
│   │   ├── 燃える目
│   │   └── ...
│   └── 感情表現
│       ├── 焦り
│       ├── 冷え
│       └── ...
└── アイテム
    ├── フライパン
    ├── Xondle
    └── Mokia
```
