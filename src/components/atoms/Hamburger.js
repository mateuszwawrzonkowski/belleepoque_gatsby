import React from "react";
import styled from "styled-components";
import { FaBars,FaTimes } from 'react-icons/fa';

const BarsStyled = styled(FaBars)`
  font-size: 30px;
  color: #b87f3a;
  margin-top: 5px;
  min-width: 27px;
`;

const TimesStyled = styled(FaTimes)`
  font-size: 30px;
  color: #b87f3a;
  margin-top: 5px;
  min-width: 27px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const Hamburger = ({ isActive, setIsActive }) => (
  <Button onClick={setIsActive} type="button">
    {
      !isActive ? <BarsStyled /> : <TimesStyled/>
    }

  </Button>
);

export default Hamburger;
