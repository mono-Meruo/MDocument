---
title: 구조 설명
nav_order: 3
---

# 구조 설명

Menno 파일의 위치와 프리팹 내용을 확인할 수 있습니다.

## 폴더 구성

```
Assets/emudotto/Menno/
├── Animation/            # 애니메이션 파일
│   ├── ModularAvatar/    # ModularAvatar용 오브젝트
│   │   └── Costume/      # M. Avatar Setting에서 사용하는 의상 교체 토글
│   └── Controllers/      # 애니메이션 컨트롤러
├── FBX/                  # 3D 모델 파일
├── Materials/            # 머티리얼 파일
│   ├── Presets/          # 머리카락 색상 등의 프리셋
│   └── Tex_Main/         # 텍스처 파일
├── Materials_Props/      # 아이템 머티리얼 파일
│   └── Tex_Props/        # 텍스처 파일
├── Prefab/               # 프리팹 파일
│   └── ToggleProps.prefab # 아이템용 프리팹
├── Menno.prefab          # Menno 아바타 메인 프리팹
└── MennoScene.unity      # 씬
```

## Menno.prefab

아바타 본체의 프리팹입니다. 씬에 드래그하여 사용할 수 있습니다.

| 컴포넌트 | 역할 |
|---|---|
| VRC Avatar Descriptor | VRChat 아바타 설정 |
| M Avatar Setup Helper | M. Avatar Setting 연동 |
| Animator | 애니메이션 제어 |
| Modular Avatar 컴포넌트 모음 | 아바타 커스터마이징 |

## 프리팹 계층

```
Menno (루트 오브젝트)
├── Armature          # 아바타 보인
├── Body              # 바디 메쉬
├── Hair              # 머리 메쉬
├── Hair_Bangs        # 앞머리 메쉬
├── Belt              # 벨트 메쉬
├── Boots             # 부츠 메쉬
├── Coat              # 코트 메쉬
├── Jacket            # 자켓 메쉬
├── Karada            # 바디 상세 메쉬
├── Pants             # 바지 메쉬
├── Shirt             # 셔츠 메쉬
├── Tie               # 넥타이 메쉬
├── AutoAnchorObject  # 앵커 포인트
├── MTear             # 눈물 이펙트
├── Costume           # 의상 교체 오브젝트
└── ToggleProps       # 토글 아이템용 오브젝트
```

::: tip
머티리얼이나 텍스처를 변경하기 전에 원본 파일을 백업해 두십시오. 변경 방법은 [수정 방법](/ko/menno/customization/)을 참조하시기 바랍니다.
:::
