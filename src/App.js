import Header from "./header";
// import { Router } from "react-router-dom";
import Main from "./main";
import Devices from "./devices";
import Login from "./login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Device from "./device";


function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="devices" element={<Devices />} />
        <Route path="device/:id" element={<Device />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
