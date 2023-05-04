import { Html, Head, Main, NextScript } from "next/document";

//app 다음 실행됨.
//head,body 태그 안에 들어갈 내용을 커스텀
//폰트, charest, 웹 접근성 태그 설정

//언제나 document는 서버에서 실행됨.

export default function Document() {
  // 반드시 Html, Head, Main, NextScript 요소가 "무조건~" 리턴되야함.

  //Head 태그에는 모든 문서에 공통적으로 적용될 내용이 적용되야함.
  //Main 부분을 제외하고는 브라우저에 실행되지 않으므로 비즈니스 로직은 추가해선 안됨.
  //getstaticprops와 getserversideprops를 통해 데이터 불러오기가능.
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
