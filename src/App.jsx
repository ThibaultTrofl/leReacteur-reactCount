import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalculator } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header />
      <Main counter={counter} setCounter={setCounter} />
      <Footer />
    </>
  );
}

export default App;
