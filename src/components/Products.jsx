import React, { useEffect, useState } from 'react'
import PropTypes, { func, object } from "prop-types";
import ProductBox from './ProductBox';

const Products = ({ cart, addToCart, setShowLogin }) => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(false);

    const fetchProducts = async () => {
        const url = 'https://dummyjson.com/products';
        let data = await fetch(url);
        let parsedData = await data.json();
        setProducts(products.concat(parsedData.products))
    }

    useEffect(() => {
        fetchProducts();
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='pb-9' style={{ justifyContent: 'center', marginLeft: '90%' }}>
                <button className='btn btn-lg ' style={{ marginTop: '-5vh', padding: '1vh 3vh', backgroundColor:'lightblue'}} onClick={() => setShowLogin(true)}>LogOut</button>
            </div>
            <h1 className="container text-center" style={{ margin: '35px 95px', marginTop: '-8vh', color: 'coral' }}>Shoppy</h1>
            <div className="container" style={{backgroundColor:'gray'}}>
                <div className="row">
                    {products.map((element) => {
                        return (
                            <div className="col-md-4" key={element.id}>
                                <ProductBox
                                    item={element}
                                    addToCart={addToCart}
                                    title={element.title}
                                    description={element.description ? element.description.slice(0, 85) : ""}
                                    brand={element.brand}
                                    price={ element.price}
                                    imageUrl={element.thumbnail}
                                    category={element.category}
                                    rating={element.rating}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Products
