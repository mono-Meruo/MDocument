---
title: MTear涙エディター
nav_order: 3
---

# MTear涙エディター

MTear で、Menno の涙の形・大きさ・流れる速さを調整できます。涙メッシュの編集方法とシェーダーの設定項目をまとめています。

<iframe width="560" height="315" src="https://www.youtube.com/embed/rcjnlMPjgCc?si=4v3UXY1mBSb9ByJN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 構成

| 項目 | 内容 |
|------|------|
| MTearEditor | アバターに付いているコンポーネント |
| MTearEditorWindow | 涙メッシュを編集するウィンドウ |
| Menno_Tear | 涙のシェーダー |
| MennoTearEditor | シェーダーのカスタムインスペクター |

## 涙メッシュを編集する

1. Menno アバターを開きます。
2. Hierarchy で「Menno」オブジェクトを展開します。
3. 「MTear」オブジェクトを選びます。
4. Inspector の「MTearEditor」コンポーネントで「涙メッシュを編集」ボタンを押します。
5. 開いたウィンドウ（MTearEditorWindow）の「編集対象オブジェクト」で、涙メッシュを含むオブジェクトを選びます。
6. Scene ビューで青または赤の球体（ボーン）をクリックします。
7. 表示されたハンドルで移動・回転します。

- 青と赤は左右のボーンです。片側を動かすと反対側も自動でミラーリングされます。
- 位置・回転・スケールは Inspector で数値入力もできます。
- 編集中は自動で View ツールに切り替わり、終了すると元のツールに戻ります。

## シェーダー設定

Menno_Tear シェーダーで涙の見た目を調整します。

| 項目 | パラメーター | 内容 |
|------|-------------|------|
| 涙の速度 | `_Speed` | 涙が流れる速さ |
| 涙の位置 | `_Tear_position` | 涙の左右位置 |
| 涙だまりの強さ | `_Tear_Puddle_intensity` | 目の中の涙だまりの大きさ |
| 涙滴の強さ | `_Tear_Drop_intensity` | 頬を流れる涙の強さ |
| 涙滴のサイズ | `_Tear_Drop_Size` | 涙滴の大きさ |
| 追加涙滴の強さ | `_Tear_Drop_extra_intensity` | 二次的な涙滴の強さ |
| 追加涙滴のサイズ | `_Tear_Drop_extra_Size` | 二次的な涙滴の大きさ |
| スペキュラ発光 | `_Tear_Specular_Emissive` | 光沢の発光強度 |
| スペキュラ強度 | `_Tear_Specular_Strength` | 光沢の強さ |
| アウトライン | `_Tear_Outline` | 縁取りの強さ |
| アウトライン色 | `_Tear_Outline_Color` | 縁取りの色 |
| 歪み | `_Tear_Distortion` | 背景の歪み具合 |
| 最小光量 | `_LightMinLimit` | 暗い場所での最小の明るさ |
| 最大光量 | `_LightMaxLimit` | 明るい場所での最大の明るさ |

## プリセット

シェーダー設定の下部にあるボタンで適用します。自分の設定をプリセットとして保存することもできます。

| 項目 | 内容 |
|------|------|
| 標準 (Default) | バランスの取れた涙 |
| 小 (Small) | 小さめで控えめな涙 |
| 大 (Big) | 大きく目立つ涙 |
