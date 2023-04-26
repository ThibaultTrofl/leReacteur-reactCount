import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-box">
          <i>
            <FontAwesomeIcon icon={faCalculator} />
          </i>
          <h1>React Counter</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
