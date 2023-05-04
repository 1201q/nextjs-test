// pages/_document.tsx
// 기존 document 파일과 역할은 동일하나, 서버에서 styled-components를 적용한 문서를 내려주게 된다.

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  //app 다음 실행됨.
  //head,body 태그 안에 들어갈 내용을 커스텀
  //폰트, charest, 웹 접근성 태그 설정

  //언제나 document는 서버에서 실행됨.
  // 반드시 Html, Head, Main, NextScript 요소가 "무조건~" 리턴되야함.

  //Head 태그에는 모든 문서에 공통적으로 적용될 내용이 적용되야함.
  //Main 부분을 제외하고는 브라우저에 실행되지 않으므로 비즈니스 로직은 추가해선 안됨.
  //getstaticprops와 getserversideprops를 통해 데이터 불러오기가능.
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
