import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingBag } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri"
import { useState } from 'react'
import { deleteProduct } from '../Store';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const { cart } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteProduct({ id }))
  }

  const deleteAllProduct = () => {
    cart.forEach((item) => {
      dispatch(deleteProduct({ id: item.id }))
    });
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const [checkOut, setCheckOut] = useState(false);

  const handleCheckoutClick = () => {
    setCheckOut(<setCheckOut />);
  }
  return (
    <>
      {!checkOut ? <>
        <div className='cart' >
          <div className='component-header'>
            <h4><FiShoppingBag />Shopping bag</h4>
          </div>

          {cart.length === 0 ? (
            <div className='empty-cart'>
              <p className='cart-note'>Your shopping bag is empty</p>
            </div>
          ) : (
            <div className='item-container'>
              <div className='clear-cart'>
                <button className='clear-btn' onClick={deleteAllProduct}>clear cart</button>
              </div>
              {cart.map(item => (
                <div key={item.id}>
                  <div className='cart-item' key={item.id}>
                    <img src={item.src} alt={item.alt} />
                    <div className='cart-details'>
                      <div className='item-details'>
                        <p className='product-name'>{item.brand}</p>
                        <p className='item-name'>{item.name}</p>
                        <p><b>{"$" + item.price}</b></p>
                      </div>
                      <div className='sub-details'>
                        <div className="item-size"><span>Size:</span> {item.size}</div>
                        <div className="item-color"><span>Color:</span> {item.color}</div>
                        <div className="item-color"><span>Quantity:</span> {item.quantity}</div>
                      </div>
                    </div>
                    <p className='delete'>
                      <RiDeleteBin7Line onClick={() => deleteItem(item.id)} />
                    </p>
                  </div>
                  <hr />

                  <div className='checkout'>
                    <button className='checkout-btn' onClick={handleCheckoutClick}>Checkout</button>
                    <div className='checkout-sum'>
                      <p>grand total</p>
                      <b>{"$" + totalPrice}</b>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </> :
        <CheckoutForm />}
    </>
  );
};

export default Cart;
