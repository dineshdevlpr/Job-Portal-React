import React from 'react'
import { Link } from "react-router-dom";


function Home() {

    return (
        <>
            <div className="container">
                <Link to="/democredentials" className="text-dark" style={{textAlign: "right"}}><h6>Show Demo Credentials(for testing purpose)</h6></Link>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                        <div className="form-group ml-3">
                                    <Link to="/candidate/login" className="text-dark"><h3>► Candidate Portal</h3></Link> 
                                    <Link to="/recruiter/login" className="text-dark"><h3>► Recruiter Portal</h3></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home