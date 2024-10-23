import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'
import AdminDashboard from './components/admin/AdminDashboard'
import ViewStudents from './components/admin/ViewStudents'
import ProtectAdminRoute from './components/admin/ProtectAdminRoute'
import ViewCompanies from './components/admin/ViewCompanies'
import AdminLogin from './components/auth/AdminLogin'
import CompanyLogin from './components/auth/CompanyLogin'
import CompanyFullDetails from './components/admin/CompanyFullDetails'
import CompanySignup from './components/auth/CompanySignup'
import ViewClass from './components/admin/ViewClass'
import ScheduledClassList from './components/ScheduledClassList'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path:"/company/signup",
    element:<CompanySignup/>
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path:"/scheduledclass",
    element:<ScheduledClassList/>
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path:"/admin/login",
    element:<AdminLogin/>
  },
  {
    path:"/company/login",
    element:<CompanyLogin/>
  },


  {
    path:"/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
  },
  {
    path:"/admin/dashboard",
    element:<ProtectAdminRoute><AdminDashboard/></ProtectAdminRoute> 
  },
  {
    path:"/admin/viewstudents",
    element:<ProtectAdminRoute><ViewStudents/></ProtectAdminRoute>
  },
  {
    path:"/admin/viewcompanies",
    element:<ProtectAdminRoute><ViewCompanies/></ProtectAdminRoute>
  },
  {
    path:"/admin/companies/viewfullcompany",
    element:<ProtectAdminRoute><CompanyFullDetails/></ProtectAdminRoute>
  },
  {
    path:"/admin/ViewClass",
    element:<ProtectAdminRoute><ViewClass/></ProtectAdminRoute>
  }


])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
