import React from "react";
import ReactDOM from "react-dom/client";
import Parametros from "./components/parametros";
import Repeticao from "./components/repeticao";
import Condicional from "./components/condicinal";
import CondicionalIf from "./components/condicinal_com_if";
import Super from "./components/comunicacao/comunicacao_indireta/super";
import InputComponent from "./components/formulario/input";

import Card from "./components/card/card";

import "./index.css";
import Pai from "./components/comunicacao/pai";
import Contador from "./components/contador/contador";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <main>
    <Card
      titulo="Input"
      filho={
        <>
          <Contador />
        </>
      }
      cor="#247DF1"
    ></Card>

    <Card
      titulo="Input"
      filho={
        <>
          <InputComponent />
        </>
      }
      cor="green"
    ></Card>

    <Card titulo="Repetição" filho={<Repeticao />} cor="#13315C"></Card>

    <Card
      titulo="Parametros"
      filho={<Parametros title="Título passado por parametro" />}
      cor="orange"
    ></Card>

    <Card
      titulo="Condicional"
      filho={<Condicional numero={5}> </Condicional>}
      cor="orange"
    ></Card>

    <Card
      titulo="Condicional com IF"
      filho={<CondicionalIf numero={10}> </CondicionalIf>}
      cor="#10999E"
    ></Card>

    <Card
      titulo="Comunicação direta"
      filho={
        <>
          <Pai sobrenome="Silva" filho={<b>Carlos</b>} />
          <Pai sobrenome="Silva" filho={<b>Eduardo</b>} />
        </>
      }
      cor="blue"
    ></Card>

    <Card
      titulo="Comunicação indireta"
      filho={
        <>
          <Super />
        </>
      }
      cor="red"
    ></Card>
  </main>
);
