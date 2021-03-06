import { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import loader from '../../../loader.svg'


export default function ViewCandidateSide () {

    let [data, setdata] = useState([])
    let [loading, setLoading] = useState(true)
    const history = useHistory();
    const authToken = localStorage.getItem("authToken")
    const userEmail = localStorage.getItem("userEmail")
  
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
        setLoading(false)
    }
    fetchData();
    }, [authToken])


   
    return <>
    { loading
        ?
        <div className="text-center"><img src={loader} alt='redirecting'/><h3>Loading Job List</h3></div>
        :
        <div className="container" id="List__Container">
            <div className="row">
                <div className="col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>List of Jobs</h1>
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
                                    <button className="btn btn-primary" onClick={()=>history.push(`/candidate/jobapply/${userEmail}/${obj._id}/${obj.jobId}/${obj.description}/${obj.skills}`)}>Apply</button>
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