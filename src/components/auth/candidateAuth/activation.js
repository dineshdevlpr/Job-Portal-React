import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

export default function ActivationCandidate(props){

    let [status,setStatus]=useState("");
    let history = useHistory();
    useEffect(()=>{
        async function fetchdata(token){
            let data = await fetch(`https://jobportaltask.herokuapp.com/candidate/activation/${token}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                }
            });
            if(data.status===200)
            setStatus("200");
            else
            setStatus(data.status.toString());
        }
        fetchdata(props.match.params.token);
    },[props.match.params.token]);
    return<>
        { status !== "200"? <div> Your Account is being activated</div> : history.push("/candidate/login") }

    </>
}