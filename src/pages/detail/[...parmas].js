import { Router, useRouter } from "next/router";
const Detail = () => {
  const router = useRouter();
  // console.log();
  return <div>{router.query.parmas[0]}</div>;
};

export default Detail;
