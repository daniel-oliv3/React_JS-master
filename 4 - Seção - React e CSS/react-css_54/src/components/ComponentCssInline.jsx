import { useState } from "react";

// ------- Component -------
const ComponentCssInline = () => {
    const [nome] = useState("Daniel");

    const num = 15;
  return (
    <>
        <h2 style={num < 10 ? ({color: "purple"}) : ({color: "yellow"})}>CSS dinâmico</h2>
        <h2 style={num > 10 ? ({color: "purple"}) : ({color: "yellow"})}>CSS dinâmico</h2>

        <h2 style={nome === "Daniel" ? ({color: "green", backgroundColor: "#000"}) : null }>Teste Nome</h2>
    </>
  )
}

export default ComponentCssInline;