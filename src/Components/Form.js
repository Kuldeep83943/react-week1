import React, { useState } from "react";

const Form = () => {

    const [FormData, setFormData] = useState({
        email: "", password: "", cpassword: ""
    });

    let [emailErr, setEmailErr] = useState(true);
    let [passwordErr, setPasswordErr] = useState(true);
    let [cpasswordErr, setCpasswordErr] = useState(true);

    const handleChange = (e) => {
        console.log(e.target.name)

        if (e.target.name === 'email') {

            const emailCheck =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


            if (!emailCheck.test(e.target.value)) {
                setEmailErr(true);

            } else {
                setEmailErr(false);
            }
        } else if (e.target.name === 'password') {

            if (e.target.value.length < 8) {
                setPasswordErr(true);
            } else {
                setPasswordErr(false)
            }

        } else {
            if (e.target.value !== FormData.password) {
                setCpasswordErr(true);
            } else {
                setCpasswordErr(false)
            }

        }

        setFormData({ ...FormData, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailErr && !passwordErr && !cpasswordErr) {
            alert("Form submitted successfully!");
            setFormData({ email: "", password: "", cpassword: "" })
            setEmailErr(true);
            setPasswordErr(true);
            setCpasswordErr(true);
        } else {
            alert("Error: Invalid input")
        }

    }

    return (
        <div className="form-div">
            <form>
                <div className="form-container">
                    <label for="email">Email: </label>
                    <br />
                    <input type="email" className={emailErr && 'input-err'} name="email" id="email" value={FormData.email} onChange={(e) => handleChange(e)} />
                    <br />
                    {emailErr && <small>Enter valid email</small>}
                </div>

                <div className="form-container">
                    <label for="password">Password: </label>
                    <br />
                    <input type="password" className={passwordErr && 'input-err'} name="password" id="password" value={FormData.password} onChange={(e) => handleChange(e)} />
                    <br />
                    {passwordErr && <small>Password must be atleast 8 characters</small>}
                </div>

                <div className="form-container">
                    <label for="cpassword">Confirm Password: </label>
                    <br />
                    <input type="password" className={cpasswordErr && 'input-err'} name="cpassword" id="cpassword" value={FormData.cpassword} onChange={(e) => handleChange(e)} />
                    <br />
                    {cpasswordErr && <small>Password do not match</small>}
                </div>

                <div className="btn-box">
                    <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;