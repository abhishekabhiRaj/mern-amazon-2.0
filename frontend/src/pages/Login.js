import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../app/features/userSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const LoginUser = () => {
        axios.post('http://localhost:8000/login', formData )
        .then(res=> {
          if(res.data.status == 200){
            // navigate('/')
            dispatch(setUser({value:res.data.data}))
          }else{
            window.alert(res.data.message)
          }
        } )
    }
  return (
    <div className="row">
      <div className="col-4 p-4 mx-auto mt-2">
        <section className="d-flex justify-content-center">
          <img src={logo} />
        </section>
        <section className="border p-3 rounded-2">
          <p className="fs-4">Login</p>
          <section>
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
            <button type="submit" onClick={LoginUser} className="btn btn-warning w-100">
              Login
            </button>
          </section>
        </section>
        <div className="p-3">
       <button type="submit" onClick={()=>{
         navigate('/register')
       }} className="btn btn-secondary w-100">
              Don't  have an account
        </button>
       </div>
      </div>
    </div>
  );
}

export default Login;
