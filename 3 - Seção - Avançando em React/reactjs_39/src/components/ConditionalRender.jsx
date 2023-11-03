import { useState } from "react";



// ------- Component ConditionalRender -------
const ConditionalRender = () => {

    const [x] = useState(true);
    // const [x] = useState(false);

  return (
    <>
        <div>
            <h1>ConditionalRender</h1>
        </div>

        <hr />


        <div>
            <h2>Isso será exibido?</h2>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
        </div>
        
    </>
  )
}

export default ConditionalRender;