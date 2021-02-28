//rafce 
import React from 'react';
import Type from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
          <div className="main-info">
              <h1>Somos un equipo especialista en calidad educativa</h1>
              <Type
                className="typed-text"
                strings={["Implementa Google Workspace for Education(gratis)",
                        "Obtén soporte individualizado para cada usuario",
                        "Desarrolla un Sistema de Gestión basado en calidad",
                        "Forma a tu equipo con las habilidades digitales de hoy",
                        "Prepara a tus docentes para obtener un certificación oficial"
                    ]}
                typeSpeed={40}
                backSpeed={60}    
                loop
              />
                <a href="#" className="btn-main-offer">contact me</a>
              </div>  
            
        </div>
    )
}

export default Header
