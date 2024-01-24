import { BlogFooter, NavLink } from "../StyleComponents/styled";
function NavBar() {
    return (
        <nav class="fashion" style={{ width:"80%" }}>
            <BlogFooter>
                <li><NavLink href="">Women's</NavLink></li>
                <li><NavLink href="">Men's</NavLink></li>
                <li><NavLink href="">On the Street</NavLink></li>
                <li><NavLink href="">The Catwalk</NavLink></li>
                <li><NavLink href="">AdWatch</NavLink></li>
                <li><NavLink href="">About</NavLink></li>
            </BlogFooter>
        </nav>
    )
}

export default NavBar;