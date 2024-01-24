import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const HeaderStyle = styled.h1`
  color: tomato;
  font-size: 60px;
  font-weight: 300;
`;

export const BlogTitle = styled.h2`
  color: black;
`;

export const BlogLink = styled.a`
  color: tomato;
  text-decoration: none;
  appearance: button;
`;

export const NavLink = styled.a`
  appearance: button;
  color: lightgray;
  font-weight: 600;
`;

export const BlogFooter = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

export const Continue = styled.a`
  color: tomato;
  text-decoration: none;
  font-weight: bold;
`;

export const Copyright = styled.p`
  color: #675f5f;
`;
