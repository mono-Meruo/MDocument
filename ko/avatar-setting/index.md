---
title: M. Avatar Setting
description: Unity 에디터 확장. 아바타의 얼굴·머리카락·아이템 조정과 자동 설정.
nav_order: 3
---

# M. Avatar Setting

M. Avatar Setting 은 VRChat 아바타 Menno 의 설정을 Unity 위에서 처리하는 에디터 확장입니다. 실행 방법과 자동 설정 사용법을 확인할 수 있습니다.

## 필요 도구

먼저 다음 도구를 설치해야 합니다.

- [Modular Avatar](https://github.com/bdunderscore/modular-avatar/releases)
- [lilToon](https://booth.pm/ja/items/3087170)

## 실행하기

다음 중 하나의 방법으로 열 수 있습니다.

### 메뉴에서 열기

1. Unity 메뉴에서 `Window > M Avatar Setting`을 선택합니다.

![메뉴에서 열기](/assets/images/mas_01.png)

### M. Avatar Setup Helper 에서 열기

1. Hierarchy 에서 아바타를 선택합니다.
2. Inspector 의 「M. Avatar Setup Helper」 컴포넌트에 있는 「M. Avatar Setting 열기」 버튼을 클릭합니다.

아바타가 선택된 상태로 창이 열립니다.

![Setup Helper 에서 열기](/assets/images/mas_02.png)

## 애니메이션 키 추가하기

Expression Menu 의 「라이트 조정」 Radial Puppet 이 사용하는 애니메이션에 아바타 내 모든 머티리얼의 밝기 하한값(`_LightMinLimit`)을 자동으로 등록합니다.

1. M. Avatar Setting 창을 엽니다.
2. 아바타를 선택합니다.
3. 「애니메이션 키 추가」 버튼을 클릭합니다.

![애니메이션 키 추가](/assets/images/mas_03.png)

::: warning 주의
계층을 변경하는 Modular Avatar 컴포넌트에는 아직 대응하지 않았습니다(향후 대응 예정).
:::

## 더 읽기

표시되는 설정은 아바타마다 다릅니다.

- [Menno 설정](/ko/menno/)
- [업데이트 이력](/ko/avatar-setting/history/)
