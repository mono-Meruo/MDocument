---
title: 커스터마이징
nav_order: 2
---

# 변경 방법

Menno의 텍스처와 마티리얼을 변경하고, 의상을 추가하며, 애니메이션과 표정을 편집할 수 있습니다.

::: warning 주의
크게 수정하기 전에 원본 파일을 백업하십시오.
:::

## 파일 위치

| 대상 | 위치 |
|---|---|
| 텍스처(PSD) | `Assets/emudotto/Menno/Materials/Tex_Main/` |
| 마티리얼 | `Assets/emudotto/Menno/Materials/` |
| 애니메이션 | `Assets/emudotto/Menno/Animation/` |

## 텍스처 변경하기

1. `Tex_Main`의 PSD 파일을 Photoshop 또는 GIMP 등에서 엽니다.
2. 편집한 후 저장합니다.
3. Unity로 돌아갑니다. 변경 사항은 자동으로 반영됩니다.

## 마티리얼 변경하기

1. Project 창의 마티리얼을 선택합니다(Hierarchy 에서 객체를 선택해도 됩니다).
2. Inspector 에서 lilToon 의 매개변수를 조정합니다. 자세한 내용은 [lilToon 문서](https://lilxyzw.github.io/lilToon/ja_JP/first.html) 를 참조하십시오.

## 의상 추가하기

Modular Avatar를 사용하여 추가합니다.

1. 의상의 unitypackage 파일을 더블 클릭하여 Unity 에 가져옵니다.
2. 의상을 Menno의 자식 객체로 배치합니다.
3. 의상 객체를 마우스 오른쪽 버튼으로 클릭하고 `[ModularAvatar] Setup Outfit` 를 선택합니다.

Modular Avatar 는 의상의 아머처를 감지하고 Merge Armature 컴포넌트를 추가하여, 의상이 Menno의 뼈대에 따라 움직이도록 합니다.

### 표현 메뉴에서 전환할 수 있도록 설정하기

1. 의상 객체를 선택합니다.
2. "Add Component" 에서 `MA Toggle Object` 를 추가합니다.
3. "기본 상태" 를 켜거나 끕니다.
4. "메뉴 항목 이름" 에 표시 이름을 입력합니다.
5. 필요에 따라 아이콘이나 메뉴 계층을 설정합니다.

## 애니메이션 편집하기

1. Project 창의 애니메이션 파일을 선택합니다.
2. Animation 창을 엽니다.
3. 키프레임을 추가하고 편집합니다.
4. 저장합니다.

## 표정 추가하기

1. 씬에서 Menno 객체를 선택합니다.
2. Body 메시의 Skinned Mesh Renderer 를 선택합니다.
3. Inspector 의 "Blend Shapes" 에서 표정을 조정합니다.
4. Animation 창에서 조정된 표정을 키프레임으로 기록합니다.

사용 가능한 셰입 키는 [셰입 키](/ko/menno/shapekeys/) 페이지에서 확인할 수 있습니다.
