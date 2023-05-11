import { Router, useRouter } from "next/router";
const Detail = ({ params }) => {
  const router = useRouter();
  console.log(params);

  return <div>{params && params}</div>;
};

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

export default Detail;
