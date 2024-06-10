import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;