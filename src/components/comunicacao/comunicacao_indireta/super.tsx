import Sub from "./sub";
import React, { useState } from "react";

// Passa uma função para o componente SUB(filho)

export default (props: any): JSX.Element => {
  const [valorAtual, valorFuturo] = useState(0);
  function acao(valorGerado: number, text: string) {
    console.log("Ação!");
    valorFuturo(valorGerado);
    console.log(text);
  }
  return (
    <div>
      <h4>{valorAtual}</h4>
      <Sub quandoClicar={acao}></Sub>
    </div>
  );
};
