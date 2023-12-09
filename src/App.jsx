import Dashboard from "./Pages/Dashboard.jsx";
import Login from "./Pages/Login.jsx"
import { AnonAadhaarProvider } from "anon-aadhaar-react";

const app_id = process.env.REACT_APP_ID || "";


function App() {

  return (
    <>
      <Dashboard />
      {/* <AnonAadhaarProvider _appId={app_id} _isWeb={false}>
        <Login />
      </AnonAadhaarProvider> */}

    </>
  );
}

export default App
