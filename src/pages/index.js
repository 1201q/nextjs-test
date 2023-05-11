import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Article from "../components/Article";

export default function Home({ photos, posts }) {
  return (
    <Container>
      <Header />
      <Wrapper>
        <MainContainer>
          {posts?.map((item, index) => (
            <Link href={`/detail/${item.title}`}>
              <Article key={item.id} item={item} img={photos[index]} />
            </Link>
          ))}
        </MainContainer>
      </Wrapper>
    </Container>
  );
}

export async function getServerSideProps() {
  const { data: photos } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    props: { photos, posts },
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 170px;
  padding-bottom: 70px;
`;

const MainContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 768px) and (max-width: 1067px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1068px) and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Wrapper = styled.div`
  @media screen and (max-width: 1068px) {
    padding: 0px 16px;
    width: 100%;
  }

  @media screen and (min-width: 1068px) and (max-width: 1440px) {
    width: 1024px;
  }

  @media screen and (min-width: 1440px) {
    width: 1376px;
    margin: 0px;
  }
`;
