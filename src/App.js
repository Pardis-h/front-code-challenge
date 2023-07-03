import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard/users" element={<Users />} />
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  );
}

export default App;
