import React, { Fragment, useState } from 'react'
import Saludo from './Saludo';
import milista from './Lista';
// 

const Jhon = () => {

  const [first, setfirst] = useState(milista)

  return (
    <Fragment>
      <div className=" mt-3">perfil Jhon</div>
      <Saludo persona="Jhon" />
      <li className="liList">
        {first.map((x: any, index: any) => {
          return (
            <h5 className=" es" key={index}>
              {x.España}
            </h5>
          );
        })}
      </li>
    </Fragment>
  );
}

export default Jhon