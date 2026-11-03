---
title: 애니메이션 구조
nav_order: 4
---

# 애니메이션 구조

Menno의 애니메이션 파일, 컨트롤러, 파라미터의 이름과 위치를 확인할 수 있습니다. 표정이나 아이템을 수정할 때 참조로 사용하세요.

## 폴더 구성

모든 파일은 `Assets/emudotto/Menno/Animation/`에 위치해 있습니다.

| 폴더 | 내용 |
|---|---|
| `AnimaitonLayer/` | 애니메이션 컨트롤러 |
| `FX_Body/` | 바디 애니메이션 |
| `FX_Face/` | 표정 애니메이션 |
| `FX_ToggleProp/` | 토글 아이템 애니메이션 |
| `Gesture/` | 제스처 애니메이션 |
| `Locomotion/` | 이동 애니메이션 |
| `ModularAvatar/` | Modular Avatar 확장 |
| `Parameters/` | VRChat SDK 메뉴 및 파라미터 |

## 애니메이션 컨트롤러

| 컨트롤러 | 역할 |
|---|---|
| `AnimaitonLayer/Menno_Layer_FX.controller` | 메인 FX 컨트롤러. 표정, 바디 라이팅, 토글 아이템 관리 |
| `AnimaitonLayer/Menno_Layer_Gesture.controller` | 손 제스처 |
| `Menno_Props.controller` / `Menno_Props_Gesture.controller` | 아이템 토글 및 관련 제스처. 업로드 시 Modular Avatar가 FX 레이어로 통합 |

`Menno_Layer_FX.controller` 구성은 다음과 같습니다.

```
Menno_Layer_FX.controller
├── 표정 스테이트머신
│   ├── 초기 상태_Base
│   ├── 미소_Smile
│   ├── 슬픔_Sad
│   └── 기타 표정...
├── 바디 라이팅 스테이트머신
│   ├── 라이팅_OFF
│   └── 라이팅_ON
└── 토글 아이템 스테이트머신
    ├── Pan_OFF / Pan_ON
    ├── Xondle_OFF / Xondle_ON
    └── Mokia_OFF / Mokia_ON
```

## 표정 애니메이션 (FX_Face)

주요 표정입니다. 이 외에도 다양한 표정이 있으며, Expression Menu에서 선택할 수 있습니다.

| 애니메이션명 | 표정 |
|---|---|
| `Menno_初期状態_Base` | 초기 상태 |
| `Menno_笑顔_Smile` | 미소 |
| `Menno_悲しみ_Sad` | 슬픔 |
| `Menno_怒り_Angry` | 분노 |
| `Menno_驚愕_surprise` | 놀람 |
| `Menno_泣く_Cry` | 울음 |
| `Menno_ハート_Heart` | 눈이 하트 모양 |
| `Menno_舌出し_Tongue` | 혀 내밀기 |
| `Menno_和み_Calm` | 평온 |
| `Menno_目閉じ_Sleep` | 눈 감기 |
| `Menno_冷え_Cold` | 한기 |
| `Menno_焦り_Impatience` | 초조 |

## 바디 애니메이션 (FX_Body)

| 애니메이션명 | 내용 |
|---|---|
| `Menno_Body_Lighting` | 바디 라이팅 조정 |
| `Menno_Body_Cheek` | PhysBone로 볼이 당겨짐 |
| `Menno_Body_Cheek_L` | PhysBone로 왼쪽 볼이 당겨짐 |
| `Menno_Body_Cheek_R` | PhysBone로 오른쪽 볼이 당겨짐 |

## 메뉴 및 파라미터 (Parameters)

| 파일 | 내용 |
|---|---|
| `Menno_ExpressionParameters.asset` | 기본 파라미터 |
| `Menno_ExpressionsMenu.asset` | 메인 메뉴 |
| `Menno_FaceMenu.asset` | 표정 메뉴 |
| `Menno_FaceMenu1.asset` / `Menno_FaceMenu2.asset` / `Menno_FaceMenu3.asset` | 추가 표정 메뉴 |
| `Menno_Props.asset` / `Menno_Props_SubMenu.asset` | 아이템 메뉴 |

### 주요 파라미터

| 파라미터명 | 타입 | 내용 |
|---|---|---|
| `VRCFaceBlendH` | Float | 수평 표정 블렌드 (VRChat 표준) |
| `VRCFaceBlendV` | Float | 수직 표정 블렌드 (VRChat 표준) |
| `GestureLeft` | Int | 왼손 제스처 (VRChat 표준) |
| `GestureRight` | Int | 오른손 제스처 (VRChat 표준) |
| `GestureLeftWeight` | Float | 왼손 제스처 강도 (VRChat 표준) |
| `GestureRightWeight` | Float | 오른손 제스처 강도 (VRChat 표준) |
| `FacialExpression` | Int | 표정 선택 |
| `BodyLighting` | Float | 바디 라이팅 조정 |
| `Cheek` | Bool | 볼 당김 ON/OFF |
| `CheekLeft` | Bool | 왼쪽 볼 당김 ON/OFF |
| `CheekRight` | Bool | 오른쪽 볼 당김 ON/OFF |
| `TogglePan` | Bool | 프라이팬 표시/숨기기 |
| `ToggleXondle` | Bool | Xondle/Xontra 표시/숨기기 |
| `ToggleMokia` | Bool | 휴대폰 표시/숨기기 |

## 표정 전환 방법

1. VRChat에서 액션 메뉴를 엽니다(PC는 `R` 키, VR은 액션 메뉴 버튼).
2. Menno 메뉴에서 "표정"을 엽니다.
3. 원하는 표정을 선택합니다.

메뉴 계층 구조는 다음과 같습니다.

```
메인 메뉴
├── 표정
│   ├── 기본 표정
│   │   ├── 미소
│   │   ├── 슬픔
│   │   └── ...
│   ├── 특수 표정
│   │   ├── 하트 눈
│   │   ├── 태우는 눈
│   │   └── ...
│   └── 감정 표현
│       ├── 초조
│       ├── 한기
│       └── ...
└── 아이템
    ├── 프라이팬
    ├── Xondle
    └── Mokia
```
