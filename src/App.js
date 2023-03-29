import "./styles/root.scss";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Work from './pages/work/work'

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
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
