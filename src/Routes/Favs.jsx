import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {data}=useContext(ContextGlobal)


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
    {data.map((dentista)=>{
      return(
        <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id} />
      )
    })}
      </div>
    </>
  );
};

export default Favs;
