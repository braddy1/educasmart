
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
function App() {
  return (
   <>
   <Particles
   className="particles-canvas"
      params={{
        Particles:{
          number:{
            value: 30, 
            density: {
            enable: true,
            value_area: 900
          }  
          },
          shape: {
            type: "start",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          } 
        }
      } }
   />
   <Navbar/>
   <Header/>
   <AboutUs/>
    </>
  );
}

export default App;
