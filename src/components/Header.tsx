import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <nav>
        <NavLink to="/controlled-form">Controlled Form</NavLink> | 
        <NavLink to="/uncontrolled-form">Uncontrolled Form</NavLink> 
      </nav>
    </>
  );
}
