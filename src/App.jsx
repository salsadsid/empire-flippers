import { RouterProvider } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import router from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
