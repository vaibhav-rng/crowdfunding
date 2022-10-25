import Basic from "./Components/Basic";
import Home from "./Pages/Home";
import Create_project from "./Pages/Create_project";
import "./index.css"
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Story from "./Components/Story";
import Milestones from "./Components/MileStones";
import Rewards from "./Components/Rewards";
import Payement from "./Components/Payement";

function App() {
  return (
    <Router>
    <div className="hov1">
      <Home/>
      {/* <Create_project/> */}
      <Routes>
          <Route path="basic" element={<Basic/>} /> 
          <Route path="createproject" element={<Create_project/>} /> 
          <Route path="story" element={<Story/>} />
          <Route path="milestones" element={<Milestones/>} /> 
          <Route path="rewards" element={<Rewards/>} /> 
          <Route path="payment" element={<Payement/>} /> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
