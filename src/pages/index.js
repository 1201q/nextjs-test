import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

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
        <div onClick={() => handleClick(item.id, item.title)} key={item.id}>
          {item.title}
        </div>
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
