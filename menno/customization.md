---
title: 改変方法
nav_order: 2
---

# 改変方法

Menno のテクスチャやマテリアルの変更、衣装の追加、アニメーションや表情の編集ができます。

::: warning 注意
大きく改変する前に、元のファイルをバックアップしてください。
:::

## ファイルの場所

| 対象 | 場所 |
|---|---|
| テクスチャ（PSD） | `Assets/emudotto/Menno/Materials/Tex_Main/` |
| マテリアル | `Assets/emudotto/Menno/Materials/` |
| アニメーション | `Assets/emudotto/Menno/Animation/` |

## テクスチャを変更する

1. `Tex_Main` の PSD を Photoshop や GIMP などで開きます。
2. 編集して保存します。
3. Unity に戻ります。変更は自動で反映されます。

## マテリアルを変更する

1. Project ウィンドウでマテリアルを選択します（Hierarchy でオブジェクトを選んでも構いません）。
2. Inspector で lilToon のパラメータを調整します。詳しくは [lilToon のドキュメント](https://lilxyzw.github.io/lilToon/ja_JP/first.html) を参照してください。

## 衣装を追加する

Modular Avatar を使って追加します。

1. 衣装の unitypackage をダブルクリックして Unity にインポートします。
2. 衣装を Menno の子オブジェクトとして配置します。
3. 衣装オブジェクトを右クリックし、`[ModularAvatar] Setup Outfit` を選びます。

Modular Avatar が衣装のアーマチュアを検出して Merge Armature コンポーネントを追加し、衣装が Menno のボーンに追従するようになります。

### Expression Menu で切り替えられるようにする

1. 衣装オブジェクトを選択します。
2. 「Add Component」から `MA Toggle Object` を追加します。
3. 「デフォルト状態」をオンまたはオフに設定します。
4. 「メニュー項目名」に表示名を入力します。
5. 必要に応じてアイコンやメニュー階層を設定します。

## アニメーションを編集する

1. Project ウィンドウでアニメーションファイルを選択します。
2. Animation ウィンドウを開きます。
3. キーフレームを追加・編集します。
4. 保存します。

## 表情を追加する

1. シーンで Menno を選択します。
2. Body メッシュの Skinned Mesh Renderer を選択します。
3. Inspector の「Blend Shapes」で表情を調整します。
4. Animation ウィンドウで、調整した表情をキーフレームとして記録します。

使えるシェイプキーは [シェイプキー](/menno/shapekeys/) で確認できます。
