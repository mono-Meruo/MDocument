---
title: 자주 묻는 질문(FAQ)
nav_order: 8
---

# 자주 묻는 질문 (FAQ)

Menno에서 자주 발생하는 문제의 원인과 해결 방법을 확인할 수 있습니다.

## 시선 (EyePointer)

### Siromori Eye Pointer를 넣었음에도 눈이 움직이지 않는 이유는 무엇입니까?

[Siromori Eye Pointer](https://booth.pm/ja/items/4742883)의 기본 애니메이션은 Menno의 `UpperChest` 본과 호환되지 않기 때문입니다. 다음 방법 중 하나로 해결할 수 있습니다.

**M. Avatar Setting v1.2.8 이상에서 수정하는 경우**

1. [Menno_v1.01_M.AvatarSetting_v1.2.8.zip](https://emudotto.booth.pm/items/6504220)를 다운로드합니다.
2. import 화면에서 `Scripts` 폴더에만 체크하여 가져옵니다(import).
3. Unity 메뉴에서 `Window > M Avatar Setting`을 열습니다.
4. 창의 하단에 있는 디버그 섹션을 확장합니다.
5. "fixEyePointer" 버튼을 클릭합니다.

::: warning 주의
`Scripts` 폴더 외의 폴더를 함께 가져오면 Menno의 텍스처나 매터리얼이 덮어씌워질 수 있습니다.
:::

**수동으로 수정하는 경우**

1. 다음 애니메이션 파일을 엽니다.
   - `Assets/Siromori/EyePointer/Animations/Toggle_Off.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On.anim`
   - `Assets/Siromori/EyePointer/Animations/Toggle_On_NoLook.anim`
2. 파일 내 모든 눈 본 경로(`LeftEye`, `RightEye` 등)에 `UpperChest`를 추가합니다. 예: `Armature/Hips/Spine/Chest/Neck/Head/LeftEye`을 `Armature/Hips/Spine/Chest/UpperChest/Neck/Head/LeftEye`로 변경합니다.

## 의상

### 특정 의상을 착용 시 Z버튼으로 웅크린 후 자세가 초기화되지 않는 이유는 무엇입니까?

의상 Armature 바로 하단에 Shape Type이 `Plane`이고 X축 회전각이 90도인 콜라이더 객체가 있기 때문입니다. 해당 콜라이더의 X축 회전각을 `90`에서 `0`으로 변경하면 해결됩니다.

확인된 의상:

- Pirouette님의 "[Arcane Attire](https://booth.pm/ja/items/6151859)"(마법사 스타일): 다운로드 페이지에 있는 "plusheadのルェルツ_Rwerutu_に着せる方へ.png" 파일의 절차를 따르십시오.
- ISHTAR LIBERALIS님의 "[Theologica](https://booth.pm/ja/items/6350299)"(수도복 스타일): 콜라이더의 X축 회전각을 `90`에서 `0`으로 변경하십시오.

## 기타

### 여기에 없는 질문은 어디에 문의해야 합니까?

[X(Twitter)](https://x.com/_emudotto)로 연락 주시기 바랍니다.
