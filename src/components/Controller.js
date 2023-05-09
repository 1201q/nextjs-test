import styled from "styled-components";
import { useState, useEffect } from "react";

const Controller = () => {
  const [menuSelect, setMenuSelect] = useState(1);
  return (
    <Box>
      <Tab
        onClick={() => {
          setMenuSelect(1);
        }}
        isSelect={menuSelect === 1 ? true : false}
      >
        트렌딩
      </Tab>
      <Tab
        onClick={() => {
          setMenuSelect(2);
        }}
        isSelect={menuSelect === 2 ? true : false}
      >
        최신
      </Tab>
      <DropDownDiv>이번주</DropDownDiv>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-top: 24px;

  @media screen and (max-width: 1068px) {
    padding: 0px 16px;
    width: 100%;
  }

  @media screen and (min-width: 1068px) and (max-width: 1440px) {
    width: 1024px;
  }

  @media screen and (min-width: 1440px) {
    width: 1376px;
  }
`;

const Tab = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.isSelect ? "#212529" : "#868e96")};
  width: 112px;
  height: 48px;
  border-bottom: 2px solid
    ${(props) => (props.isSelect ? "#212529" : "#f8f9fa")};
  transition: border-bottom 0.3s ease;
  cursor: pointer;

  @media screen and (max-width: 940px) {
    width: 80px;
    font-size: 16px;
  }
`;

const DropDownDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 96px;
  margin: 0px 8px;
  font-size: 15px;
  color: #495057;
  background-color: white;
  border: 1px solid #eeeeee;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 940px) {
    width: 60px;
    font-size: 12px;
  }
`;

export default Controller;
