import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/cartSlice';
import './ProductList.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset } = useForm();

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    const totalPrice = cartItems.reduce((total, item) => {
        // Ensure item.price is a number
        const price = parseFloat(item.price);
        if (isNaN(price)) {
            return total; // Skip this item if price is invalid
        }
        return total + price;
    }, 0);
    const formattedTotalPrice = totalPrice.toFixed(2);


    const onSubmit = async (data, e) => {
        e.preventDefault();
        const userInfo = {
            f_name: data.f_name,
            l_name: data.l_name,
            mo_number: data.mo_number,
            state: data.state,
            city: data.city,
            area: data.area,
            payment_method: data.payment_method,
        };

        try {
            const res = await axios.post("http://localhost:4001/user/placeorder", userInfo);
            alert(res.data.message);
            reset(); // Reset form using react-hook-form
            setShowModal(false); // Close modal after submission
        } catch (err) {
            console.error(err);
            if (err.response) {
                alert("Error: " + err.response.data.message);
            } else {
                alert("An unexpected error occurred.");
            }
        }
    };


    return (
        <>
            <div className="cart">
                <div className="cart-1">
                    <h1>Your Cart</h1>
                    <button onClick={handleClear} className="clear-cart-button">Clear Cart</button>
                </div>
                {cartItems.length === 0 ? (
                    <p className='empty-cart-message'>Your cart is empty.</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>₹{item.price}</p>

                                    <button onClick={() => handleRemove(item)} className="remove-button">Remove</button>
                                </div>
                            </div>
                        ))}
                        <>
                            <div className="place-order-container">
                                <h4 className='totalP'>Total Price : ₹ {formattedTotalPrice}</h4>

                                <button className="buy-btn placeorder" onClick={() => setShowModal(true)}>
                                    Place Order
                                </button>
                            </div>
                            {showModal && (
                                <div className="modal fade show" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog" style={{ display: 'block' }}>

                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Fill Your Information</h5>
                                                <button type="button" className="btn-close closebtn" onClick={() => setShowModal(false)} aria-label="Close">X</button>
                                            </div>
                                            <div className="modal-body">
                                                <form id='input1' onSubmit={handleSubmit(onSubmit)}>
                                                    <input type="text" placeholder="first name" className="in1" id="fname" {...register("f_name", { required: true })} />
                                                    <input type="text" placeholder="last name" className="in2" id="lname" {...register("l_name", { required: true })} /><br />
                                                    <input type="text" placeholder="phone number" maxLength={10} className="in1" id="num" {...register("mo_number", { required: true })} /><br />
                                                    <label className="l1">Address</label><br />
                                                    <input type="text" placeholder="state" className="in2" id="address" {...register("state", { required: true })} />
                                                    <input type="text" placeholder="city" className="in2" id="address" {...register("city", { required: true })} /><br />
                                                    <input type="text" className='in4' placeholder='house number, building name, area name' {...register("area", { required: true })} /><br />
                                                    <div className='totalp'>Total Price :<p className='totalINform'> ₹ {formattedTotalPrice}</p></div>

                                                    <br />

                                                    <label className="l1" id='gender'>Payment</label>
                                                    <div className="rb">
                                                        <input type="radio" className='ckb' value='COD' {...register("payment_method", { required: true })} />
                                                        <label>Cash on Delivery</label> <br />
                                                        <input type="radio" className='ckb' value='Online' {...register("payment_method", { required: true })} disabled />
                                                        <label className='opd'>Online Payment (Using Credit Card)</label>
                                                    </div>
                                                    <button type="submit" className="btn-submit orderSubmit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    </div>
                )}
            </div >
        </>
    )
};

export default Cart;
