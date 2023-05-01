import "./styles/root.scss";
import { Route, BrowserRouter as Router, Routes,Redirect, Link } from 'react-router-dom';
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
    <Router>
      <Routes>
      <Route path='/' component={Home} element={<Home/>} />
        <Route path="/about" component={About} element={<About/>} />
        <Route path="/contact" component={Contact} element={<Contact />} />
        <Route path="/work" component={Work } element={<Work />} />
        <Route path="/about-company" component={AboutCompany} element={<AboutCompany />} />
        <Route path="/about-infrastructure" component={AboutInfrastructure} element={<AboutInfrastructure/>} />
        <Route path="/about-quality" component={AboutQuality} element={<AboutQuality />} />
        <Route path="/plating-methods" component={PlatingMethods} element={<PlatingMethods />} />
        <Route path="/electroplating-method" component={ElectroPlating} element={<ElectroPlating />} />
        <Route path="/electroless-method" component={ElectrolessPlating} element={<ElectrolessPlating />} />
        <Route path="/services-processes" component={Services} element={<Services />} />
        <Route path="/gold-service" component={GoldService} element={<GoldService />} />
        <Route path="/silver-service" component={SilverPlating} element={<SilverPlating />} />
        <Route path="/platinum-service" component={PlatinumPlating} element={<PlatinumPlating />} />
        <Route path="/palladium-service" component={PalladiumPlating} element={<PalladiumPlating />} />
        <Route path="/rhodium-service" component={RhodiumPlating } element={<RhodiumPlating />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
