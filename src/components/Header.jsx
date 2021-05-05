import NavbarComponent from './NavbarComponent';
import { withRouter } from 'react-router';

const NavbarWithRouter = withRouter(NavbarComponent);

const Header = () => {
  return (
    <header className="header">
      <NavbarWithRouter />
    </header>
  );
};

export default Header;
