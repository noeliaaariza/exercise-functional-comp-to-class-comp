import "./App.css";
import Testimonio from "./components/Testimonio";
import emmaImg from "./img/Emma.png";
import sarahImg from "./img/Sarah.png";
import shawnImg from "./img/Shawn.png";

function App() {
  const testimonios = [
    {
      nombre: "Shawn Wang",
      pais: "Singapur",
      cargo: "Ingeniero de Software",
      empresa: "Amazon",
      testimonio: (
        <span>
          &quot;Da miedo cambiar de carrera. Solo gané la confianza de que podía
          programar trabajando a través de los cientos de horas de lecciones
          gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis
          cifras como ingeniero de software.
          <strong>freeCodeCamp cambió mi vida.</strong>&quot;
        </span>
      ),
      img: shawnImg,
    },
    {
      nombre: "Sarah Chima",
      pais: "Nigeria",
      cargo: "Ingeniera de software",
      empresa: "ChatDesk",
      testimonio: (
        <span>
          &quot;
          <strong>freeCodeCamp fue la puerta de entrada a mi carrera</strong>
          como desarrollador de software. El plan de estudios bien estructurado
          llevó mis conocimientos de programación de un nivel de principiante
          total a un nivel muy seguro. Era todo lo que necesitaba para conseguir
          mi primer trabajo de desarrollador en una empresa increíble.&quot;
        </span>
      ),
      img: sarahImg,
    },
    {
      nombre: "Emma Bostian",
      pais: "Suecia",
      cargo: "Ingeniera de software",
      empresa: "Spotify",
      testimonio: (
        <span>
          &quot;Siempre he tenido problemas para aprender JavaScript. He tomado
          muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
          Estudiar JavaScript, así como estructuras de datos y algoritmos en
          <strong>freeCodeCamp me dio las habilidades</strong> y la confianza
          que necesitaba para conseguir el trabajo de mis sueños como ingeniero
          de software en Spotify.&quot;
        </span>
      ),
      img: emmaImg,
    },
  ];

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        {testimonios.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
            img={testimonio.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
