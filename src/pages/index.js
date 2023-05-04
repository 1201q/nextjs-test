// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Home({ data }) {
  const router = useRouter();
  const handleClick = (id, title) => {
    router.push(
      {
        pathname: "/detail",
        query: { id, title },
      },
      `/detail/${id}`
    );
  };

  return (
    <>
      {data.map((item) => (
        <Button onClick={() => handleClick(item.id, item.title)} key={item.id}>
          {item.title}
        </Button>
      ))}
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.data);
    return { props: { data } };
  } catch (error) {
    return { props: {} };
  }
};

const Button = styled.div`
  border: 1px solid gray;

  margin-bottom: 10px;
  padding: 10px 15px;
  cursor: pointer;
`;
