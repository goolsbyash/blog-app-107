import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  font-family: Verdana;
`;

export const HeaderStyle = styled.h1`
  color: red;
  font-size: xl;
`;

export const BlogTitle = styled.h2`
  color: black;
`;

export const BlogLink = styled.a`
  color: red;
  text-decoration: none;
  appearance: button;
`;

export const NavLink = styled.a`
  appearance: button;
  color: #675f5f;
`;

export const BlogFooter = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyleFooter = styled.footer`
  width: 80%;
`;

export const Continue = styled.a`
  color: red;
  text-decoration: none;
  font-weight: bold;
  margin-left: 70%;
`;

export const Copyright = styled.p`
  color: #675f5f;
`;
