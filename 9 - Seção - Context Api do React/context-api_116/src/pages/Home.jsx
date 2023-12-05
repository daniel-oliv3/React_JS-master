// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

// ------- Pages -------
const Home = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

    // 5 - context mais completo
    const { color } = useTitleColorContext();
    console.log(color);

  return (
    <div>
        <h1 style={{ color: color }}>Home</h1>
        <p>Valor do contador: {counter}</p>
        {/* 3 - alterando valor contexto */}
        <ChangeCounter />
    </div>
  );
};

export default Home;