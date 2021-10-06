import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";


export default function CreateJob() {

    const [jobId, setJobId] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const authToken = localStorage.getItem("authToken")
    const history = useHistory();

    if (!authToken){
        alert("No Token Found. Try Log in.")
        history.push("/recruiter/login")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://jobportaltask.herokuapp.com/recruiter-portal/createjob", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
            jobId, description, skills
        }),
        headers: {
          "Content-type": "application/json",
          "Authorization" : authToken
        },
      })
      .then(response => response.json())
      .then(data => {
        alert("Job Successfully Created")
        history.push("/recruiter/viewjobs")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Create Job</h3>
                                <div className="form-group">
                                    <label for="jobId" className="text-info">Enter Job ID</label><br/>
                                    <input type="text" id="jobId" name="jobId" required onChange={(e) => setJobId(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="description" className="text-info">Enter Description</label><br/>
                                    <input type="text" id="description" name="description" required onChange={(e) => setDescription(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="skills" className="text-info">Enter Skills Required</label><br/>
                                    <input type="text" id="skills" name="skills" required onChange={(e) => setSkills(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div className="form-group">
                                    <Link to="/recruiter/portalhome" className="text-muted">Click Here to go to Home</Link><br/> <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}