# `쇼핑몰 서비스 만들기`

<br>

## 팀원 구성
총 6명 ( Front 3, Back 3 )

--- 
## 프로젝트 개요
- 회원가입, 로그인, 회원정보 조회·수정·탈퇴 등 사용자 관련 CRUD 기능 구현
    - 관리자 계정과 일반 사용자 계정 구분
- 주문 추가·조회·수정 등 구매 관련 CRUD 기능 구현
- 장바구니 관련 CRUD 기능 구현 및 프론트엔드 단에서 관리 
- 카테고리 수정 및 삭제, 상품 추가·수정·삭제, 주문 조회·수정 등 상품 관련 CRUD 기능 구현
    - 별도의 관리자 페이지 구현

## 프로젝트 상세
> ### 테스트 계정
> - 관리자
>    - ID: [ admin@test.com ]
>    - PW: [ 12341234 ] 
>- 일반
>    - ID: [ user@test.com ]
>    - PW: [ 12341234 ]

## 실행 방법

### 1. git clone 을 통해 repository를 local directory 로 복사

### 2. client 폴더와 server 폴더에서 각각 npm install 을 통해 module 설치

### 3. Backend의 DB 연동을 위한 `.env` 파일 설정 추가
```
MONGO_URI=< 몽고DB URI >
PORT=5001
```
### 4. client 와 server 폴더를 각각 npm run start 로 실행
