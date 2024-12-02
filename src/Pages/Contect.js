import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from './Footer';

function Contect() {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            mo_number: data.mo_number,
            country: data.country,
            content: data.content,
        };

        try {
            const res = await axios.post("http://localhost:4001/user/contact", userInfo);
            console.log(res.data);
            alert(res.data.message);
            document.getElementById("reset").reset(); // Reset form
        } catch (err) {
            console.error(err);
            if (err.response) {
                alert("Error: " + err.response.data.message);
            } else {
                alert("An unexpected error occurred.");
            }
        }
    }

    return (
        <>
            <div className="contact-us-container">
                <h1>Get in Touch</h1>
                <p>We are looking forward to offering you help about our products and related services.</p>
                <div className="contact-form">
                    <form onSubmit={handleSubmit(onSubmit)} id="reset">
                        <span className="input-item-2">
                            <i className="fa-regular fa-user"></i>
                        </span>
                        <input className="form-input2" type="text" placeholder="*Name"
                            {...register("name", { required: true })} required />
                        <span className="input-item-2">
                            <i className="fa-regular fa-envelope"></i>
                        </span>
                        <input className="form-input2" type="email" placeholder="*Email"
                            {...register("email", { required: true })} required />
                        <br />
                        <span className="input-item-2">
                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <input className="form-input2" type="text" maxLength={10} placeholder="Number"
                            {...register("mo_number", { required: true })} required />
                        <span className="input-item-2">
                            <i className="fa-solid fa-location"></i>
                        </span>
                        <input className="form-input2" type="text" placeholder="Country"
                            {...register("country", { required: true })} required />
                        <br />
                        <span className="input-item-2">
                            <i className="fa-regular fa-comment-dots"></i>
                        </span>
                        <input className="form-input2" type="text" placeholder="*Content"
                            {...register("content", { required: true })} required />
                        <br />
                        <input type="submit" value="Submit" className='contact-btn' />
                    </form>
                </div>
            </div>
            <div className='contact-us-container-2'>
                <div className='bgvideo-text'>
                    <h4>Our Location</h4>
                    <p>1841&1842, Tower A, Wanda Plaza, #171, Zhongyuan Road, Zhengzhou, Henan, India</p>
                    <h2>Quick Touch</h2>
                    <i className="fa-solid fa-phone bg-phone"></i>
                    <h6>Tel: +86-371-68616866 <br /> Fax: +86-371-68616868</h6>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </>
    )
}

export default Contect;