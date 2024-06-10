import { useEffect, useState } from "react";
import { useContext } from 'react';
import { CartContext } from '../services/CartContext';


const api = "https://dummyjson.com/products";
const limitCount = 9;
const initialPage = 0;
const initialTotal = 0;

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(limitCount);
    const [page, setPage] = useState(initialPage);
    const [total, setTotal] = useState(initialTotal);
    const [loaded, setLoaded] = useState(false);
    const { addToCart } = useContext(CartContext);


    const previous = () => {
        if (page > 0) {
            setPage(page - 1);
            setLoaded(false);
        }
    }

    const next = () => {
        if (page < total) {
            setPage(page + 1);
            setLoaded(false);
        }
    }

    useEffect(() =>  {
        if(loaded === true) return;
        fetch(api + '?limit=' + limit + '&skip=' + page)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (error) setError(null);
            if (res) {
                setProducts(res.products);
                setTotal(res.total);
                setLimit(res.limit);
                setPage(res.skip);
                setLoaded(true);
            }
        }).catch(err => {
            setError(err.message);
            setProducts([]);
            setTotal(0);
            setLimit(0);
            setPage(0);
        });
    }, [products, limit, page, total, error,loaded]);

    return (
        <div className="page px-6">
            <div className="wrapper group">
                <div className="highlight-text mb-10">
                    Products Page
                </div>
                {productsView(products, error, addToCart)}
                <div className="pagination">
                    <button disabled={page === 0} onClick={() => previous()}>Previous</button>
                    <span>{page + 1} of {(total/limit).toFixed(0)}</span>
                    <button disabled={page === total} onClick={() => next()}>Next</button>
                </div>
            </div>
        </div>
    );
}

function productsView(products, error, addToCart) {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {
                    (products.length > 0 && !error) ?
                        products.map((product, index) => {
                            return (
                                <div className="product-card" key={index}>
                                    <div className="product-image">
                                        <img src={product.thumbnail} alt={product.title} />
                                    </div>
                                    <div className="product-title text-base font-medium text-white mt-3">
                                        {product.title}
                                    </div>
                                    <div className="flex items-center justify-center mt-4">
                                        <button className="addcart"
                                           onClick={() => addToCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            )
                        }) :
                        (<>
                            <h3>No Products found</h3>
                            <p>{error}</p>
                        </>)
                }
            </div>
        </>
    );
}
