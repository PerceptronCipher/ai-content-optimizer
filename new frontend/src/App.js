import "./App.css";
import Navbar from "./Pages/Navbar";
import HeroPage from "./Pages/HeroPage";
import Paste from "./Pages/Paste";
import Output from "./Pages/Output";
import How from "./Pages/How";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App1">
      <div className="App">
        <Navbar />
        <HeroPage />
        <Paste />
        <Output />
        <How />
      </div>
      <Footer />
    </div>
  );
}

export default App;
