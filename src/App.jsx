import "./App.css";
import SplashScreen from "./Animations/SplashCursor/SplashCursor";
import TrueFocus from './TextAnimations/TrueFocus/TrueFocus';
import Particles from './Backgrounds/Particles/Particles';
import PixelCard from './Components/PixelCard/PixelCard';
import CircularGallery from './Components/CircularGallery/CircularGallery';
import Dither from './Backgrounds/Dither/Dither';
import RotatingText from './TextAnimations/RotatingText/RotatingText';
import GradientText from './TextAnimations/GradientText/GradientText';
import ScrollFloat from './TextAnimations/ScrollFloat/ScrollFloat';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react';




function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: false, // Esto asegura que se ejecute cada vez que el elemento aparezca
    });

    // Se puede agregar un evento de scroll para refrescar las animaciones
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <>
      <header className="header" id="inicio">

      <div style={{ width: '100%', height: '100px', position: 'absolute' }}>
        <Dither
          waveColor={[0.5, 0.6, 0.7]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={70}
          waveAmplitude={0.3}
          waveFrequency={5}
          waveSpeed={0.05}
        />
      </div>

      <TrueFocus 
        sentence="Code-by Jesús"
        manualMode={false}
        blurAmount={5}
        borderColor="cyan"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      
      </header>

      <div className="nav-container">

      <button className="boton-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <nav className={`menu-lateral ${menuAbierto ? "abierto" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav_link" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav_link" href="#sobreMi">Sobre mí</a>
          </li>
          <li className="nav-item">
            <a className="nav_link" href="#proyectos">Mis Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav_link" href="#contacto">Contactos</a>
          </li>
        </ul>
      </nav>

      </div>

      <main className="main">

        <div className="fondo-main">
          <Particles
            particleColors={["#FFFFFF"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={75}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>
        
        <div className="main-content">

          <div className="main-content__img" data-aos="fade-up">
            <picture>
              <img src="../img/TurnoX.png" alt="" />
            </picture>

            <div className="gradient-text">
              <GradientText
                colors={["#45c19e", "#4079ff", "#45c19e", "#4079ff", "#45c19e"]}
                animationSpeed={3}
                showBorder={true}
                className="custom-class"
              >
                Disponible para trabajar
              </GradientText>
            </div>

          </div>

          <div className="main-content__text" data-aos="fade-up">
            <h1>Hola, soy Jesús</h1>
            <p>Soy un <span className="amarillo">Desarrollador Web Full-Stack</span> de Sevilla, España 🇪🇸, con pasión por la tecnología y la creación de soluciones digitales. Estoy especializado en el desarrollo de aplicaciones web únicas, funcionales y adaptadas a las necesidades de cada proyecto.</p>
          </div>

          <div class="botones" data-aos="fade-up" id="sobreMi">

            <a href="mailto:ejemplo@correo.com" class="boton">
              <i class="fas fa-envelope"></i>
              Contáctame
            </a>
            <a href="https://www.linkedin.com/in/tu-perfil" class="boton" target="_blank">
              <i class="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
            
          </div>

          <div className="main-information" data-aos="fade-up">
            <h1><i class="fas fa-user logo-person"></i>Sobre Mí</h1>
            <div className="main-information__text">

            <p>
              Aquí podrás ver una selección de mis <span className="amarillo">proyectos, habilidades y experiencias</span>, que son el resultado de mi dedicación, aprendizaje constante y pasión por el desarrollo y el diseño. Cada sección no solo refleja lo que sé hacer, sino también cómo pienso, cómo enfrento los desafíos y cómo convierto ideas en soluciones funcionales y atractivas.
            </p>
            <p>
              Te animo a explorar con calma cada sección: desde <span className="amarillo">proyectos personales y colaborativos</span>, hasta las tecnologías que manejo, las metodologías que aplico y los retos que he superado. Mi intención es que veas más allá del código y el diseño: quiero mostrarte el valor que puedo aportar a tus ideas, ya sea como <span className="amarillo">desarrollador, diseñador o miembro de un equipo creativo</span>.
            </p>
            <p id="proyectos">
              ¡Gracias por tomarte el tiempo de visitar mi espacio! Espero que disfrutes el recorrido, y si alguna parte de lo que ves te conecta, estaré encantado de conversar.
            </p>
                
            </div>

          </div>

          <div className="main-proyect" data-aos="fade-up">
              <h1 style={{color: "white"}} className="rotating-text"><i class="fas fa-code logo-code"></i>Mis 
                <RotatingText
                  texts={['desarrollos', 'proyectos', 'aplicaciones', 'creaciones', 'diseños', 'trabajos', 'experiencias', 'habilidades']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </h1>

              <div className="my-proyects">

                <div className="proyects">
                  
                  <div className="proyect-content">
                    <picture>
                      <img src="https://res.cloudinary.com/dbw3utkij/image/upload/v1746687219/TurnoX-fondo2_gxlmoh.png" alt="" />
                    </picture>

                    <div className="proyect-content-conjunto">
                      <div className="proyect-content-text">
                        <h3>Turno X - Juego interactivo de tres en raya para jugar con un amigo</h3>
                      </div>

                      <div className="proyect-content-code">
                        <div className="code1" style={{backgroundColor: '#1a1a1a'}}>
                          <p><img src="https://res.cloudinary.com/dbw3utkij/image/upload/v1746688170/vitejs_gnqupa.svg" alt="Logo de Vite"></img>Vite</p>
                        </div>
                        <div className="code1" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>
                          <p><i class="fab fa-react" style={{color: '#1ba1cc', fontSize: '15px', marginTop: '1px'}}></i>React</p>
                        </div>
                      </div>

                      <div className="proyect-introduction">
                        <p>Juego de Tres en Raya moderno y minimalista. Más de 5K partidas jugadas. Interfaz limpia y rápida. Desarrollado desde cero con Vite + React</p>
                      </div>

                      <div className="proyect-buttons">
                        <a href="https://github.com/tu-repo" class="proyect-button">
                          <i class="fab fa-github"></i>
                          Code
                        </a>
                        <a href="https://tu-demo.com" class="proyect-button">
                          <i class="fas fa-link"></i>
                          Preview
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="proyects">
                  
                  <div className="proyect-content">
                    <picture>
                      <img src="https://res.cloudinary.com/dbw3utkij/image/upload/v1741683239/xn9foqjitvdkuemuitih.webp" alt="" />
                    </picture>

                    <div className="proyect-content-conjunto">
                      <div className="proyect-content-text">
                        <h3>Molares Trading Card Game - Buscador de cartas pokemon</h3>
                      </div>

                      <div className="proyect-content-code">
                        <div className="code1" style={{backgroundColor: '#1a1a1a'}}>
                          <p><img src="../img/angular.ico" alt="Logo de Angular"></img>Angular</p>
                        </div>
                        <div className="code1" style={{backgroundColor: '#1a1a1a', color: '#ffffff'}}>
                          <p><i class="fab fa-php" style={{color: '#8892BF', fontSize: '20px', marginTop: '1px'}}></i>PHP</p>
                        </div>
                      </div>

                      <div className="proyect-introduction">
                        <p>Aplicación interactiva y visual que actúa como buscador de cartas Pokémon, permitiendo a los usuarios explorar fácilmente cartas individuales y colecciones completas, con acceso en tiempo real a los precios actualizados de cada carta según su edición, rareza y estado.</p>
                      </div>

                      <div className="proyect-buttons">
                        <a href="https://github.com/Jesussr29/ProyectoAngular.git" class="proyect-button">
                          <i class="fab fa-github"></i>
                          Code
                        </a>
                        <a href="mtcg/" class="proyect-button">
                          <i class="fas fa-link"></i>
                          Preview
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
          </div>

        </div>

      </main>

      <footer id="contacto">
        <div class="footer-contenedor">
          <div className="contacto">
            <h3>Contacto</h3>
            <div className="contacto-text">
              <a href="#"><i class="fas fa-envelope"></i>Gmail</a>
              <a href="#"><i class="fab fa-github"></i>GitHub</a>
            </div>
          </div>
          <div class="footer-enlaces">
            <p>&copy; 2025 Jesús Rincón Albarrán. Todos los derechos reservados.</p>
            <a href="#inicio">Inicio</a>
            <a href="#sobreMi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>

    </>

    
  );
}

export default App;
