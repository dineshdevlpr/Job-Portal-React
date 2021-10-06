import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// candidate routes import
import RegisterCandidate from './components/auth/candidateAuth/register';
import LoginCandidate from './components/auth/candidateAuth/login';
import ForgotCandidate from './components/auth/candidateAuth/forgot';
import ResetCandidate from './components/auth/candidateAuth/reset';
import ActivateCandidate from './components/auth/candidateAuth/activation';

// recruiter routes import
import RegisterRecruiter from './components/auth/recruiterAuth/register';
import LoginRecruiter from './components/auth/recruiterAuth/login';
import ForgotRecruiter from './components/auth/recruiterAuth/forgot';
import ResetRecruiter from './components/auth/recruiterAuth/reset';
import ActivateRecruiter from './components/auth/recruiterAuth/activation';

import Home from './components/home/home'

// import recruiter side portal
import PortalHome from './components/jobsPortal/recruiterPortal/portalhome'
import CreateJob from './components/jobsPortal/recruiterPortal/createJob'
import ViewRecruiterSide from './components/jobsPortal/recruiterPortal/recruiterView'

// import candidate side portal
import ViewCandidateSide from './components/jobsPortal/candidatesPortal/candidateView'

import { TokenProvider } from './TokenContext.js';
import Header from "./components/header/header";


function App() {

  return (
  <>
  <Header/>
<Router> 
  <Switch>
  <TokenProvider>

    {/* Landing Page */}
    <Route path = '/' component={Home} exact></Route>

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
    <Route path='/recruiter/portalhome' component={PortalHome} exact ></Route>
    <Route path='/recruiter/createjob' component={CreateJob} exact ></Route>
    <Route path='/recruiter/viewjobs' component={ViewRecruiterSide} exact ></Route>

    {/* candidate job portal */}
    <Route path='/candidate/viewjobs' component={ViewCandidateSide} exact ></Route>
  </TokenProvider>
  </Switch>
</Router>
  </>
  )
}

export default App;
