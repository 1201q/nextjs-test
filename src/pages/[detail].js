import { useRouter } from "next/router";

const detail = () => {
  const router = useRouter();
  console.log(router.query.id);
  return <div>!</div>;
};

export default detail;
