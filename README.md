# Sellpartner Landing Page

정적 HTML/CSS/JS로 만든 모바일 반응형 랜딩페이지입니다.

## 파일 구조

```text
sellpartner_landing/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── hero-dashboard.webp
    ├── comparison.webp
    ├── founder-story.webp
    └── feature-flow.webp
```

## 실행 방법

브라우저에서 `index.html`을 바로 열면 됩니다.

간단 서버로 확인하려면:

```bash
python -m http.server 8080
```

그 다음 `http://localhost:8080` 접속.

## 수정 포인트

- CTA 링크: `index.html`의 `mailto:contact@sellpartner.kr...` 부분을 실제 신청 링크로 변경
- 브랜드 문구: Hero / CTA / FAQ 문구 수정 가능
- 이미지: `assets` 폴더의 webp 파일 교체 가능
