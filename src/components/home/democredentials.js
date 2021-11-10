import React from 'react'
import { Link } from "react-router-dom";


function DemoCredentials() {

    return (
        <>
            <div className="container">
            <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                        <div className="form-group ml-3">
                                    <div className="card text-dark"><u><strong><h3 style={{textAlign: "center"}}>For Candidate</h3></strong></u>
                                        <ul>   
                                            <li>Email ID : candidate@mail.com</li>
                                            <li>Password : 123</li>
                                            <li><Link to="/candidate/login" className="text-success">Login as Candidate</Link></li> 
                                        </ul>
                                    </div>
                                    <div className="card text-dark"><u><strong><h3 style={{textAlign: "center"}}>For Recruiter</h3></strong></u>
                                        <ul>   
                                            <li>Email ID : recruiter@mail.com</li>
                                            <li>Password : 123</li>
                                            <li><Link to="/recruiter/login" className="text-success">Login as Recruiter</Link></li> 
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DemoCredentials