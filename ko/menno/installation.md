---
title: 설치 방법
nav_order: 1
---

# 도입 방법

BOOTH 에서 구매한 Menno 를 Unity 에 도입하고 VRChat 으로 업로드하는 절차입니다.

## 동영상（도입 및 M. Avatar Setting 조작）

<iframe width="560" height="315" src="https://www.youtube.com/embed/imeaf9TB4ME?si=0a-RL1EgCnXRjdrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 필요한 항목

| 필요한 항목 | 구매 및 설치 방법 |
|---|---|
| [VRChat Creator Companion (VCC)](https://vcc.docs.vrchat.com/#download-it) | 공식 사이트에서 다운로드 |
| Unity 2022.3.x | VCC 를 통해 설치 |
| lilToon | `1. liltoon and MA.unitypackage` 에 동봉 |
| Modular Avatar | `1. liltoon and MA.unitypackage` 에 동봉 |

## 다운로드 파일 구조

BOOTH 의 파일을 압축 해제하면 다음과 같은 구조로 되어 있습니다。

```
License/                         # 라이센스 PDF（en / ja / ko / zh）
Resources/
  Menno/                         # FBX 및 텍스처
  ToggleProps/                   # FBX 및 텍스처
1. liltoon and MA.unitypackage   # lilToon 및 Modular Avatar（우선 import）
2. Menno.unitypackage            # Meno 메인 파일（두 번째로 import）
```

## 도입 절차

### 1. 프로젝트 생성하기

1. VCC 를 다운로드하고 설치합니다（[VCC](https://vcc.docs.vrchat.com/#download-it) 또는 [VRChat 공식 사이트](https://vrchat.com/home/download)）。
2. VCC 를 실행하고 초기 설정을 완료합니다. Unity Hub 및 Unity 2022.3.x 가 없으면 여기서 설치합니다。
3. 「새 프로젝트 생성」을 클릭합니다。
4. 프로젝트 이름과 저장 장소를 지정합니다。
5. 템플릿에 「Avatar」를 선택합니다。
6. 「프로젝트 생성」을 클릭합니다。
7. 「Unity 에서 열기」를 클릭합니다。

### 2. 패키지 가져오기

1. `1. liltoon and MA.unitypackage` 를 더블클릭합니다。
2. 가져오기 창에서 「Import」를 클릭합니다。
3. `2. Menno.unitypackage` 를 더블클릭합니다。
4. 가져오기 창에서 「Import」를 클릭합니다。

아바타는 `Assets/emudotto/Menno` 에 포함됩니다. M. Avatar Setting 도 동봉되어 있으므로 별도 import 는 필요하지 않습니다。

::: tip
VCC 에서 Modular Avatar 를 이미 설치한 경우, `1. liltoon and MA.unitypackage` 의 import 는 필요하지 않습니다。
:::

### 3. 씬에 배치하기

다음 중 하나로 배치합니다。

- **샘플 씬 사용하기（권장）**: `Assets/emudotto/Menno/MennoScene.unity` 를 더블클릭하여 엽니다. 아바타, 환경, 조명이 설정되어 있습니다。
- **기존 씬에 추가하기**: `Assets/emudotto/Menno/Menno.prefab` 를 씬 뷰에 드래그＆드롭합니다。

### 4. M. Avatar Setting 설정하기

1. 씬에 있는 Menno 를 선택합니다。
2. M. Avatar Setting 을 엽니다. 메뉴의 `Window > M Avatar Setting`, 또는 Inspector 의 「M. Avatar Setting 열기」 버튼에서도 열 수 있습니다。
3. 필요한 설정을 진행합니다. 사용 방법은 [M. Avatar Setting](/ko/avatar-setting/) 를 참조하십시오。

### 5. VRChat 으로 업로드하기

1. 씬에 있는 Menno 를 선택합니다。
2. VRChat SDK 컨트롤 패널을 엽니다。
3. 「빌드 및 게시」를 클릭합니다。
4. 필요한 정보를 입력하고 업로드합니다。
