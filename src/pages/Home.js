import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <NavLink to="/contact">COntact pAGE</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </>
  );
}
