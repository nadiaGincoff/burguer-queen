import React, { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    console.log("click");
    setNumero(numero + 1);
  };

  return (
    <div>
      <h2>Mi primer componente {numero}</h2>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
};

export default Contador;
