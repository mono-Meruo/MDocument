---
title: MTear 눈물 편집기
nav_order: 3
---

# MTear 눈 에디터

MTear을 사용하여 Menno의 눈 형태, 크기, 흐르는 속도를 조절할 수 있습니다. 눈 메시지 편집 방법과 셰이더 설정 항목을 정리했습니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rcjnlMPjgCc?si=4v3UXY1mBSb9ByJN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 구성

| 항목 | 내용 |
|------|------|
| MTearEditor | 아바타에 부착된 컴포넌트 |
| MTearEditorWindow | 눈 메시지를 편집하는 창 |
| Menno_Tear | 눈용 셰이더 |
| MennoTearEditor | 셰이더의 커스텀 인스펙터 |

## 눈 메시지 편집하기

1. Menno 아바타를 엽니다.
2. 히에라키에서 'Menno' 객체를 확장합니다.
3. 'MTear' 객체를 선택합니다.
4. 인스펙터에서 '눈 메시지 편집' 버튼을 클릭합니다.
5. 열린 창(MTearEditorWindow)의 '편집 대상 객체'에서 눈 메시가 포함된 객체를 선택합니다.
6. 씬 뷰에서 파란색 또는 빨간색 구체(본)를 클릭합니다.
7. 표시된 핸들로 이동 및 회전시킵니다.

- 파란색과 빨간색은 좌우 본입니다. 한쪽을 움직이면 반대쪽도 자동으로 미러링됩니다.
- 위치, 회전, 스케일은 인스펙터에서 수치로도 입력할 수 있습니다.
- 편집 중에는 자동으로 뷰 도구가 전환되며, 완료되면 원래 도구로 복귀합니다.

## 셰이더 설정

Menno_Tear 셰이더에서 눈의 외관을 조절합니다.

| 항목 | 매개변수 | 내용 |
|------|-------------|------|
| 눈의 속도 | `_Speed` | 눈이 흐르는 속도 |
| 눈의 위치 | `_Tear_position` | 눈의 좌우 위치 |
| 눈물 고임 세기 | `_Tear_Puddle_intensity` | 눈 주머니 속 눈물 고임 크기 |
| 눈방울 세기 | `_Tear_Drop_intensity` | 뺨을 흐르는 눈물의 강도 |
| 눈방울 크기 | `_Tear_Drop_Size` | 눈방울의 크기 |
| 추가 눈방울 세기 | `_Tear_Drop_extra_intensity` | 2차 눈방울의 강도 |
| 추가 눈방울 크기 | `_Tear_Drop_extra_Size` | 2차 눈방울의 크기 |
| 스펙큘라 발광 | `_Tear_Specular_Emissive` | 광택 발광 강도 |
| 스펙큘라 강도 | `_Tear_Specular_Strength` | 광택의 강도 |
| 아웃라인 | `_Tear_Outline` | 테두리 강도 |
| 아웃라인 색상 | `_Tear_Outline_Color` | 테두리 색상 |
| 왜곡 | `_Tear_Distortion` | 배경 왜곡 정도 |
| 최소 광량 | `_LightMinLimit` | 어두운 곳에서의 최소 밝기 |
| 최대 광량 | `_LightMaxLimit` | 밝은 곳에서의 최대 밝기 |

## 프리셋

셰이더 설정 하단에 있는 버튼으로 적용합니다. 자신만의 설정을 프리셋으로 저장할 수도 있습니다.

| 항목 | 내용 |
|------|------|
| 표준(Default) | 균형 잡힌 눈물 |
| 소형(Small) | 작고 절제된 눈물 |
| 대형(Big) | 크고 도드라진 눈물 |
