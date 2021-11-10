import React from 'react'
import { Link } from "react-router-dom";


function CandidatePortalHome() {
    
    const userEmail = localStorage.getItem("userEmail")

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                        <div className="form-group ml-3">
                                    <Link to="/candidate/viewjobs" className="text-muted"><h3>► View Jobs</h3></Link> 
                                    <Link to={`/candidate/appliedjobs/${userEmail}`} className="text-muted"><h3>► Applied Jobs</h3></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidatePortalHome