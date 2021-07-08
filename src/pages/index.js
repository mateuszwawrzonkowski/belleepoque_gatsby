import * as React from "react";
import styled from "styled-components";
import Layout from "components/Layout.js";
import { useTranslation } from "react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import Divider from "components/atoms/Divider";

const MainImageText = styled.div`
  width: 100%;
  background-color: #b87f3a;
  padding: 25px 20px;
  font-size: 3rem;
  color: white;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  padding: 50px 0 25px 20px;
  color: #b87f3a;
`;

const Title = styled.div`
  font-size: 2.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 90%;
`;

const IndexPage = () => {
  const { t, i18n } = useTranslation("index");
  return (
    <>
      <Layout>
        <SectionStyled>
          <MainTitle>{t("title.title_1")}</MainTitle>
          <Title>{t("title.title_2")}</Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <StaticImage
              src="../images/Photo1.jpeg"
              alt="A dinosaur"
              style={{ width: "90%" }}
            />
            <StaticImage
              src="../images/Photo1.jpeg"
              alt="A dinosaur"
              style={{ width: "90%" }}
            />
            <StaticImage
              src="../images/Photo1.jpeg"
              alt="A dinosaur"
              style={{ width: "90%" }}
            />
          </div>
        </SectionStyled>
        <Divider />
        <SectionStyled>
          <h1>{t("title.title_3")}</h1>
          <p>{t("title.text_1")}</p>
        </SectionStyled>
        <Divider />
        <SectionStyled>
          <p style={{ fontWeight: "bold", marginBottom: "20px" }}>
            {t("title.text_2")}
          </p>
          <p>{t("title.text_3")}</p>
        </SectionStyled>
        <Divider />
      </Layout>
    </>
  );
};

export default IndexPage;
