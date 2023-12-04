import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import './Product.css';

// ------- Component -------
const Product = () => {
    // 4 - rota dinâmica 
    const { id } = useParams();

    // 5 - carregamento dado individual
    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url);

    console.log(product);

  return (
    <>
        <h1>Product/Produto</h1>
        <p>ID do produto: <span>{id}</span></p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
          <div>
            <h1>{product.name}</h1>
            <p>R$: {product.price}</p>
            {/* 6 - nested routes */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
          </div>
        )}
    </>
  )
}

export default Product;