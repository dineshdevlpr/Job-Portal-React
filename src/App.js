import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// candidate routes import for auth
import RegisterCandidate from './components/auth/candidateAuth/register';
import LoginCandidate from './components/auth/candidateAuth/login';
import ForgotCandidate from './components/auth/candidateAuth/forgot';
import ResetCandidate from './components/auth/candidateAuth/reset';
import ActivateCandidate from './components/auth/candidateAuth/activation';

// recruiter routes import for auth
import RegisterRecruiter from './components/auth/recruiterAuth/register';
import LoginRecruiter from './components/auth/recruiterAuth/login';
import ForgotRecruiter from './components/auth/recruiterAuth/forgot';
import ResetRecruiter from './components/auth/recruiterAuth/reset';
import ActivateRecruiter from './components/auth/recruiterAuth/activation';

//import landing page routes
import Home from './components/home/home'
import DemoCredentials from './components/home/democredentials'
import Header from "./components/header/header";


// import recruiter side portal
import RecruiterPortalHome from './components/jobsPortal/recruiterPortal/portalhome'
import CreateJob from './components/jobsPortal/recruiterPortal/createJob'
import ViewRecruiterSide from './components/jobsPortal/recruiterPortal/recruiterView'
import AppliedCandidate from './components/jobsPortal/recruiterPortal/appliedbycandidates'
import UpdateJob from './components/jobsPortal/recruiterPortal/updatejob'
import DeleteJob from './components/jobsPortal/recruiterPortal/deletejob'

// import candidate side portal
import CandidatePortalHome from './components/jobsPortal/candidatesPortal/portalhome'
import ViewCandidateSide from './components/jobsPortal/candidatesPortal/candidateView'
import AppliedJobs from './components/jobsPortal/candidatesPortal/appliedjobs'
import JobApply from './components/jobsPortal/candidatesPortal/jobapply'


import { TokenProvider } from './TokenContext.js';


function App() {

  return (
  <>
  <Header/>
<Router> 
  <Switch>
  <TokenProvider>

    {/* Landing Page */}
    <Route path = '/' component={Home} exact></Route>
    <Route path = '/democredentials' component={DemoCredentials} exact></Route>

    {/* candidate auth routes */}
    <Route path='/candidate/register' component={RegisterCandidate} exact ></Route>
    <Route path='/candidate/login' component={LoginCandidate} exact ></Route>
    <Route path ='/candidate/forgot' component={ForgotCandidate} exact ></Route>
    <Route path="/candidate/activation/:token" component={ActivateCandidate} exact ></Route>
    <Route path ='/candidate/reset/:randomString' component={ResetCandidate} exact ></Route>

    {/* recruiter auth routes */}
    <Route path='/recruiter/register' component={RegisterRecruiter} exact ></Route>
    <Route path='/recruiter/login' component={LoginRecruiter} exact ></Route>
    <Route path ='/recruiter/forgot' component={ForgotRecruiter} exact ></Route>
    <Route path="/recruiter/activation/:token" component={ActivateRecruiter} exact ></Route>
    <Route path ='/recruiter/reset/:randomString' component={ResetRecruiter} exact ></Route>

    {/* recruiter job-portal */}
    <Route path='/recruiter/portalhome' component={RecruiterPortalHome} exact ></Route>
    <Route path='/recruiter/createjob' component={CreateJob} exact ></Route>
    <Route path='/recruiter/viewjobs' component={ViewRecruiterSide} exact ></Route>
    <Route path='/recruiter/appliedcandidates/:id' component={AppliedCandidate} exact ></Route>
    <Route path='/recruiter/updatejob/:id' component={UpdateJob} exact ></Route>
    <Route path='/recruiter/deletejob/:id' component={DeleteJob} exact ></Route>

    {/* candidate job portal */}
    <Route path='/candidate/portalhome' component={CandidatePortalHome} exact ></Route>
    <Route path='/candidate/viewjobs' component={ViewCandidateSide} exact ></Route>
    <Route path='/candidate/appliedjobs/:userEmail' component={AppliedJobs} exact ></Route>
    <Route path='/candidate/jobapply/:userEmail/:id/:jobId/:description/:skills' component={JobApply} exact ></Route>
  </TokenProvider>
  </Switch>
</Router>
  </>
  )
}

export default App;
