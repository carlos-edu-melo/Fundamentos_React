import React, { ReactNode } from "react";
import data from "../data/data";

export default () => {
  function elementosDaLista() {
    return data.map((itemLista) => {
      return <li key={itemLista.id}>{itemLista.nome}</li>;
    });
  }

  return <ul>{elementosDaLista()}</ul>;
};
