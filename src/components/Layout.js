import React from "react";
import GlobalStyle from "../theme/globalStyle";
import Header from "components/organisms/Header";
import styled from "styled-components";
import i18n from "components/i18n";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </>
  );
}
