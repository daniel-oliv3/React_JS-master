import { useState } from "react";


// ------- Component ListRender -------
const ListRender = () => {
    const [list] = useState(["Daniel", "Sapup3", "Webmaster", "PUBG", "Player", "Skate"])

  return (
    <>
        <h2>ListRender</h2>

        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default ListRender;