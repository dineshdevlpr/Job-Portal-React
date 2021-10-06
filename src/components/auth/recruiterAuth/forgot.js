import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function ForgotrRecruiter() {

    const [email, setEmail] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchData = await fetch("https://jobportaltask.herokuapp.com/recruiter/forgot", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          email
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
        if (fetchData.status === 200) {
        alert("Password reset link has been sent to your registered mail address. Check Spam folder as well")
        history.push("/recruiter/login")
        }else {
            alert("Error Occured");
        }
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Forgot Password</h3>
                                <div className="form-group">
                                    <label for="email" className="text-info">Email:</label><br/>
                                    <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}