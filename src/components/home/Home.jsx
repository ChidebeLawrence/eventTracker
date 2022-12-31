import React from 'react';
import { BiFilterAlt } from "react-icons/bi"
import { HiOutlineTranslate } from "react-icons/hi"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { openProduct } from '../Store';
import ViewItem from '../ViewItem';

const Home = () => {
  const { products, itemToView } = useSelector((state => state.item));

  const dispatch = useDispatch();

  const openItem = (id) => {
    dispatch(openProduct({ id }))
  };

  const [selectQuery, setSelectQuery] = useState("")

  const handleSelect = (event) => {
    setSelectQuery(event.target.value);
  };

  const filteredProducts = selectQuery === ""
    ? products
    : products.filter(product => product.brand === selectQuery);

  return (
    <div className='home'>
      <>
        {
          !itemToView ?
            <>
              <div className='sub-header'>
                <div className='home-select'>
                  <select onChange={handleSelect} value={selectQuery}>
                    <option value=""></option>
                    <option value="Shirt">Shirt</option>
                    <option value="T-shirt">T-shirt</option>
                    <option value="Trouser">Trouser</option>
                    <option value="Short">Short</option>
                    <option value="Jacket">Jacket</option>
                  </select>
                </div>
                <div className='sub-icons'>
                  <BiFilterAlt />
                  <HiOutlineTranslate />
                </div>
              </div>

              <div className='products'>
                {
                  filteredProducts.map((item) => (
                    <ul key={item.id} className='item' onClick={() => openItem(item.id)}>
                      <img src={item.src} alt={item.alt} />
                      <div>
                        <li className='brand'>{item.brand}</li>
                        <li className='name'>{item.name}</li>
                      </div>
                      <div>
                        <li> <b>{"$" + item.price}</b></li>
                      </div>
                    </ul>
                  ))
                }
              </div>
            </>
            : <ViewItem id={itemToView.id} />
        }
      </>
    </div>
  );
}

export default Home;
