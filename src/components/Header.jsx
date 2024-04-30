import { Link } from "react-router-dom";
/* import { NavLink } from "react-router-dom";
<NavLink to="/" activeClassName="active-link">
Home
</NavLink>
<NavLink to="/info" activeClassName="active-link">
Information
</NavLink>
<NavLink to="/todos" activeClassName="active-link">
Your todos
</NavLink> */
const Header = () => {
  return (
    <header>
      <img className="logo-img" src="/logo_clear.png" alt="logga till todo" />
      <h1>Todo Freshness</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/info">Information</Link>
        <Link to="/todos">Your todos</Link>
      </nav>
    </header>
  );
};

export default Header;
