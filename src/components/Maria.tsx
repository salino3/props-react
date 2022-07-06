import React, { Fragment, useState } from "react";
import Saludo from './Saludo';
import milista from '../components/Lista';


const Maria = () => {

      const [first, setfirst] = useState(milista);


  return (
    <Fragment>
      <div className=" mt-3">perfil Maria</div>
      <Saludo persona="Maria" />
      <li className="liList">
        <>
          {first.map((x: any, index: any) => {
            return (
              <h5 className="it" key={index}>
                {x.italia}
              </h5>
            );
          })}
        </>
      </li>
    </Fragment>
  );
}

export default Maria