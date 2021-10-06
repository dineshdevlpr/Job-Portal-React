import React from 'react'
import { Link } from "react-router-dom";


function Home() {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                        <div className="form-group ml-3">
                                    <Link to="/candidate/login" className="text-muted"><h3>► Register/Login as Candidate</h3></Link> 
                                    <Link to="/recruiter/login" className="text-muted"><h3>► Register/Login as Recruiter</h3></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home