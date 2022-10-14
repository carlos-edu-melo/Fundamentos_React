import React, { ReactNode } from "react";
import data from "../data/data";

export default (props: any) => {
  return (
    <div>
      <p>O número é: {props.numero}</p>
      {props.numero % 2 == 0 ? <span>PAR</span> : <span>IMPAR</span>}
    </div>
  );
};
