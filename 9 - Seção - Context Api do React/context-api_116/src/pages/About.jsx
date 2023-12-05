// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
// import { useTitleColorContext } from "../hooks/useTitleColorContext";

import { useCounterContext } from "../hooks/useCounterContext";

// ------- Pages -------
const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>About</h1>
      <p>Valor contador: {counter}</p>
    </div>
  );
};

export default About;
