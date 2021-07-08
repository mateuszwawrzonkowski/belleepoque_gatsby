import React, { useState } from "react";
import styled from "styled-components";
import logo from "images/logo1x.png";
import Menu from "components/molecules/Menu";
import Hamburger from "src/components/atoms/Hamburger";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  background-color: white;
  border-bottom: 4px solid #b87f3a;
  z-index: 999;
`;

const InsideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
`;

const Logo = styled.img`
  width: 60%;
  margin-bottom: 10px;
`;
const MainImageText = styled.div`
  width: 100%;
  background-color: #b87f3a;
  padding: 25px 20px;
  font-size: 3rem;
  color: white;
`;

const Header = () => {
  const [active, setActive] = useState(false);
  const { t, i18n } = useTranslation("index");
  return (
    <>
      <HeaderWrapper>
        <InsideWrapper>
          <Logo src={logo} alt="la belle epoque chambres d'hotes" />
          <Hamburger isActive={active} setIsActive={() => setActive(!active)} />
        </InsideWrapper>
        <Menu isActive={active} setActive={() => setActive(false)} />
      </HeaderWrapper>
      <StaticImage src="../../images/Photo1.jpeg" alt="A dinosaur" />
      <MainImageText>{t("title.mainImage")}</MainImageText>
    </>
  );
};

export default Header;
