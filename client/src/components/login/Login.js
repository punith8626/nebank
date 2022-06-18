import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { signin } from "../../actions/auth";
let initialState = { email: '', password: '' };
export const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        if(logindetails.email !='' && logindetails.password !=''){
            dispatch(signin(logindetails, history))
        }        

    }
    const [logindetails, setLogindetails] = useState(initialState);
    const handleChange = (e) => {
        setLogindetails({ ...logindetails, [e.target.name]: e.target.value })
    }
    return (
        <React.Fragment>
            <div id='login'>
                <main className="form-signin w-100 m-auto">
                    <img src={logo} alt="logo" className="mb-3" />
                    <Form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label  className="form-label">Email</label>
                            <Form.Control
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <Form.Control
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button className="w-100 btn  btn-danger" type="submit">Login</Button>
                        <p className="text-end mt-3">
                            {/* <a  className="forgotpass"> Forgot password ?</a> */}
                            <Link to="#">Forgot password ?</Link>
                        </p>
                    </Form>
                </main>
            </div>
        </React.Fragment>
    )
}
