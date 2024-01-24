import { BlogLink, BlogFooter, StyleFooter, Copyright } from "../StyleComponents/styled";
function Footer() {
  return (
    <StyleFooter>
      <BlogFooter>
      <li>
          <BlogLink href="">Home</BlogLink>
        </li>
        <li>
          <BlogLink href="">Women's</BlogLink>
        </li>
        <li>
          <BlogLink href="">Men's</BlogLink>
        </li>
        <li>
          <BlogLink href="">On the Street</BlogLink>
        </li>
        <li>
          <BlogLink href="">The Catwalk</BlogLink>
        </li>
        <li>
          <BlogLink href="">AdWatch</BlogLink>
        </li>
        <li>
          <BlogLink href="">About</BlogLink>
        </li>
        <li>
          <BlogLink href="">Tips</BlogLink>
        </li>
      </BlogFooter>
      <Copyright>&#169; 2013 Valet Industries, Inc</Copyright>
    </StyleFooter>
  );
}

export default Footer;
