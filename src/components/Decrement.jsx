import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Decrement = (props) => {
  return props.counter <= 0 ? (
    <button className="button-sign"></button>
  ) : (
    <button
      className="button-sign"
      onClick={() => {
        props.setCounter(props.counter - 1);
      }}
    >
      <FontAwesomeIcon icon={faMinus} />
    </button>
  );
};
export default Decrement;
