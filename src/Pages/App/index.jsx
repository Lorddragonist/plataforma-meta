import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Ingresar from "../Ingresar";
import Navbar from "../../Components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Ingresar /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
