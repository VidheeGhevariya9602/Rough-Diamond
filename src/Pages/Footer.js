import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from './img/logo.png';

function Footer() {
    const send = () => {
        document.getElementById("email").value = "";
        alert("Sign up successfully 😊..")
    }
    return (
        <>
            <div className='footer-p1'>
                <ul className='footer-ul1'>
                    <header className='footer-header'>K & K Rough Diamond</header>
                    <Link to='/product' className='link-text'><li>Our Product</li></Link>
                    <Link to='/cart' className='link-text'><li>Cart</li></Link>
                    <Link to='/blog' className='link-text'><li>Blogs</li></Link>
                    <Link to='/Login' className='link-text'><li>Log in</li></Link>
                    <Link to='/Report' className='link-text'><li>Report</li></Link>
                </ul>
                <ul className='footer-ul2'>
                    <header className='footer-header'>About Us</header>
                    <Link to='/Aboutsss' className='link-text'><li>Diamond mini guide</li></Link>
                    <Link to='/Aboutdg' className='link-text'><li>Our Diamond Gallery</li></Link>
                    <Link to='/Aboutdr' className='link-text'><li>delivery & Return</li></Link>
                    <Link to='/Certification' className='link-text'><li>Certification</li></Link>
                </ul>
                <div className='footer-p2'>
                    <header className='footer-header'>Sign Up to Get Email Updates</header>
                    <input type="email" name="email" id="email" placeholder='EMAIL ADDRESS' className='footer-email' required />
                    <input type="button" value="Sigh up" onClick={send} className='footer-btn' />
                </div>
                <ul className="footer-ul3">
                    <header className='footer-header'>Contact Us</header>
                    <li>Tel: +86-371-68616866</li>
                    <li>Fax: +86-371-68616868</li>
                </ul>
                <div className="footer-p3">
                    <header className='footer-header'>Follow Us</header>
                    <nav className='nav-text'>
                        <i className="fa fa-facebook foter-f"></i>
                        <i className="fa fa-whatsapp foter-w"></i>
                        <i className="fa fa-instagram foter-i"></i>
                    </nav>
                </div>
                <hr className='footer-hr' />
                <p className='footer-p'>© 2018 K&K Rough Diamond. All Rights Reserved.</p>
                <img src={logoimg} alt="logo-img" className='footer-img' />
                <p className='footer-pp2'>Rough diamonds may sometimes be mistaken for worthless pebbles. Diamonds are intrinsically worthless, except for the deep psychological need they fill.</p>
            </div>
        </>
    )
}

export default Footer
