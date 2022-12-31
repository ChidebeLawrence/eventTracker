import React from 'react';
import { useState, useEffect } from 'react';
import { IoChevronBackSharp } from "react-icons/io5"
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { closeProduct, addProductToCart } from './Store';

const ViewItem = ({ id }) => {
  const { products, cart } = useSelector((state) => state.item);
  const product = products.find(p => p.id === id);
  const dispatch = useDispatch();
  const closeItem = () => {
    dispatch(closeProduct())
  };
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const addToCart = () => {
    if (!activeSize && !activeColor) {
      setError("Select a color and a size before adding to the cart");
      setTimeout(() => setError(''), 2000);
      return;
    }
    if (!activeSize) {
      setError('Select size before adding to cart');
      setTimeout(() => setError(''), 2000);
      return;
    }
    if (!activeColor) {
      setError('Select color before adding to cart');
      setTimeout(() => setError(''), 2000);
      return;
    }
    const option = document.querySelector('select').value;
    if (activeSize && activeColor) {
      dispatch(addProductToCart({
        ...product,
        size: activeSize,
        color: activeColor,
        quantity: option
      }))
      setSuccess("Successfully added to cart");
      setTimeout(() => setSuccess(''), 2000);
    }
    
    setError('');
  };

  const existingItem = cart.find(item => item.id === id);
  const buttonText = existingItem ? "Added" : "Add to bag";
  const buttonBackgroundColor = existingItem ? "#1a1a1a" : "";
  const buttonColor = existingItem ? "#c3c3c3" : "";

  const [activeSize, setActiveSize] = useState("S");
  const setSize = (size) => {
    setActiveSize(activeSize === size ? "" : size);
  }

  const [activeColor, setActiveColor] = useState(existingItem ? existingItem.color : "light-brown");
  const setColor = (color) => {
    setActiveColor(activeColor === color ? "" : color);
  };

  useEffect(() => {
    if (existingItem) {
      setActiveSize(existingItem.size);
      setActiveColor(existingItem.color);
      setActiveOption(existingItem.option);
    }
  }, [cart, existingItem]);

  const [activeOption, setActiveOption] = useState(existingItem ? existingItem.quantity : 1);
  const setOption = (option) => {
    setActiveOption(activeOption === option ? "" : option);
  }

  return (
    <>
      <div className='an-item'>
        <IoChevronBackSharp className='back-icon' onClick={closeItem} />
        <div className='viewed-item'>
          <div>
            <ul className='item'>
              <div className='item-img'>
                <img src={product.src} alt={product.alt} />
              </div>
              <div className='img-details'>
                <div className='details'>
                  <li className='brand'>{product.brand}</li>
                  <li>{product.name}</li>
                </div>
                <li><b>{"$" + product.price}</b></li>
              </div>
            </ul>
          </div>

          <div className='shirt-size'>
            <b className={activeSize === "S" ? "active" : ""} onClick={() => setSize("S")}>S</b>
            <b className={activeSize === "M" ? "active" : ""} onClick={() => setSize("M")}>M</b>
            <b className={activeSize === "L" ? "active" : ""} onClick={() => setSize("L")}>L</b>
            <b className={activeSize === "XL" ? "active" : ""} onClick={() => setSize("XL")}>XL</b>
          </div>

          <div className='shirt-features'>
            <div className='shirt-color'>
              <span className={activeColor === "light-brown" ? "light-brown color active-color" : "light-brown color"} onClick={() => setColor("light-brown")}></span>
              <span className={activeColor === "black" ? "black color active-color" : "black color"} onClick={() => setColor("black")}></span>
              <span className={activeColor === "brown" ? "brown color active-color" : "brown color"} onClick={() => setColor("brown")}></span>
              <span className={activeColor === "red" ? "red color active-color" : "red color"} onClick={() => setColor("red")}></span>
            </div>

            <select value={activeOption} onChange={e => setOption(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className='shirt-details'>
            <div className='shirt'>
              <strong>Product details</strong>
              <p>T-shirt, round neck, 3/4 sleeves</p>
            </div>
            <div className='shirt'>
              <strong>Matiral</strong>
              <p>100% T-shirt</p>
            </div>
          </div>
          <div><p className='error-massage'>{error}</p></div>
          {success && <p className='success-message'>{success}</p>}
          <div className='btn'>
            <p className='add-to-cart' onClick={addToCart} style={{ backgroundColor: buttonBackgroundColor, color: buttonColor }}><FiShoppingBag className='cart-bag' /> {buttonText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewItem;
