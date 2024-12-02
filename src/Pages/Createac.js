import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Createac({ onSubmit }) {
    const [Fname, setfname] = useState('');
    const [Lname, setlname] = useState('');
    const [Email, setemail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ Fname, Lname, Email });
        setfname('');
        setlname('');
        setemail('');
        document.getElementById("reset").reset();
    };
    return (
        <div className='ctac-p1'>
            <div className='ctac-p1-p1'>
                <h2>CREATE AN ACCOUNT</h2>
                <hr className='login-p1-p1-hr' />
                <form id="reset" onSubmit={handleSubmit}>
                    <h6>First Name
                        <span style={{ color: 'red' }}>*</span>
                    </h6>
                    <input type="text" className='ctac-input' required onChange={(e) => setfname(e.target.value)} value={Fname} />

                    <h6>Last Name
                        <span style={{ color: 'red' }}>*</span>
                    </h6>
                    <input type="text" className='ctac-input' required onChange={(e) => setlname(e.target.value)} value={Lname} />

                    <h6>Email Address <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' required onChange={(e) => setemail(e.target.value)} value={Email} />

                    <h6>Password <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' required />

                    <h6>Confirm Password <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' required /><br />
                    <button className='ctac-btn'>SUBMIT</button>
                </form>
            </div>
            <div className="ctac-p1-p2">
                <h6>Already have an (company) Account? &nbsp; <Link to='/aclogin'> Login.</Link></h6>
            </div>
        </div>
    )
}

export default Createac;
