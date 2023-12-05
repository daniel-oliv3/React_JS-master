import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

// ------- Hooks -------
export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.log("Contexto não encontrado.");
  }

  return context;
};
