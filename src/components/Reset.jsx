const Reset = (props) => {
  return (
    <button
      className="button-reset"
      onClick={() => {
        props.setCounter(0);
      }}
    >
      Reset
    </button>
  );
};
export default Reset;
