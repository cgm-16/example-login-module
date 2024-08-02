import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SelectRoles from './Components/Select-Roles';
import SelectOrg from './Components/Select-Org';
import SelectLicense from './Components/Select-License';
import SelectAcc from './Components/Select-Acc';
import SelectPw from './Components/Select-Pw';
import SignUpFin from './Components/SignUp-Fin';

export default function App(): JSX.Element {
    return (
        <RecoilRoot>
            <Router>
                <Routes>
                    <Route path="/" element={<SelectRoles />} />
                    <Route path="/org" element={<SelectOrg />} />
                    <Route path='/lic' element={<SelectLicense />} />
                    <Route path='/acc' element={<SelectAcc />} />
                    <Route path='/pw' element={<SelectPw />} />
                    <Route path='/fin' element={<SignUpFin />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}