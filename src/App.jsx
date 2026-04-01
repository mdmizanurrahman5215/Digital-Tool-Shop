import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import PremiumTools from "./components/PremiumTools";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Step from "./components/Step";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import WorkFlow from "./components/WorkFlow";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <Banner />
      <Stats />
      <PremiumTools setCart={setCart} cart={cart} />
      <Step />
      <Pricing />
      <WorkFlow />
      <Footer />
    </>
  );
}

export default App;
