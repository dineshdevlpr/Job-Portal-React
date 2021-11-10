import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import loader from '../../../loader.svg'


export default function LoginRecruiter() {

    const [email, setEmail] = useState("");
    let [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("");
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        await fetch("https://jobportaltask.herokuapp.com/recruiter/login", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          "Content-type": "application/json",
        }
      })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("authToken", `${response.authToken}`);
         alert("Successfully Logged In")
         history.push("/recruiter/portalhome")
      })
      .catch(error => {
         console.log(error)
         history.push("/recruiter/login")
      });
      
    }


    return (
        <>{ loading
            ?
            <div className="text-center"><img src={loader} alt='redirecting'/><h5>Logging In...</h5></div>
            :
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-primary">Login as Recruiter</h3>
                                <div className="form-group">
                                    <label for="email" className="text-primary">Email:</label><br/>
                                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-primary">Password:</label><br/>
                                    <input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div className="form-group">
                                    <Link to="/recruiter/forgot" className="text-muted">Forgot Password ?</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <Link to="/recruiter/register" className="text-muted">New User ? Click here to Register</Link><br/> <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}