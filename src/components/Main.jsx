import Decrement from "./Decrement.jsx";
import Increment from "./Increment.jsx";
import Reset from "./Reset.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Main = (props) => {
  return (
    <main>
      <div className="container main-box">
        <div className="count-box">
          <Decrement counter={props.counter} setCounter={props.setCounter} />
          <p className="counter">{props.counter}</p>
          <Increment counter={props.counter} setCounter={props.setCounter} />
        </div>
        <Reset counter={props.counter} setCounter={props.setCounter} />
      </div>
    </main>
  );
};
export default Main;
