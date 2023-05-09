import styled from "styled-components";
import { useState, useEffect } from "react";
import Image from "next/image";

const Article = ({ item, img }) => {
  return (
    <Container key={item.id}>
      <ImgBox>
        <img src={img.thumbnailUrl} />
      </ImgBox>
      <Box>
        <h4>{item.body}</h4>
        <p>{item.title}</p>
        <SubinfoBox>몇 일전</SubinfoBox>
      </Box>
      <WriterBox>1</WriterBox>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 5px;
  border: none;
  height: 100%;
  background-color: white;
  transition: all 0.5s;
  transform: translateY(0px);
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.05);

  :hover {
    cursor: pointer;
    transition: all 0.2s;
    transform: translateY(-5px);
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.05);
  }
`;

const ImgBox = styled.div`
  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  @media screen and (max-width: 1067px) {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1068px) {
    img {
      width: 320px;
      height: 167px;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  padding: 16px;

  h4 {
    font-size: 16px;
    width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 4px;
  }

  p {
    width: 280px;
    color: gray;
    font-weight: 100;
    height: 63px;
    margin-bottom: 24px;
  }
`;

const SubinfoBox = styled.div`
  font-size: 12px;
  color: gray;
  font-weight: 200;
`;

const WriterBox = styled.div`
  padding: 10px 16px;
  height: 40px;
  border-top: 1px solid #efefef;
`;

export default Article;
