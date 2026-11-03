---
title: 導入方法
nav_order: 1
---

# 導入方法

BOOTH で購入した Menno を Unity に導入し、VRChat にアップロードするまでの手順です。

## 動画（導入と M. Avatar Setting の操作）

<iframe width="560" height="315" src="https://www.youtube.com/embed/imeaf9TB4ME?si=0a-RL1EgCnXRjdrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 必要なもの

| 必要なもの | 入手方法 |
|---|---|
| [VRChat Creator Companion (VCC)](https://vcc.docs.vrchat.com/#download-it) | 公式サイトからダウンロード |
| Unity 2022.3.x | VCC からインストール |
| lilToon | `1. liltoon and MA.unitypackage` に同梱 |
| Modular Avatar | `1. liltoon and MA.unitypackage` に同梱 |

## ダウンロードファイルの中身

BOOTH のファイルを解凍すると、次の構成になっています。

```
License/                         # ライセンス PDF（en / ja / ko / zh）
Resources/
  Menno/                         # FBX、Texture
  ToggleProps/                   # FBX、Texture
1. liltoon and MA.unitypackage   # lilToon と Modular Avatar（1番目にインポート）
2. Menno.unitypackage            # Menno 本体（2番目にインポート）
```

## 導入手順

### 1. プロジェクトを作成する

1. VCC をダウンロードしてインストールします（[VCC](https://vcc.docs.vrchat.com/#download-it) または [VRChat 公式サイト](https://vrchat.com/home/download)）。
2. VCC を起動し、初回セットアップを完了します。Unity Hub と Unity 2022.3.x がなければ、ここでインストールします。
3. 「新規プロジェクト作成」をクリックします。
4. プロジェクト名と保存先を指定します。
5. テンプレートに「Avatar」を選びます。
6. 「プロジェクト作成」をクリックします。
7. 「Unityで開く」をクリックします。

### 2. パッケージをインポートする

1. `1. liltoon and MA.unitypackage` をダブルクリックします。
2. インポートウィンドウで「Import」をクリックします。
3. `2. Menno.unitypackage` をダブルクリックします。
4. インポートウィンドウで「Import」をクリックします。

アバターは `Assets/emudotto/Menno` に入ります。M. Avatar Setting も同梱されているため、別途インポートは不要です。

::: tip
VCC から Modular Avatar をインストール済みの場合、`1. liltoon and MA.unitypackage` のインポートは不要です。
:::

### 3. シーンに配置する

次のどちらかで配置します。

- **サンプルシーンを使う（推奨）**: `Assets/emudotto/Menno/MennoScene.unity` をダブルクリックして開きます。アバター、環境、ライティングが設定済みです。
- **既存のシーンに追加する**: `Assets/emudotto/Menno/Menno.prefab` をシーンビューにドラッグ＆ドロップします。

### 4. M. Avatar Setting で設定する

1. シーン内の Menno を選択します。
2. M. Avatar Setting を開きます。メニューの `Window > M Avatar Setting`、または Inspector の「M. Avatar Settingを開く」ボタンから開けます。
3. 必要な設定をします。使い方は [M. Avatar Setting](/avatar-setting/) を参照してください。

### 5. VRChat にアップロードする

1. シーン内の Menno を選択します。
2. VRChat SDK のコントロールパネルを開きます。
3. 「Build & Publish」をクリックします。
4. 必要な情報を入力してアップロードします。
