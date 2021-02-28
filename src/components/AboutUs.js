import React from "react";
import author from "../perfil.jpg";

const aboutUs = () => {
    return (
        <div className="container py-5 ">
            <div className="row">
                <div className="col-lg-6 col-mx-12">
                    <div  className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-mx-12">
                    <h1 className="about-heading">about us</h1>
                    <p>
                        Somos un equipo de profesionales dedicado a la consultoría estratégica y soluciones para instituciones educativas, 
                        todo esto a través de la planificación, capacitación, supervisión y reacción, consolidando de esta manera nuestro 
                        compromiso con el liderazgo, la calidad y resiliencia institucional.

                    </p>
                </div>
                
            </div>
            
        </div>
    )
}

export default aboutUs;
