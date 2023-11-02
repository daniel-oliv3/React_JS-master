import { useState } from "react";


// ------- Component ListRender -------
const ListRender = () => {

    // exemplo de map
    const [users, setUsers] = useState([
        { id: 1, name: "Doug Funnie", age: 12 },
        { id: 2, name: "Skeeter Valentine", age: 13 },
        { id: 3, name: "Patti Maionese", age: 12 },
        { id: 4, name: "Roger Klot", age: 14 },
    ]);

    // função
    const deleteRandom = () => {
        const randoNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
                console.log(prevUsers);
            return prevUsers.filter((user) => randoNumber !== user.id);
        });
    };

  return (
    <>
        <div>
            <h3>Lista de Usuários</h3>
        </div>

        <hr />

        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    </>
  )
}

export default ListRender;