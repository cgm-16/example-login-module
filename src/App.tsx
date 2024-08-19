import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SelectRoles from './Pages/Select-Roles';
import SelectOrg from './Pages/Select-Org';
import SelectLicense from './Pages/Select-License';
import SelectAcc from './Pages/Select-Acc';
import SelectPw from './Pages/Select-Pw';
import SignUpFin from './Pages/SignUp-Fin';

export default function App(): JSX.Element {
    return (
        <RecoilRoot>
            <Router>
                <Routes>
                    <Route path="/" element={<SelectRoles />} />
                    <Route path="/organization" element={<SelectOrg />} />
                    <Route path="/license" element={<SelectLicense />} />
                    <Route path="/account" element={<SelectAcc />} />
                    <Route path='/password' element={<SelectPw />} />
                    <Route path='/finished' element={<SignUpFin />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}