import React, { ReactNode } from "react";
import data from "../data/data";
import IF from "./componente_IF";

export default (props: any) => {
  return (
    <div>
      <p>O número é: {props.numero}</p>
      <IF test={props.numero % 2 == 0} filho={<span>PAR</span>}></IF>
      <IF test={props.numero % 2 == 1} filho={<span>ÍMPAR</span>}></IF>
    </div>
  );
};
