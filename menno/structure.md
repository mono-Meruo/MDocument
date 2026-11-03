---
title: 構造説明
nav_order: 3
---

# 構造説明

Menno のファイルの置き場所と、プレハブの中身を確認できます。

## フォルダ構成

```
Assets/emudotto/Menno/
├── Animation/            # アニメーションファイル
│   ├── ModularAvatar/    # ModularAvatar用のオブジェクト
│   │   └── Costume/      # M. Avatar Settingで使う衣装切り替え用Toggle
│   └── Controllers/      # アニメーションコントローラー
├── FBX/                  # 3Dモデルファイル
├── Materials/            # マテリアルファイル
│   ├── Presets/          # 髪の色などのプリセット
│   └── Tex_Main/         # テクスチャファイル
├── Materials_Props/      # アイテムのマテリアルファイル
│   └── Tex_Props/        # テクスチャファイル
├── Prefab/               # プレハブファイル
│   └── ToggleProps.prefab # アイテム用プレハブ
├── Menno.prefab          # Mennoアバターのメインプレハブ
└── MennoScene.unity      # シーン
```

## Menno.prefab

アバター本体のプレハブです。シーンにドラッグ＆ドロップして使います。

| コンポーネント | 役割 |
|---|---|
| VRC Avatar Descriptor | VRChat アバターの設定 |
| M Avatar Setup Helper | M. Avatar Setting との連携 |
| Animator | アニメーションの制御 |
| Modular Avatar コンポーネント群 | アバターのカスタマイズ |

## プレハブの階層

```
Menno (ルートオブジェクト)
├── Armature          # アバターのボーン
├── Body              # ボディメッシュ
├── Hair              # 髪の毛メッシュ
├── Hair_Bangs        # 前髪メッシュ
├── Belt              # ベルトメッシュ
├── Boots             # ブーツメッシュ
├── Coat              # コートメッシュ
├── Jacket            # ジャケットメッシュ
├── Karada            # 体のディテールメッシュ
├── Pants             # パンツメッシュ
├── Shirt             # シャツメッシュ
├── Tie               # ネクタイメッシュ
├── AutoAnchorObject  # アンカーポイント
├── MTear             # 涙のエフェクト
├── Costume           # 衣装切り替え用オブジェクト
└── ToggleProps       # トグルアイテム用オブジェクト
```

::: tip
マテリアルやテクスチャを変更する前に、元のファイルをバックアップしておくと安心です。変更方法は[改変方法](/menno/customization/)を参照してください。
:::
