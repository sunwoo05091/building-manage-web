# 엄지 - 앱 소개 랜딩 페이지

> 건물 관리 앱 "엄지"의 앱스토어 배포용 소개 페이지

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **배포**: Vercel (권장)

## 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

## 페이지 구조

```
/                 # 메인 랜딩 페이지
/privacy          # 개인정보처리방침
/terms            # 이용약관
```

## 주요 섹션

### 메인 페이지 (/)
1. **히어로 섹션** - 앱 소개 문구 + 앱 목업 이미지
2. **주요 기능** - 민원 관리, 출퇴근 관리, 입주민 관리, 공지사항
3. **앱 미리보기** - 스크롤 가능한 앱 스크린샷
4. **다운로드** - App Store / Google Play 버튼
5. **푸터** - 법적 문서 링크

### 법적 문서
- `/privacy` - 개인정보처리방침
- `/terms` - 이용약관

## 에셋 구조

```
/public
  /images
    home.png                    # 히어로 배경
    headQuartersHome.png        # 본사 배경
    whiteLogo.png               # 로고
    appleSplash.png             # Apple 로그인 아이콘
    googleSplash.png            # Google 로그인 아이콘
    /webDesign                  # 앱 목업 이미지들
  /icons                        # SVG 아이콘들
```

## 배포

### Vercel 배포 (권장)

```bash
npm i -g vercel
vercel
```

### 정적 빌드 배포

```bash
npm run build
# out/ 폴더를 정적 호스팅에 업로드
```

## 커스터마이징

### 앱 다운로드 링크 수정
`src/app/page.tsx`에서 App Store / Google Play 링크 수정:
```tsx
<a href="https://apps.apple.com/app/your-app-id">App Store</a>
<a href="https://play.google.com/store/apps/details?id=your.package.name">Google Play</a>
```

### 회사 정보 수정
- `src/app/privacy/page.tsx` - 개인정보처리방침 내 회사 정보
- `src/app/terms/page.tsx` - 이용약관 내 회사 정보
