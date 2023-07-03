import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
