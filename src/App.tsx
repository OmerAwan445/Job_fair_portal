import { useEffect } from "react";
import Login from "./Pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/login" element={<Login />} />
     </Routes>
    </>
  );
}
// To send user automatically to the "/login" page from "/" as there is no page with the path "/"
function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
}

export default App;
