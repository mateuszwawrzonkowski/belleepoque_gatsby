import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 20px 0;
`;

const DividerStyled = styled.hr`
  width: 85%;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #b87f3a;
`;

const Divider = () => {
  return (
    <DividerWrapper>
      <DividerStyled />
    </DividerWrapper>
  );
};

export default Divider;
