import React, { useState } from 'react'
import {Link , useHistory} from "react-router-dom";

export default function RegisterCandidate() {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [degree, setDegree] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchData = await fetch("https://jobportaltask.herokuapp.com/candidate/register", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
        firstname, lastname, degree,
          email,
          password
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (fetchData.status === 200) {
        alert("Check Your Mail for Activation Link")
        history.push("/candidate/login")
    }else {
        console.error("Error Occured");
    }
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Register as Candidate</h3>
                                <div className="form-group">
                                    <label for="firstname" className="text-info">First Name:</label><br/>
                                    <input type="text" id="firstname" name="firstname" required onChange={(e) => setFirstName(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="lastname" className="text-info">Last Name:</label><br/>
                                    <input type="text" id="lastname" name="lastname" required onChange={(e) => setLastName(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="degree" className="text-info">Degree:</label><br/>
                                    <input type="text" id="degree" name="degree" required onChange={(e) => setDegree(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="email" className="text-info">Email:</label><br/>
                                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br/>
                                    <input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div className="form-group">
                                    <Link to="/candidate/login" className="text-muted">Already Registered ? Click here to Login</Link><br/> <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}