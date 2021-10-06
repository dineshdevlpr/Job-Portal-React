import React from 'react'
import { Link } from "react-router-dom";


function PortalHome() {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                        <div className="form-group ml-3">
                                    <Link to="/recruiter/createjob" className="text-muted"><h3>► Create Job</h3></Link> 
                                    <Link to="/recruiter/viewjobs" className="text-muted"><h3>► View Jobs</h3></Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortalHome