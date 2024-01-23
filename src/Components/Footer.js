import { BlogLink, BlogFooter, StyleFooter } from "../StyleComponents/styled";
function Footer() {
  return (
    <StyleFooter>
      <BlogFooter>
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
    </StyleFooter>
  );
}

export default Footer;
