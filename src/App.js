import Footer from "./components/layouts/footer/Footer";
import Navbar from "./components/layouts/navbar/Navbar";
import { Home } from "./components/pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  );
}

export default App;
