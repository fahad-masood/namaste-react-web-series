import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src={LOGO_URL} alt="app header" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>Offers</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
