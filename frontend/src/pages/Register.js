import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:"",
        email:'',
        password:'',
        mobile:""
    })

    const RegisterUser = () => {
        axios.post('http://localhost:8000/register', formData )
        .then(res=> {
          console.log(res.data);
          navigate('/login')
        } )
    }
  return (
    <div className="row">
      <div className="col-4 p-4 mx-auto mt-2">
        <section className="d-flex justify-content-center">
          <img src={logo} />
        </section>
        <section className="border p-3 rounded-2">
          <p className="fs-4">Register</p>
          <section>
          <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                value={formData.name}
                onChange={(e)=>setFormData({...formData, name:e.target.value})}
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="Mobile" className="form-label">
               Mobile
              </label>
              <input
               value={formData.mobile}
                onChange={(e)=>setFormData({...formData, mobile:e.target.value})}
                type="text"
                className="form-control"
                id="Mobile"
                aria-describedby="emailHelp"
              />
            
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
               value={formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
               value={formData.password}
                onChange={(e)=>setFormData({...formData, password:e.target.value})}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" onClick={RegisterUser} className="btn btn-warning w-100">
              Register
            </button>
          </section>
        </section>
       <div className="p-3">
       <button type="submit" onClick={()=>{
         navigate('/login')
       }} className="btn btn-secondary w-100">
              Already have an account
        </button>
       </div>
      </div>
    </div>
  );
}

export default Register;
