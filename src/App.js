import { Link, Routes, Route } from 'react-router-dom';
import Appbar from './Components/Appbar';
import Patient from './Components/Patient';

import SignUp from './Components/SignUp';
import Update from './Components/Update';

function App() {
  return (
    <>
      <Appbar/>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/addpatient" element={<SignUp/>}/>
        <Route path="/Patient" element={<Patient/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
        </Routes>
        
    </>
  )
}
export default App