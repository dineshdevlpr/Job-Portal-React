import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom";

export default function ResetRecruiter() {


    const [password, setPassword] = useState("");
    const history = useHistory();
    const { randomString } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchData = await fetch(`https://jobportaltask.herokuapp.com/recruiter/reset/${randomString}`, {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          password, randomString
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
        if (fetchData.status === 200) {
        alert("Password reset Successful")
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
                        <div lassName="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Reset Password</h3>
                                <div className="form-group">
                                    <label for="password" className="text-info">New Password:</label><br/>
                                    <input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" />
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