import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className=" relative">
      <Navbar />
      <Home cart={cart} setCart={setCart} />
      <div className=" rounded-full p-4 bg-yellow-300 inline-block fixed bottom-0 right-0">
        {cart}
      </div>
      <Footer />
    </div>
  );
}

export default App;
