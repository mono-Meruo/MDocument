---
title: よくある質問（FAQ）
nav_order: 8
---

# よくある質問（FAQ）

Mennoで起きやすいトラブルの原因と直し方を確認できます。

## 視線（EyePointer）

### Siromori Eye Pointerを入れても目が動かないのはなぜですか？

[Siromori Eye Pointer](https://booth.pm/ja/items/4742883)の標準アニメーションが、Mennoの `UpperChest` ボーンに対応していないためです。次のどちらかの方法で直せます。

**M. Avatar Setting v1.2.8以降で直す場合**

1. [Menno_v1.01_M.AvatarSetting_v1.2.8.zip](https://emudotto.booth.pm/items/6504220)をダウンロードします。
2. インポート画面で `Scripts` フォルダだけにチェックを入れてインポートします。
3. Unityのメニューから `Window > M Avatar Setting` を開きます。
4. ウィンドウ最下部のデバッグセクションを展開します。
5. 「fixEyePointer」ボタンをクリックします。

::: warning 注意
`Scripts` 以外のフォルダもインポートすると、Mennoのテクスチャやマテリアルが上書きされることがあります。
:::

**手動で直す場合**

1. 次のアニメーションファイルを開きます。
   - `Assets/Siromori/EyePointer/Animations/Toggle_Off.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On_NoLook.anim`
2. ファイル内の目のボーンパスすべて（`LeftEye` `RightEye` など）に `UpperChest` を加えます。例: `Armature/Hips/Spine/Chest/Neck/Head/LeftEye` を `Armature/Hips/Spine/Chest/UpperChest/Neck/Head/LeftEye` に変更します。

## 衣装

### 特定の衣装を着ると、Zボタンでしゃがんだ後に姿勢が戻らないのはなぜですか？

衣装のArmature直下に、Shape Typeが `Plane` でX軸回転が90度のコライダーオブジェクトがあるためです。そのコライダーのX軸回転を `90` から `0` に変更すると直ります。

確認されている衣装:

- Pirouetteさんの「[Arcane Attire](https://booth.pm/ja/items/6151859)」（魔法使い風）: ダウンロードページにある「plusheadのルェルツ_Rwerutu_に着せる方へ.png」の手順に従ってください。
- ISHTAR LIBERALISさんの「[Theologica](https://booth.pm/ja/items/6350299)」（修道女風）: コライダーのX軸回転を `90` から `0` に変更します。

## その他

### ここにない質問はどこに問い合わせればいいですか？

[X(Twitter)](https://x.com/_emudotto)で連絡してください。
