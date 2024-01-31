import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {productId} = useParams()

    useEffect(() => {
        getProductById(productId)
        .then(product => {
            setProduct(product)
        })
    }, [productId])

 return (
    <div className="container mt-4">
        <h1>Detalle del producto</h1>
        <ItemDetail {...product}/>
    </div>
    )
}

export default ItemDetailContainer;