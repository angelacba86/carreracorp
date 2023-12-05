import NavBar from "../NavBar/NavBar";
import Video from "../../../img/rectificado_ciguenal.mp4";
import Recurso3 from "../../../img/1x/Recurso 3.png";
import Recurso2 from "../../../img/1x/Recurso 2.png";
import Recurso4 from "../../../img/1x/Recurso 4.png";
import Recurso5 from "../../../img/1x/Recurso 5.png";
import Recurso6 from "../../../img/1x/Recurso 6.png";
import ServiciosImg from "../../../img/1x/img6-100.jpg";
import Logo1 from "../../../img/logo1.jpg";
import Logo2 from "../../../img/logo2.jpg";
import Logo3 from "../../../img/logo3.jpg";
import Logo4 from "../../../img/logo4.jpg";
import Logo5 from "../../../img/logo5.jpg";
import Start from "../../../img/1x/start.jpg";
import StartG from "../../../img/1x/startg.jpg";
import Icon1 from "../../../img/1x/icon1.jpg";
import Icon2 from "../../../img/1x/icon2.jpg";
import Icon3 from "../../../img/1x/icon3.jpg";
import "./Home.css"


const Home = ()=>{
    return(
        <div className="Home">
            <div className="menu">
            <NavBar/>
            </div>
            <div className="inicio">
              
               <video autoPlay loop muted >
               <div className="overlay"></div>
                <source src={Video} type="video/mp4"/>
               </video>
            </div>
            <div className="somos">
                <div className="text-area">
                    <h3>NOSOTROS SOMOS</h3>
                    <h1>CORPORACIÓN CARRERA</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipitl when an unknown printer took a galley of type and scrambled it to make a type specimen book or . It has survived not only</p>
                </div>
                <div className="advantage">
                    <div className="charCard">
                        <img src={Recurso2}/>
                        <h3>Soluciones de alta calidad</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="charCard">
                    <img src={Recurso3}/>
                        <h3>Vanguardia en la tecnología</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    <div className="charCard"><img src={Recurso4}/>
                        <h3>Mejores tiempos de entrega</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p></div>
                    <div className="charCard">
                    <img src={Recurso5}/>
                        <h3>Mas de 13 años de experiencia</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="btn-rojo"><a href="#" ><img src={Recurso6}/>Descarga Brochure</a>
            </div></div>
            <div className="servicios">
                <h1>SERVICIOS</h1><br></br>
                <div className="content">
                <div className="serviceCard">
                    <img src={ServiciosImg}/>
                    <h3>Reparación Integral de Motores</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</p>
                    <a src="#">ver mas</a>
                </div>
                <div className="serviceCard">
                <img src={ServiciosImg}/>
                    <h3>Fabricaciones Metálicas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</p>
                    <a src="#">ver mas</a>
                </div>
                <div className="serviceCard">
                <img src={ServiciosImg}/>
                    <h3>Ensayos No Destructivos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</p>
                    <a src="#">ver mas</a>
                </div>
                </div>
            </div>
            <div className="clientes">
                <h1>MARCAS CON LAS QUE TRABAJAMOS</h1>
                <div className="marcas">
                    <img src={Logo1} alt="Caterpilla"/>
                    <img src={Logo2} alt="Scania"/>
                    <img src={Logo3} alt="Cummins"/>
                    <img src={Logo4} alt="Mercedes"/>
                    <img src={Logo5} alt="John Dere"/>
                </div>
                <h1>QUE DICEN NUESTROS CLIENTES</h1>
                <div className="comentarios">
                    <div className="reviewCard">
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={StartG}/>
                        <h3>NOMBRE CLIENTE</h3>
                        <p>Puesto</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                          magna aliquam</p>
                    </div>
                    <div className="reviewCard">
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <h3>NOMBRE CLIENTE</h3>
                        <p>Puesto</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                          magna aliquam</p>
                    </div>
                    <div className="reviewCard">
                    <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <h3>NOMBRE CLIENTE</h3>
                        <p>Puesto</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                          magna aliquam</p>
                    </div>
                    <div className="reviewCard">
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <img src={Start}/>
                        <h3>NOMBRE CLIENTE</h3>
                        <p>Puesto</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                          magna aliquam</p>
                    </div>
                </div>
            </div>
            <div className="cotizacion">
                <img src={Recurso6}/> 
                <h1>SOLICITA TU COTIZACIÓN</h1> <a>Cotización</a>
            </div>
           <div className="contacto">
            <div className="datos">
                <img src={Icon1}/><a href="#">+51 999 999 999</a>
                <img src={Icon2}/><a href="#">Av. Prolongación Arica- Cercado de Lima</a>
                <img src={Icon3}/><a href="#">info@carreracorp.net</a>
            </div>
            <div className="googleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4587197843499!2d-77.05980487165643!3d-12.054879587727061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c927b4f989eb%3A0xf8e53e19d3ec3509!2sAv.%20Arica%201856%2C%20Lima%2015082!5e0!3m2!1ses-419!2spe!4v1700777664110!5m2!1ses-419!2spe" 
            width="1200" height="450"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
            ></iframe>
            </div>
            </div> 
        </div>
    )
}
export default Home