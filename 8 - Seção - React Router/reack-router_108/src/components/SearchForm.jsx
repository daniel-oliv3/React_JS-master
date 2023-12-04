import { useNavigate } from "react-router-dom";

import {useState} from 'react';

// ------- Component -------
const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    // --- função ---
    const handleSubmit = (e) => {
        e.preventDefault(); // para evitar re-carregamento da pagina,
        navigate("/search?q=" + query); 
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm;