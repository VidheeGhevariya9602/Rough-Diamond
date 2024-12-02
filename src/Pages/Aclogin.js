import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Aclogin() {
    const [pwShown, setPwShown] = useState(false);

    const show = () => {
        const p = document.getElementById("pwd");
        if (p) p.setAttribute("type", "text");
    };

    const hide = () => {
        const p = document.getElementById("pwd");
        if (p) p.setAttribute("type", "password");
    };

    const togglePasswordVisibility = () => {
        if (!pwShown) {
            setPwShown(true);
            show();
        } else {
            setPwShown(false);
            hide();
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById("reset").reset();
    }


    return (
        <div className='login-p1'>
            <div className="login-p1-p1">
                <h2>LOGIN</h2>
                <hr className='login-p1-p1-hr' />
                <form className='login-p1-p1-form' onSubmit={handleSubmit} id='reset'>
                    <div className="con">
                        <div className="field-set">
                            <span className="input-item">
                                <i className="fa fa-user-circle"></i>
                            </span>
                            <input className="form-input" id="txt-input" type="email" placeholder="Email" name="email" required />
                            <br />
                            <span className="input-item">
                                <i className="fa fa-key"></i>
                            </span>
                            <input className="form-input" type={pwShown ? 'text' : 'password'} placeholder="Password" id="pwd" name="password" required />
                            <span>
                                <i className="fa fa-eye" aria-hidden="true" onClick={togglePasswordVisibility} id='eye'></i>
                            </span>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <button className="log-in"> Log In </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="login-p1-p2">
                <h6>NEW TO (company)?</h6>
                <Link to='/ctac'><button className='login-p1-p2-ac'>CREATE AN ACCOUNT</button></Link>
            </div>
        </div>
    );
}

export default Aclogin;
