# tistory-top-bar-visible

티스토리 [#1] 스킨전용 **스크롤시 상단바 숨기고 보이는 기능**

이 저장소는 티스토리의 `#1`이라는 이름의 스킨을 기준으로 만들어졌습니다.

스킨이 다른 경우는 각 스킨에 맞추어 세부 설정들을 수정해야 할 수 있습니다.

## 적용한 블로그 글 & 구현기

https://sukvvon.tistory.com/80

위 블로그 글에서 적용한 모습과 구현한 방법들을 읽어보실 수 있습니다 :)

## 적용 방법

1. 해당 저장소에서 `top-bar-visible.css`와 `topBarVisible.js` 파일을 다운로드 받습니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/66409882/154897522-2fecaa7e-8145-4768-ab3b-99cea7d57f3d.png" />
</p>

2. 사용자의 티스토리 블로그의 **관리**에서 **꾸미기**의 **스킨 편집**을 클릭합니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/66409882/154897955-50cd5dca-4613-40d7-8a39-c86a38ca4b8b.png" />
</p>

3. **html 편집**을 클릭합니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/66409882/158054802-b86942f3-f986-4560-8e39-dd7e8713e334.png">
</p>

4. 티스토리의 **스킨 편집** 메뉴로 들어가서, 파일 업로드에 `top-bar-visible.css`와 `topBarVisible.js`를 업로드 합니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/66409882/158055729-9ba004e1-5a18-4b7e-ae4d-ba495feccd36.png">
</p>

5. **html 소스** 상단에 css 태그를 추가합니다.

<p align="center">
  <img src="https://user-images.githubusercontent.com/66409882/158055783-b81e4228-8c59-4202-87bd-96394cb5f358.png">
</p>

6. **html 소스** 하단에 script 태그를 추가합니다.

## 기능 명세

- 글의 제목 영역(높이)를 벗어났을 경우 하단으로 스크롤시 상단바가 보이지 않습니다.
- 상단으로 스크롤시 상단바가 보입니다.
