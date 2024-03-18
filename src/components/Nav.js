import logo from "../images/black-tinder-logo.png";
import colorLogo from "../images/color-tinder-logo.jpg";

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : logo}></img>
      </div>

      {!authToken && !minimal && <button 
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log in</button>}
    </nav>
  );
};

export default Nav;
