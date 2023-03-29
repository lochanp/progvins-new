import "./styles/root.scss";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Work from './pages/work/work'
import AboutCompany from "./pages/about-company/about-company";
import AboutInfrastructure from "./pages/about-infrastructure/about-infrastructure";
import AboutQuality from "./pages/about-quality/about-quality";
import ElectroPlating from "./pages/electroplating/electroplating";
import ElectrolessPlating from "./pages/electroless-plating/electroless-plating";
import PlatingMethods from "./pages/plating-methods/plating-methods";
import Services from "./pages/services/services";
import GoldService from "./pages/gold-service/gold-service";
import SilverPlating from "./pages/silver-plating/silver-plating";
import PlatinumPlating from "./pages/platinum-plating/platinum-plating";
import PalladiumPlating from "./pages/palladium-plating/palladium-plating";
import RhodiumPlating from "./pages/rhodium-plating/rhodium-plating";
function App() {
  // const [isMobile, setisMobile] = useState()
  // const [openMenu, setopenMenu] = useState(false)
  // useEffect(() => {
  //   setisMobile(window.innerWidth >= 200 && window.innerWidth <= 700)
  // }, [])
  
  return (
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/about-infrastructure" element={<AboutInfrastructure />} />
        <Route path="/about-quality" element={<AboutQuality />} />
        <Route path="/plating-methods" element={<PlatingMethods />} />
        <Route path="/electroplating-method" element={<ElectroPlating />} />
        <Route path="/electroless-method" element={<ElectrolessPlating />} />
        <Route path="/services-processes" element={<Services />} />
        <Route path="/gold-service" element={<GoldService />} />
        <Route path="/silver-service" element={<SilverPlating />} />
        <Route path="/platinum-service" element={<PlatinumPlating />} />
        <Route path="/palladium-service" element={<PalladiumPlating />} />
        <Route path="/rhodium-service" element={<RhodiumPlating />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
