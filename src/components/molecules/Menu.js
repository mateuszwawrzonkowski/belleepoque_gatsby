import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

const links = [
  { to: "/", name: "Home" },
  { to: "/living-space", name: "Living space" },
  { to: "/night-space", name: "Night space" },
  { to: "/contact", name: "Contact" },
];

const Nav = styled.nav`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  background-color: #b87f3ac9;
  overflow-y: hidden;
  max-height: 0;
  transition: 0.4s;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  padding: 10px;
  list-style: none;
`;

const Menu = ({ isActive, setActive }) => {
  const { t, i18n } = useTranslation("menu");

  const navLinks = links.map(({ to, name }) => (
    <Li key={name}>
      <NavLink to={to} onClick={setActive}>
        {t(`navi.${name}`)}
      </NavLink>
    </Li>
  ));

  return (
    <Nav
      style={{
        maxHeight: !isActive ? `${0}px` : `${250}px`,
      }}
    >
      <ul>{navLinks}</ul>
    </Nav>
  );
};

export default Menu;
