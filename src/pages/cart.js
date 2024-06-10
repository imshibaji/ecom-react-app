import { useContext } from 'react';
import { CartContext } from '../components/CartContext';


export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="page px-6">
      <div className="wrapper group">
        <div className="highlight-text mb-10">
          Cart Page
        </div>
        <ul className='grid grid-cols-3 gap-4'>
          {cart.map((product, index) => (
            <li key={index}>
              <div className="product-card" key={index}>
                <div className="product-image">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-title text-base font-medium text-white mt-3">
                  {product.title}
                </div>
                <div className='flex md:flex-row flex-col items-center justify-center gap-4 mt-4'>
                  <button className='buynow'>Buy Now</button>
                  <button
                    className="removecart"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}