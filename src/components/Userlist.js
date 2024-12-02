import React, { useRef, useState } from 'react';
import "./Userlist.css";

function Userlist({ data }) {
    const profilePIcDefault =
        "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
    const InputRef = useRef(null);
    const [img2, setImg2] = useState();
    const imgClick = () => {
        InputRef.current.click();
    }
    const imgClickChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setImg2(file);
    }

    return (
        <>
            <div className='pro'>
                <div className='pro-1'>
                    <h1>My Profile</h1>
                </div>
                <div className="profileset" onClick={imgClick}>
                    {img2 ?
                        <img src={URL.createObjectURL(img2)} alt='img' /> :
                        <img src={profilePIcDefault} alt="avatar" />
                    }
                    <input type="file" ref={InputRef} onChange={imgClickChange} id="formFile" className="form-control" />
                </div>

                <table className="table-1">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    <tbody className="tbody-1">
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Fname} {item.Lname}</td>
                                <td>{item.Email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Userlist;
