import { useRouter } from "next/router";

const detail = () => {
  const router = useRouter();
  const { id, title } = router.query;

  return <div>{title}</div>;
};

export default detail;
