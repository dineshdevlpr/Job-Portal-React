import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import loader from '../../../loader.svg'

export default function AppliedCandidate (props) {

    let [loading, setLoading] = useState(true)
    let [data, setdata] = useState([])
    const authToken = localStorage.getItem("authToken")
    let id = props.match.params.id
    let history = useHistory();
  
    useEffect( () => {
        async function fetchData() {
        let fetchData = await fetch(`https://jobportaltask.herokuapp.com/recruiter-portal/candidates-applied/${id}`, {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json",
            "Authorization" : authToken
          },
        })
        let candidateEmail = await fetchData.json();
        if (candidateEmail.length >=0){
            setdata([...candidateEmail]);
        } else {
            alert("No Applicants for this job Yet")
            history.push("/recruiter/viewjobs")
        }
       
        
        setLoading(false)
    }
    fetchData();
    }, [])
    
    return <>{ loading
        ?
        <div className="text-center"><img src={loader} alt='redirecting'/><h3>Loading Candidates applied List</h3></div>
        :
        
        <div>
        <div className="container" id="List__Container">
            <div className="row">
                <div className="col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>Email ID of Candidates Applied</h1>
                        <Link to="/recruiter/portalhome" className="text-muted">Home</Link>
                        </div>              
                    </div>             
                </div>
            </div><br/>
        </div>
        <div>
            { data.map((obj) => {
                return <div className="col-md-3 mt-2">
                        <ol>
                            <strong><li className="mb-3" >{obj.email}</li></strong>
                        </ol>
                </div>
            })}
        </div>
        </div>

    }
    </>
}
