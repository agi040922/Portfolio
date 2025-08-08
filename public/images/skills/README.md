# 기술 스택 로고 이미지 가이드

이 폴더에는 Skills & Tools 섹션에 표시될 기술 스택 로고 이미지들이 저장됩니다.

## 필요한 로고 파일들

### Frontend 기술 스택
1. **html5.svg** - HTML5 로고
2. **css3.svg** - CSS3 로고  
3. **javascript.svg** - JavaScript 로고
4. **typescript.svg** - TypeScript 로고
5. **react.svg** - React 로고
6. **nextjs.svg** - Next.js 로고
7. **vuejs.svg** - Vue.js 로고
8. **tailwindcss.svg** - Tailwind CSS 로고
9. **styled-components.svg** - Styled Components 로고
10. **sass.svg** - SASS/SCSS 로고

### Tools & 개발도구
1. **git.svg** - Git 로고
2. **github.svg** - GitHub 로고
3. **vscode.svg** - VS Code 로고
4. **figma.svg** - Figma 로고
5. **adobe-xd.svg** - Adobe XD 로고
6. **photoshop.svg** - Photoshop 로고
7. **webpack.svg** - Webpack 로고
8. **vite.svg** - Vite 로고
9. **eslint.svg** - ESLint 로고
10. **prettier.svg** - Prettier 로고

## 로고 이미지 사양

- **형식**: SVG 권장 (확대/축소 시 선명함)
- **크기**: 40x40px 기준으로 최적화
- **색상**: 원본 브랜드 컬러 유지
- **배경**: 투명 배경 권장

## 무료 로고 다운로드 사이트

### 1. Simple Icons (추천)
- **URL**: https://simpleicons.org/
- **특징**: SVG 형태, 일관된 스타일, 브랜드 컬러
- **사용법**: 검색 → 다운로드 → 파일명 변경

### 2. DevIcon
- **URL**: https://devicon.dev/
- **특징**: 개발 도구 전용, 다양한 스타일
- **사용법**: 아이콘 선택 → SVG 다운로드

### 3. Iconify
- **URL**: https://iconify.design/
- **특징**: 다양한 아이콘 세트, 커스터마이징 가능
- **사용법**: 검색 → SVG 코드 복사 → 파일로 저장

## 로고 추가 방법

### 방법 1: 직접 다운로드
1. 위 사이트에서 해당 기술의 로고 검색
2. SVG 형태로 다운로드
3. 파일명을 위 목록과 동일하게 변경
4. `public/images/skills/` 폴더에 저장

### 방법 2: CDN 링크 사용 (임시)
```typescript
// i18n.ts에서 CDN 링크 사용 예시
{ name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
```

## 현재 상태

✅ **폴더 구조**: `public/images/skills/` 생성됨  
✅ **코드 구조**: 로고 이미지 지원 완료  
⚠️ **로고 파일**: 실제 SVG 파일 추가 필요  

## 로고 없이도 작동

현재 코드는 로고가 없어도 기존처럼 텍스트만 표시되므로, 점진적으로 로고를 추가할 수 있습니다.

## 예시: React 로고 추가

1. https://simpleicons.org/ 접속
2. "React" 검색
3. SVG 다운로드
4. 파일명을 `react.svg`로 변경
5. `public/images/skills/react.svg`에 저장
6. 새로고침하면 React 로고가 표시됨!

---

**로고 이미지를 추가하시면 자동으로 포트폴리오에 반영됩니다!** 🎨
