import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimationRoutes></AnimationRoutes>
    </BrowserRouter>
  );
}

const AnimationRoutes = () => {
  const location = useLocation();

  const ROUTE_INFO = [
    {
      path: "/",
      element: (
        <PageAnimation>
          <Home></Home>
        </PageAnimation>
      ),
    },
    {
      path: "/projects",
      element: (
        <PageAnimation>
          <Projects></Projects>
        </PageAnimation>
      ),
    },
    {
      path: "/resume",
      element: (
        <PageAnimation>
          <Resume></Resume>
        </PageAnimation>
      ),
    },
    {
      path: "/contact",
      element: (
        <PageAnimation>
          <Contact></Contact>
        </PageAnimation>
      ),
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {ROUTE_INFO.map((route) => {
          return <Route path={route.path} element={route.element}></Route>;
        })}
        ;
      </Routes>
    </AnimatePresence>
  );
};

const PageAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
