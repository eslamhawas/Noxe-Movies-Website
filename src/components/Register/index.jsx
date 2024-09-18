import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Joi from "joi";

function Register(props) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [formdata, setFormdata] = useState({
        userName: "",
        email: "",
        password: "",
        rePassword: "",
        dateOfBirth: "",
    });
    const [validationErrors, setValidationErrors] = useState([]);


    function getData(e) {
        let data = {...formdata};
        data[e.target.name] = e.target.value;
        setFormdata(data);
    }

    function validation() {
        let schema = Joi.object({
            userName: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            email: Joi.string()
                .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            rePassword: Joi.ref('password'),

            dateOfBirth: Joi.date()
                .required()
        });

        return schema.validate(formdata, {abortEarly: false});
    }

    function handleSubmit(e) {
        e.preventDefault();
        let joiErrors = validation();
        if (joiErrors?.error) {
            setValidationErrors(joiErrors.error.details);
            console.log(joiErrors.error.details);
        } else {
            axios.post("http://hawas.runasp.net/api/v1/Register", formdata)
                .then(res => {
                    console.log(res);
                    navigate("/login");
                })
                .catch(err => {
                    let {response: {data}} = err;
                    console.log(data);
                    setErrorMessage(data);
                })
        }

    }

    return (
        <div className="w-75 mx-auto my-5">
            <h1 className="text-center">Register Now</h1>
            {errorMessage.length ? (
                    <h6 className="alert alert-danger text-center">{errorMessage}</h6>
                ) :
                (<></>)}
            {validationErrors.length ? validationErrors.map((err,i) => (
                    <h6 key={i} className="alert alert-danger text-center mt-3">{err.message}</h6>
                ))
                : <></>}
            <form action="" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="">
                    Username
                </label>
                <input type="text" className="form-control mb-3" placeholder="Username" name="userName"
                       onChange={getData} />

                <label className="form-label" htmlFor="">
                    Email
                </label>
                <input type="email" className="form-control mb-3" placeholder="Email" name="email" onChange={getData} />

                <label className="form-label" htmlFor="">
                    Date of Birth
                </label>
                <input type="date" className="form-control mb-3" placeholder="Date of Birth" name="dateOfBirth"
                       onChange={getData} />

                <label className="form-label" htmlFor="">
                    Password
                </label>
                <input type="password" className="form-control mb-3" placeholder="Passowrd" name="password"
                       onChange={getData} />
                <label className="form-label" htmlFor="">
                    Confirm Password
                </label>
                <input type="password" className="form-control mb-3" placeholder="Passowrd" name="rePassword"
                       onChange={getData} />

                <button type="submit" className="btn btn-outline-info ">Submit</button>
            </form>
        </div>
    );
}

export default Register;