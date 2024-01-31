import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({message}) =>{
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect (() => {
        const asyncFunction = categoryId ? getProductsByCategory: getProducts

        asyncFunction(categoryId).
        then(products => {
            setProducts(products)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoryId])


    return (
        <div className="container mt-4">
            <h2>{message}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;