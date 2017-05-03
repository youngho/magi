# BETS
Brazil EMCP Test System
테스트와 관련된 장비에서 발생하는 RAW 데이터를 파싱하여 DB화 한 다음 이 데이터를 기반으로 수율, 효율, 집계 데이터를 보여주는 시스템

## 프로젝트 설명
웹기반의 Front End 와 Back End 시스템으로 디자인 되어 있음.
###Front End
Angular2를 기반으로 함.
유료 UI 구조를 구매했음 (SmartAdmin).
SmartAdmin을 Angular2 명령어로 빌드하고 실행 할 수 있음.
프론트앤드 소스를 관리하기 쉽도록 백앤드소스의 루트에 위치시킴 (betsui 폴더)
###Back End
Spring Boot로 되어 있음.
따라서 단독으로 실행 할 수 있고, 마지막 배포는 WAR파일을 톰켓에 배포하여 완성함.
WAR배포시 프론트앤드 소스를 포함하여 배포하도록 구성함.


## 사전작업
### Front End
nodejs필요.
npm install
npm run start
npm run build 명령으로 백엔드 소스에 프론트앤드 소스를 빌드하여 배포 할 수 있음.
### Back End
gradle 필요
gradle bootrun