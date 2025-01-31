import { Routes, Route } from "react-router-dom";
import DevNavbar from "../layout/DevNavbar";
import OpenProjects from "./OpenProjects";
import Applications from "./Applications";
import Profile from "./Profile";

const DevDashboard = () => {
  return (
    <>
      <DevNavbar />
      <Routes>
        <Route index element={<OpenProjects />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default DevDashboard;
