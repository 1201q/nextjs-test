import { useRouter } from "next/router";
import styled from "styled-components";

const Detail = ({ params }) => {
  const router = useRouter();
  const [id, title] = params.params || [];
  // console.log(title);
  return <div>{title}</div>;
};
export default Detail;

export function getServerSideProps({ params: params }) {
  return {
    props: {
      params,
    },
  };
}
