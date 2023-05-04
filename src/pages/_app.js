import "@/styles/globals.css";

//서버로 요청이 들어오면 가장 먼저 실행되는 컴포넌트임.
//공통 레이아웃
//이 다음에는 document가 실행됨.

export default function App({ Component, pageProps }) {
  // component는 서버에 요청한 페이지 / localhost:3000/info인경우 info 컴포넌트를 불러옴.
  // pageprops는 initialprops, staticprops, serversideprops중 하나가 됨.

  return <Component {...pageProps} />;
}
