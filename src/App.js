import Basic from "./Components/Basic";
import Home from "./Pages/Home";
import Create_project from "./Pages/Create_Project";
import "./index.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Story from "./Components/Story";
import Milestones from "./Components/MileStones";
import Rewards from "./Components/Rewards";
import Payement from "./Components/Payement";
import LoginRegister from "./Components/LoginRegister";
import ProfileHome from "./Pages/ProfileHome";
import Preview from "./Components/Preview";
import PreviewPage from "./Pages/PreviewPage";
import RequestPage from "./Pages/RequestPage";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="basic" element={<Basic/>}/> 
          <Route path="createproject" element={<Create_project/>} /> 
          <Route path="preview" element={<PreviewPage/>} /> 
          <Route path="story" element={<Story/>} />
          <Route path="milestones" element={<Milestones/>} /> 
          <Route path="rewards" element={<Rewards/>} /> 
          <Route path="payment" element={<Payement/>} /> 
          <Route path="LoginRegister" element={<LoginRegister/>} /> 
          <Route path="ProfileHome" element={<ProfileHome/>} /> 
          <Route path="ProfileHome/requests" element={<RequestPage/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
