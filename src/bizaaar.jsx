import { Route, Routes } from 'react-router-dom'
import './assets/styles/style.css'
import Onboarding from "./components/Onboarding";
import Home from './pages/dashboard/Home';
import Dashboard from './components/Dashboard';
import Setup from './components/Setup';
import BusinessInformation from './pages/setup/BusinessInformation';
import PersonalInformation from './pages/setup/PersonalInformation';
import VerifyBank from './pages/setup/VerifyBank';
import VerifyEmail from './pages/setup/VerifyEmail';
import Signin from './pages/Sig';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import Protected from './components/Protected';
import Auth from './components/Auth';
import LandingHome from './pages/landing/Home';
import MyStore from './pages/dashboard/MyStore';

function App() {
  return (
    <>
      <section className="onboarding-section" >
		<Routes>
			<Route path="/" element={<Onboarding />}>
				<Route index element={<Protected dashboardRedirect={true}><LandingHome /></Protected>} />
				<Route path="login" element={<Protected><Auth><Signin /></Auth></Protected>} />
				<Route path="signup" element={<Auth><Signup /></Auth>} />
				<Route path="forgot-password" element={<Auth><Forgotpassword /></Auth>} />
				<Route path="reset-password" element={<Auth><Resetpassword /></Auth>} />
			</Route>
			<Route path="/setup" element={<Setup />}>
				<Route path='business-information' element={<BusinessInformation />} />
				<Route path='personal-information' element={<PersonalInformation />} />
				<Route path='verify-bank' element={<VerifyBank />} />
				<Route path='verify-email' element={<VerifyEmail />} />
			</Route>
			<Route path="/dashboard" element={<Protected prevent={true}><Dashboard /></Protected>}>
				<Route index element={<Home />} />
				<Route path='my-store' element={<MyStore />} />
			</Route>
			<Route path="*" element={<h1>No Match</h1>} />
		</Routes>
      </section>
    </>
  )
}

export default App;
