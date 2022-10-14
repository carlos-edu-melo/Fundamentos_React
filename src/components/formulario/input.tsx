import React, { useState } from "react";

export default (props: any) => {
  const [nome, nomeFuturo] = useState('Carlos')
  return (
    <div>
      <h3>{nome}</h3>
      <input type="text" value={nome} onChange={evento => nomeFuturo(evento.target.value)}/>
    </div>
  );
};
