import React from 'react';
import { RiDeleteBin7Line } from "react-icons/ri"
import { UserContext } from '../../App';
import { useContext } from 'react';

const CartItems = ({ item }) => {
    const deleteItem = useContext(UserContext)
    return (
        <div className='item-container'>
            <div key={item.id}>
                <div className='cart-item'>
                    <img src={item.src} alt={item.alt} />
                    <div className='cart-details'>
                        <p className='product-name'>{item.brand}</p>
                        <p>{item.name}</p>
                        <p><b>{item.price}</b></p>
                    </div>
                    <p><RiDeleteBin7Line onClick={() => deleteItem(item.id)} /></p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default CartItems;
