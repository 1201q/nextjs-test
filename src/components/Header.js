import styled from "styled-components";
import { useState, useEffect } from "react";
import Controller from "./Controller";
import { throttle } from "lodash";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isBgWhite, setIsBgWhite] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (lastScrollY > window.scrollY) {
        setIsVisible(true);
      } else if (lastScrollY < window.scrollY) {
        setIsVisible(false);
      }
      if (window.scrollY > 210) {
        setIsBgWhite(true);
      } else {
        setIsBgWhite(false);
      }
      setLastScrollY(window.scrollY);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Fixed
      isVisible={isVisible ? "translateY(0)" : "translateY(-100%)"}
      isBgWhite={isBgWhite ? "white" : "#F8F9FA"}
      isBoxShadow={isBgWhite ? "0px 2px 10px rgba(0, 0, 0, 0.05)" : "none"}
    >
      <Container>
        <Wrapper>
          <Box>
            <LogoText>velog</LogoText>
            <LoginBtn>로그인</LoginBtn>
          </Box>
          <Controller />
        </Wrapper>
      </Container>
    </Fixed>
  );
};

const Fixed = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 80;
  background-color: ${(props) => props.isBgWhite};
  transform: ${(props) => props.isVisible};
  transition: transform 0.05s ease-in-out;
  box-shadow: ${(props) => props.isBoxShadow};
`;

const Container = styled.div`
  width: 100%;
  font-size: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;

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

const LogoText = styled.div`
  font-weight: bold;
  font-size: 25px;

  @media screen and (max-width: 1068px) {
    font-size: 20px;
  }
`;

const LoginBtn = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #212529;
  padding: 1px 16px;
  font-size: 15px;
  font-weight: bold;
  height: 32px;
  width: 80px;

  @media screen and (max-width: 1068px) {
    font-size: 15px;
  }

  :hover {
    opacity: 0.9;
    transition: all 1s;
    cursor: pointer;
  }
`;

export default Header;
