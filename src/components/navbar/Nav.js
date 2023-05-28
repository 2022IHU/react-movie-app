import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-contatiner">
      <Link to="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default Nav;
