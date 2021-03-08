import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop , faFileCode , fa } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5"> my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                               <div className="circle"><FontAwesomeIcon  className="icon" icon={faDesktop} size="2x" /></div> 
                                <h3>Implementa Google Workspace for Education</h3>
                                <p>Implementamos la plataforma de Google WorkSpace for education, capacitamos al </p>
                                     
    

                            </div>
                        </div>
                            {/*-*/ }
                           <div className="col-md-3 col-sm-6">
                               <div className="box">
                               <div className="circle"><FontAwesomeIcon   className="icon" icon={faFileCode} size="2x" /></div> 
                               <h3>Prepara a tus docentes para docentes</h3>
                               <p>Desarrollamos un Sistema de Gestión integrado para Organizaciones Educativas (SGOE)</p>
                                   
                                    


                               </div>
                               </div> 
                                {/*-*/ }
                               <div className="col-md-3 col-sm-6">
                               <div className="box">
                               <div className="circle"><FontAwesomeIcon  className="icon" icon={faFacebookF} size="2x" /></div> 
                               <h3>Obtén soporte individualizado </h3>
                               <p>Dictamos cursos talleres para el personal docente, actualizando así sus habilidades  </p>
                                   


                               </div>
                               </div>    
                                {/*-*/ }
                                  
                               
                    </div>

                </div>
            </div>
            
        
    )
}

export default Services;
