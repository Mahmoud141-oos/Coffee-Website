import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Pricing from "./pages/Pricing";


const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
        </Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/support" element={<Support />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/pricing" element={<Pricing />} ></Route>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App