이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)으로 부트 스트랩 되었습니다.

### storybook 설치
storybook react 타입 설치
#### `npx -p @storybook/cli sb init --type react`

### storybook 실행 명령어
#### `npm run storybook`

### storybook 테마 설치
#### `npm install -D @storybook/theming` --> 설치 명령어

storybook 폴더 내부에 테마 변경을 위한 
theme.js / manager.js 생성

-------------------------------------------------------------------------------------------------------
### 작업리스트
#### 파일경로 및 이름
/stories/Configure.mdx - list 파일

#### 퍼블파일
jsx / js 각각 파일명 생성 ex) button.jsx / button.stories.js

#### 파일경로
/stories/base/

#### Scss 경로
스토리북에서만 적용되는 css 수정 내용작성 /stories/style/storyBook.scss

### 작업가이드
/stories/base/ 폴더안에 파일 생성 ex)Button.jsx / Button.stories.js 각각 생성

Button.stories.js 파일 안에 title : 내용 수정 - 'ver_0.0/파일이름'

Doc 문서 필요 없는 경우
- 파일명.stroies.js 안에 tags 검색후 주석처리


-------------------------------------------------------------------------

### chromatic 빌드 방법

vscode 터미널에서 
#### npx chromatic --project-token=chpt_db747a67334279
명령어 실행후

https://www.chromatic.com/builds?appId=65a61c48c27dade8ca0974fd

위의 링크에서 빌드 되는걸 확인 

새로운 빌드 클릭후 화면 중간의 view Storybook 버튼 클릭후 빌드된걸 확인

