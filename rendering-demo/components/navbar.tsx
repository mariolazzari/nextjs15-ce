import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

function Navbar() {
  console.log("Navbar render");

  return (
    <nav>
      <NavLinks />
      <NavSearch />
    </nav>
  );
}

export default Navbar;
