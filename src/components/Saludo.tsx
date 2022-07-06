import React, { Fragment, useState } from "react";
// milista from './Lista';



interface props {
    persona: string
}


const Saludo = ({persona}:props) => {

  //const [first, setfirst] = useState(milista)

  return (
    <Fragment>
      <h2 className='mt-2'>Hola {persona}</h2>
 <p>{persona} ha visitado</p>


    </Fragment>
  );
}

export default Saludo