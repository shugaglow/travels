import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import PlanYourTripModal from "./components/PlanYourTripModal";
import ScrollToTop from "./components/ScrollToTop"; 


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
       element: (
        <>
          <ScrollToTop /> 
          <RootLayout />
        </>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/destinations", element: <Destinations /> },
        { path: "/packages", element: <Packages /> },
        { path: "/about", element: <About /> },
        { path: "/blog", element: <Blog /> },
        { path: "/contact", element: <Contact /> },
        { path: "/blog/:id", element: <BlogDetails /> },
        { path: "/plan-your-trip", element: <PlanYourTripModal /> }, // ✅ Added
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
