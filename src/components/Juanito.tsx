import React, { Fragment, useState } from 'react';
import Saludo from './Saludo';
import milista from "../components/Lista";

const Juanito = () => {

  const [first, setfirst] = useState(milista)

  return (
    <Fragment>
      <div className=" mt-3">perfil Juanito</div>
      <Saludo persona="Juanito" />

      <li className="liList">
        {first.map((x: any, index: any) => {
          return (
            <h5 className=" al" key={index}>
              {x.Alemania}
            </h5>
          );
        })}
      </li>
    </Fragment>
  );
}

export default Juanito