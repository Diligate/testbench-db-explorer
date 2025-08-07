import Landing from "./pages/client/landing";
import Home from "./pages/client/home";
import Login from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";
import Tables from "./pages/admin/tables";
import Users from "./pages/admin/users";
import Profile from "./pages/admin/profile";
import Settings from "./pages/admin/settings";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TableDetail from "./pages/client/tableDetail";
import Page404 from "./pages/page404";
import EditTable from "./pages/admin/editTable.";
import EditAddUsers from "./pages/admin/editAddUsers";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table/:name" element={<TableDetail />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/tables" element={<Tables />} />
            <Route path="/app/tables/:id" element={<EditTable />} />
            <Route path="/app/users" element={<Users />} />
            <Route path="/app/users/add" element={<EditAddUsers />} />
            <Route path="/app/users/:id" element={<EditAddUsers />} />
            <Route path="/app/profile" element={<Profile />} />
            <Route path="/app/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
