import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ data }) {
  const handleClick = (id) => {
    const router = useRouter();
    router.push(
      {
        pathname: "/detail",
        query: { id },
      },
      `/detail/${id}`
    );
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.title}
        </div>
      ))}
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
    return { props: { data } };
  } catch (error) {
    return { props: {} };
  }
};
