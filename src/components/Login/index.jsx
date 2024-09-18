import React, {useState} from 'react';
import Joi from "joi";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(props) {
    let navigate = useNavigate();
    let [formData, setFormData] = useState({
        email: "",
        password: "",
        });
    let [validationErrors, setValidationErrors] = useState([]);

    function getData(e){
        let data = {...formData};
        data[e.target.name] = e.target.value;
        setFormData(data);
    }

    function validateForm(){
        let schema = Joi.object({

            email: Joi.string()
                .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        }

        )
        return schema.validate(formData,{abortEarly:false});
    }

    function handleSubmit(e){
        e.preventDefault();
        let validation = validateForm();
        if (validation?.error){
            setValidationErrors(validation.error.details);
        } else {
            axios.post("http://hawas.runasp.net/api/v1/Login",formData)
                .then(res => {
                    navigate("/home");
                })
                .catch(err => {
                    console.log(err.response.data);
                })
        }
    }

    return (
        <div className="w-75 mx-auto">
            <h1 className="text-center my-3">Login</h1>
            {validationErrors.length?validationErrors.map((err,i) =>(
                    <h6 key={i} className="alert alert-danger">{err.message}</h6>
                )

            ):<></>}
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" id="email" className="form-control mb-3" placeholder="Email" name="email" onChange={getData} />

                <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" className="form-control mb-3" placeholder="Password" name="password" onChange={getData} />

                <button type="submit" className="btn btn-outline-info">Login</button>
            </form>


        </div>
    );
}

export default Login;