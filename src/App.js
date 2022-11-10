import logo from "./logo.svg";
import "./App.css";
import BarsCard from "./components/BarsCard";
import About from "./components/About";
import PurchaseMerchandise from "./components/PurchaseMerchandise";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import BearPartyCard from "./components/BearPartyCard";

function App() {
  return <>
  <MainBody/>
  <BarsCard/>
  <About/>
  <PurchaseMerchandise/>
  <BearPartyCard/>
  <Footer/>
  </>;
}

export default App;
