import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Increment = (props) => {
  return props.counter >= 10 ? (
    <button className="button-sign"></button>
  ) : (
    <button
      className="button-sign"
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};
export default Increment;
