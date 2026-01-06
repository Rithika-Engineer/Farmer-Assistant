import { Routes, Route } from "react-router-dom";
import Welcome from "../screens/Welcome";

import Language from "../screens/Language";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Weather from "../screens/Weather";
import Help from "../screens/Help";
import NaturalFarming from "../screens/NaturalFarming";
import Profit from "../screens/Profit";
import Market from "../screens/Market";
import Videos from "../screens/Videos";
import Schemes from "../screens/Schemes";
import PestControl from "../screens/PestControl";
import Jobs from "../screens/Jobs";








export default function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route path="/" element={<Language />} />
      <Route path="/language" element={<Language />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />

      <Route path="/weather" element={<Weather />} />
      <Route path="/help" element={<Help />} />
      <Route path="/natural" element={<NaturalFarming />} />

      {/* NEW ROUTES */}
      <Route path="/profit" element={<Profit />} />
      <Route path="/market" element={<Market />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/pesticide" element={<PestControl />} />
      <Route path="/jobs" element={<Jobs />} />
      
    
    </Routes>
  );
}

