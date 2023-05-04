import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { id, title } = router.query;

  return <div>{title}</div>;
};

export default Detail;
