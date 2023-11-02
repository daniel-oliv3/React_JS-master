import { useState } from "react";


// ------- Component ListRender -------
const ListRender = () => {
    const [list] = useState(["Daniel", "Sapup3", "Webmaster", "PUBG", "Player", "Skate"]);

    // exemplo 2 de map
    const [users] = useState([
        { id: 1, name: "Doug Funnie", age: 12 },
        { id: 2, name: "Skeeter Valentine", age: 13 },
        { id: 3, name: "Patti Maionese", age: 12 },
        { id: 4, name: "Roger Klot", age: 14 },
    ]);

  return (
    <>
        <h2>ListRender</h2>
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>


        {/*Exemplo 2 de map*/}
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default ListRender;