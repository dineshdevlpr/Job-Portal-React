import { useState, useEffect } from "react";
import loader from '../../../loader.svg'
import { Link } from "react-router-dom";


export default function AppliedJobs () {

    let [data, setdata] = useState([])
    let [loading, setLoading] = useState(true)
    const authToken = localStorage.getItem("authToken")
    const userEmail = localStorage.getItem("userEmail")
    console.log("render " + authToken , userEmail)
  
    useEffect( () => {
        console.log("useeffect " + authToken , userEmail)
        async function fetchData() {
        let fetchData = await fetch(`https://jobportaltask.herokuapp.com/candidate-portal/appliedjobs/${userEmail}`, {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json",
            "Authorization" : authToken
          },
        })
        let jobs = await fetchData.json();
        console.log(jobs)
        setdata([...jobs]);
        setLoading(false)
    }
    fetchData();
    }, [authToken , userEmail])

   
    return <>
    { loading
        ?
        <div className="text-center"><img src={loader} alt='redirecting'/><h3>Getting Applied Job List</h3></div>
        :
        <div className="container" id="List__Container">
            <div className="row">
                <div className="col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>Applied Jobs</h1>
                        <Link to="/candidate/portalhome" className="text-muted">Home</Link>
                        </div>              
                    </div>             
                </div>
            </div>
         <br/>
            <div class="row">
                {
                    data.map((obj) => {
                        return <div className="col-md-3 mt-2" key ={obj._id}>
                            <div className="card  mb-3 d-flex align-items-stretch h-100" id="List__cards">
                                <div className="card-body text-dark">
                                    <p className="card-text"><b>Job ID : </b>{obj.jobId} </p>
                                    <p className="card-text"><b>Role :</b> {obj.description} </p>
                                    <p className="card-text"><b>Skills Required :</b> {obj.skills} </p>
                                    <p className="card-text"><b>Listed on :</b> {obj.date} </p>
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