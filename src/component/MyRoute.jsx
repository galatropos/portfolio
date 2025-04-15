import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Jobs from "./Jobs";

const MyRoute=[
    {
      path: "/",
      children: [
        {path: "",element: <Home />,},
        {path: "about",element: <About />,},
        {path: "contact",element: <Contact />,},
        {path: "experience",element: <Experience />,},
        {path: "jobs",element: <Jobs />,},
      ],
    },
  ];
export default MyRoute