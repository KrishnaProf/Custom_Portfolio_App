import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Main />
        <Work />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
