import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import diamond from './images/WhatsApp Video 2024-07-05 at 15.47.17_526528da.mp4';
import logo from './images/logo1.png';

function Nav() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hideLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(hideLoading);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const loadingSection = document.querySelector('.loading');
      const loadingImage = document.querySelector('.loading video');

      if (loadingImage) {
        loadingImage.addEventListener('transitionend', () => {
          loadingSection.style.display = 'none';
          document.querySelector('body').style.overflow = 'auto';
        });
        loadingImage.style.opacity = '0';
      }
    }
  }, [isLoading]);

  return (
    <>
      <div>
        {isLoading && (
          <div className="loading">
            <video autoPlay loop muted className="myVideo">
              <source src={diamond} type="video/mp4" />
            </video>
          </div>
        )}
        {!isLoading &&
          <>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="nav-link-logo" to='/'>
                  <img src={logo} alt="" className='logoimg' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars bar"></i>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/product'>Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/Contect'>Contact</Link>
                    </li>
                  </ul>
                  <Link to='/Profile'>
                    <button className='user-icon-1'>
                      <i className="fa-solid fa-user user"></i>
                    </button>
                  </Link>
                  <Link to='/cart'>
                    <button className='cart-icon-1'>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </Link>
                </div>
                <Link to='/aclogin'>
                  <button className='nav-btn'>Login</button>
                </Link>
              </div>
            </nav>
            <Outlet />
          </>
        }
      </div>
      <ToastContainer />
    </>
  );
}

export default Nav;