import { useState, useEffect } from "react";
import { Link , useHistory } from "react-router-dom";
import loader from '../../../loader.svg'

export default function ViewRecruiterSide () {

    
    const history = useHistory();
    let [loading, setLoading] = useState(true)
    let [data, setdata] = useState([])
    const authToken = localStorage.getItem("authToken")
  
    useEffect( () => {
        async function fetchData() {
        let fetchData = await fetch("https://jobportaltask.herokuapp.com/recruiter-portal/listjobs", {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json",
            "Authorization" : authToken
          },
        })
        let jobs = await fetchData.json();
       
        setdata([...jobs]);
        setLoading(false)
    }
    fetchData();
    }, [authToken])
    
    return <>{ loading
        ?
        <div className="text-center"><img src={loader} alt='redirecting'/><h3>Loading Job List</h3></div>
        :
        <div className="container" id="List__Container">
            <div className="row">
                <div className="col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>List of Jobs</h1>
                        <Link to="/recruiter/portalhome" className="text-muted">Home</Link>
                        </div>              
                    </div>             
                </div>
            </div>
         <br/>
            <div class="row">
                {
                    data.map((obj) => {
                        return <div className="col-md-3 mt-2">
                            <div className="card  mb-3 d-flex align-items-stretch h-100" id="List__cards">
                                <div className="card-body text-dark" key ={obj._id}>
                                    <p className="card-text"><b>Job ID : </b>{obj.jobId} </p>
                                    <p className="card-text"><b>Role :</b> {obj.description} </p>
                                    <p className="card-text"><b>Skills Required :</b> {obj.skills} </p>
                                    <p className="card-text"><b>Listed on :</b> {obj.date} </p>
                                    <button className="btn btn-outline-success m-1" onClick={()=>history.push(`/recruiter/appliedcandidates/${obj._id}`)}>View Applied Candidates</button>
                                    <button className="btn btn-outline-info m-1" onClick={()=>history.push(`/recruiter/updatejob/${obj._id}`)}>Edit Job</button>
                                    <button className="btn btn-outline-danger m-1" onClick={()=>history.push(`/recruiter/deletejob/${obj._id}`)}>Delete Job</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    }
    </>
}