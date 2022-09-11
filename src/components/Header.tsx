import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <h1>Forms</h1>
      <nav>
        <NavLink to='/'>Home</NavLink> |
      </nav>
    </>
  );
}
