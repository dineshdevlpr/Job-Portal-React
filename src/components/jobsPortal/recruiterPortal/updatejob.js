import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import loader from '../../../loader.svg'


export default function UpdateJob(props) {

    const[jobData, setJobData] = useState([])
    const [jobId, setJobId] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const authToken = localStorage.getItem("authToken")
    let [loading, setLoading] = useState(false)
    const history = useHistory();
    let id = props.match.params.id

    if (!authToken){
        alert("No Token Found. Try Log in.")
        history.push("/recruiter/login")
    }

    //get job data to show in the update page
    useEffect( () => {
        async function fetchData() {
        let fetchData = await fetch(`https://jobportaltask.herokuapp.com/recruiter-portal/updatejob/${id}`, {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json",
            "Authorization" : authToken
          },
        })
        let job = await fetchData.json();
       
        setJobData(job);
        console.log(jobData)
        setLoading(false)
    }
    fetchData();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        await fetch(`https://jobportaltask.herokuapp.com/recruiter-portal/updatejob/${id}`, {
        method: "PUT",
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
        alert("Job Successfully Updated")
        history.push("/recruiter/viewjobs")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    }

    return (
        <>{ loading
            ?
            <div className="text-center"><img src={loader} alt='redirecting'/><h5>Posting Job...</h5></div>
            :
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Update Job</h3>
                                <div className="form-group">
                                    <label for="jobId" className="text-info">Enter Job ID</label><br/>
                                    <input type="text" id="jobId" name="jobId" defaultValue={jobData.jobId} required onChange={(e) => setJobId(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="description" className="text-info">Enter Description</label><br/>
                                    <input type="text" id="description" name="description" defaultValue={jobData.description} required onChange={(e) => setDescription(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="skills" className="text-info">Enter Skills Required</label><br/>
                                    <input type="text" id="skills" name="skills" defaultValue={jobData.skills} required onChange={(e) => setSkills(e.target.value)} className="form-control" />
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
        }
        </>
    )
}