import { Navigate, Route, Routes as RoutesFromRouter } from "react-router-dom";
import Home from "../views/Home";
import ProjectDetail from "../components/ProjectDetail";

const Routes = () => {
  return (
    <RoutesFromRouter>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </RoutesFromRouter>
  );
};

export default Routes;
