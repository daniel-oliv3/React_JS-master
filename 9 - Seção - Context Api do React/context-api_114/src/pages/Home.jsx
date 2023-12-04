import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { CounterContext } from "../context/CounterContext";

// ------- Component -------
const Home = () => {
    const { counter } = useContext(CounterContext);
  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador: {counter}</p>
        {/* 3 - alterando valor contexto */}
        <ChangeCounter />
    </div>
  );
};

export default Home;