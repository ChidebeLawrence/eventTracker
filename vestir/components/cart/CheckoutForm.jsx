import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si"

const CheckoutForm = () => {
    return (
        <>
            <form className='checkout'>
                <div className='billing'>
                    <h3>Billing Address</h3>
                    <div className='lable'>
                        <p>Full Name</p>
                        <input type="text" name="text" placeholder='John M. Doe' />
                    </div>
                    <div className='lable'>
                        <p>Email</p>
                        <input type="email" name="email" placeholder='john@example.com' />
                    </div>
                    <div className='lable'>
                        <p>Address</p>
                        <input type="text" name="address" placeholder='542 W. 15th Street' />
                    </div>
                    <div className='lable'>
                        <p>City</p>
                        <input type="text" name="city" placeholder='New York' />
                    </div>
                    <div className='lable'>
                        <p>State</p>
                        <input type="text" name="state" placeholder='NY' />
                    </div>
                    <div className='lable'>
                        <p>Zip</p>
                        <input type="text" name="zip" placeholder='100001' />
                    </div>
                </div>
                <div className='payment'>
                    <h3>Payment</h3>
                    <p className='accept'>Accepted Cards</p>
                    <div className='cards'>
                        <FaCcVisa className='visa' />
                        <SiAmericanexpress className='express' />
                        <FaCcMastercard className='master' />
                        <FaCcDiscover className='discover' />
                    </div>
                    <div className='lable'>
                        <p>Name on Card</p>
                        <input type="text" name="text" placeholder='John More Doe' />
                    </div>
                    <div className='lable'>
                        <p>Credit card number</p>
                        <input type="number" name="number" placeholder='1111-2222-333-4444' />
                    </div>
                    <div className='lable'>
                        <p>Exp Month</p>
                        <input type="text" name="month" placeholder='September' />
                    </div>
                    <div className='lable'>
                        <p>Exp Year</p>
                        <input type="number" name="year" placeholder='2023' />
                    </div>
                    <div className='lable'>
                        <p>CVV</p>
                        <input type="number" name="cvv" placeholder='352' />
                    </div>
                </div>

                <button>Countinue to checkout</button>
                <button className='cancle'>Cancle</button>
            </form>
        </>
    )
}

export default CheckoutForm