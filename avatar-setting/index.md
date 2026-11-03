---
title: M. Avatar Setting
description: Unity エディタ拡張。アバターの顔・髪・アイテムの調整と自動セットアップ。
nav_order: 3
---

# M. Avatar Setting

M. Avatar Setting は、VRChat アバター Menno の設定を Unity 上で行うエディタ拡張です。起動方法と自動セットアップの使い方を確認できます。

## 必要なツール

先に次のツールをインストールしてください。

- [Modular Avatar](https://github.com/bdunderscore/modular-avatar/releases)
- [lilToon](https://booth.pm/ja/items/3087170)

## 起動する

次のどちらかの方法で開きます。

### メニューから開く

1. Unity のメニューから `Window > M Avatar Setting` を選びます。

![メニューから起動](/assets/images/mas_01.png)

### M. Avatar Setup Helper から開く

1. Hierarchy でアバターを選びます。
2. Inspector の「M. Avatar Setup Helper」コンポーネントにある「M. Avatar Settingを開く」ボタンを押します。

アバターが選ばれた状態でウィンドウが開きます。

![Setup Helperから起動](/assets/images/mas_02.png)

## アニメーションキーを追加する

Expression Menu の「ライティング調整」Radial Puppet が使うアニメーションに、アバター内の全マテリアルの明るさの下限（`_LightMinLimit`）を自動で登録します。

1. M. Avatar Setting ウィンドウを開きます。
2. アバターを選びます。
3. 「アニメーションキーを追加」ボタンを押します。

![アニメーションキー追加](/assets/images/mas_03.png)

::: warning 注意
Modular Avatar で階層を変更するコンポーネントには、まだ対応していません（今後対応予定）。
:::

## 次に読む

表示される設定はアバターごとに異なります。

- [Menno の設定](/menno/)
- [更新履歴](/avatar-setting/history/)
