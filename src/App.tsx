import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import RoleSelectPage from './pages/RoleSelectPage';
import OrgSelectPage from './pages/OrgSelectPage';
import LicenseSelectPage from './pages/LicenseSelectPage';
import AccSelectPage from './pages/AccSelectPage';
import PasswordSelectPage from './pages/PasswordSelectPage';
import SignupFinishedPage from './pages/SignupFinishedPage';

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