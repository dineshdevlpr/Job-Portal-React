import { useState, useEffect } from "react";

export default function ViewCandidateSide () {

    let [data, setdata] = useState([])
    const authToken = localStorage.getItem("authToken")
  
    useEffect( () => {
        async function fetchData() {
        let fetchData = await fetch("https://jobportaltask.herokuapp.com/candidate-portal/listjobs", {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json",
            "Authorization" : authToken
          },
        })
        let jobs = await fetchData.json();
       
        setdata([...jobs]);
    }
    fetchData();
    }, [authToken])
    
    return <>
        <div className="container" id="List__Container">
            <div className="row">
                <div className="col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>List of Jobs</h1>
                        </div>              
                    </div>             
                </div>
            </div>
         <br/>
            <div class="row">
                {
                    data.map((obj) => {
                        return <div className="col-md-3 mt-2">
                            <div class="card  mb-3 d-flex align-items-stretch h-100" id="List__cards">
                                <div class="card-body text-dark">
                                    <p className="card-text"><b>Job ID : </b>{obj.jobId} </p>
                                    <p className="card-text"><b>Role :</b> {obj.description} </p>
                                    <p className="card-text"><b>Skills Required :</b> {obj.skills} </p>
                                    <p className="card-text"><b>Listed on :</b> {obj.date} </p>
                                    <button className="btn btn-primary">Apply</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        
    </>
}