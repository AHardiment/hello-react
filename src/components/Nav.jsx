import ironhack from "./../images/ironhack-logo-xs.png";
import menuIcon from "./../images/menu-top-xs.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img className="ironhack-logo" src={ironhack} alt="Ironhack Logo" />
      </div>
      <div className="menu-icon">
        <img className="menu-top" src={menuIcon} alt="Menu" />
      </div>
    </div>
  );
};

export default Nav;
