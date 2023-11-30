import { useParams } from 'react-router-dom';
import './Product.css';


// ------- Component -------
const Product = () => {
    // 4 - rota dinâmica 
    const { id } = useParams();

  return (
    <>
        <h1>Product/Produto</h1>
        <p>ID do produto: <span>{id}</span></p>
    </>
  )
}

export default Product;