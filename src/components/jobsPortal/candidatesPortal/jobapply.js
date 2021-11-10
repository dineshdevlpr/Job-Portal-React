import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import loader from '../../../loader.svg'

export default function JobApply(props){

    let [applied, setApplied]=useState(false);
    const authToken = localStorage.getItem("authToken")
    let userEmail = props.match.params.userEmail
    let id = props.match.params.id
    let jobId = props.match.params.jobId
    let description = props.match.params.description
    let skills = props.match.params.skills
    let history = useHistory();
    console.log("render")
    useEffect(()=>{
        async function fetchdata(){
            console.log("useeffect triggered")
            let data = await fetch(`https://jobportaltask.herokuapp.com/candidate-portal/apply/${userEmail}/${id}/${jobId}/${description}/${skills}`,{
                method: "PUT",
                mode: 'cors',
                body: JSON.stringify({}),
                headers: {
                    "Content-type": "application/json",
                    "Authorization" : authToken
          },
            });
            console.log(data)
            if (data.status===400){
                alert("You have already Applied for this job")
            } else if(data.status===200){
            alert("Job Applied Successfully")}
            setApplied(true)
            setTimeout(()=>{history.push("/candidate/portalhome")},1500)
        }
        fetchdata();
    },[]);
    return<>
        { applied 
        ? 
        <div className="text-center"><img src={loader} alt='redirecting'/><h3>SUCCESS... Redirecting to Home</h3></div>
        : 
        <div className="text-center"><img src={loader} alt='application is being processed'/><h3>Your Application is being processed</h3></div>
          }
    </>
}