import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import RoleSelectPage from './Pages/RoleSelectPage';
import OrgSelectPage from './Pages/OrgSelectPage';
import LicenseSelectPage from './Pages/LicenseSelectPage';
import AccSelectPage from './Pages/AccSelectPage';
import PasswordSelectPage from './Pages/PasswordSelectPage';
import SignupFinishedPage from './Pages/SignupFinishedPage';

export default function App(): JSX.Element {
    return (
        <RecoilRoot>
            <Router>
                <Routes>
                    <Route path="/" element={<RoleSelectPage />} />
                    <Route path="/organization" element={<OrgSelectPage />} />
                    <Route path="/license" element={<LicenseSelectPage />} />
                    <Route path="/account" element={<AccSelectPage />} />
                    <Route path='/password' element={<PasswordSelectPage />} />
                    <Route path='/finished' element={<SignupFinishedPage />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}