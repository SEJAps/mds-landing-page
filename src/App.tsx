import CompanyName from "./assets/icons/CompanyName";
import Logo from "./assets/icons/Logo";
import ScrollDown from "./assets/icons/ScrollDown";
import fondo from "./assets/png/background.png";
import tabletAndMobile from "./assets/png/img_1.png";
const App: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-wrap py-8">
      <article className="flex-1 flex flex-col items-center md:px-16">
        <span className="inline-flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
          <Logo />
          <CompanyName />
        </span>
        <h2 className="text-3xl p-4 text-[#8DF0F6] uppercase font-black">
          Datos en teimpo real, estadísticas de partidos.
        </h2>
        <p className="text-4xl p-4 font-black">
          Cuando la diferencia está en los detalles... seamos la diferencia
        </p>
        <p className="text-xl p-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <footer className="flex justify-center gap-4 p-4">
          <button className="rounded-full bg-white text-black px-4 py-2 border-2 border-black font-black">
            Únete a nosotros
          </button>
          <button className="rounded-full bg-black text-white px-4 py-2 border-2 border-white font-black">
            Contact saless
          </button>
        </footer>
      </article>
      <article className="w-full max-w-7xl mx-auto flex-1 flex items-center justify-center min-h-96 relative">
        <img
          src={fondo}
          alt="Fondo circulos rojo"
          aria-label="Fondo circulos rojo"
          className="absolute  object-cover z-1 left-0 top-0 w-full h-full"
        />
        <img
          src={tabletAndMobile}
          alt="Imagen de tablet y móvil"
          aria-label="Imagen de tablet y móvil"
          className="aspect-auto z-2 max-w-8/12 md:max-w-7/12"
        />
      </article>
      <article className="w-full mx-auto min-h-32 md:min-h-72 flex items-center justify-center pb-22">
        <ScrollDown />
      </article>
      <article className="flex flex-1 bg-white relative py-28 md:py-48 px-4">
        <section className="flex items-center justify-center p-4 absolute -top-22 md:-top-26 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
            <Logo />
            <CompanyName />
          </span>
        </section>
        <section className="w-full md:max-w-4xl md:mx-auto flex flex-col gap-4">
          <h2 className="text-3xl text-black uppercase font-black mt-11">
            Herramienta Integral para la recogida de datos instantaneamente.
          </h2>
          <p className="text-xl text-black font-black">
            Bienvenidos a Match Day Stats, una solución innovadora diseñada para
            optimizar la recopilación y el análisis de datos durante los
            partidos de fútbol. Nuestra plataforma está creada específicamente
            para equipos técnicos que buscan tomar decisiones en tiempo real,
            maximizar el rendimiento de sus jugadores y ganar ventaja
            competitiva a traavés de los datos recogidos durante un partido en
            tiempo real.
          </p>
          <ol className="list-decimal list-inside text-black">
            <h3>Recopilación de Datos en Vivo:</h3>
            <li>
              Registro instantáneo de eventos clave (goles, faltas, robos,
              perdidas, corners, fueras de juego, tiros, etc.) mediante una
              interfaz intuitiva Gráficos y heatmaps personalizables para
              identificar patrones y debilidades del rival. Decisiones más
              rápidas, acceso a información crítica sin salir del banquillo.
            </li>
            <li>
              Ahorro de tiempo con reportes a la media parte y post-partido,
              generación de resúmenes ejecutivos que se pueden compartir
              instantaneamente. Adaptable a cualquier formato de competición
              (desde categorías inferiores hasta élite).
            </li>
            <li>
              Match Day Stats no es solo una herramienta, es un aliado
              estratégico para convertir cada partido en una oportunidad de
              crecimiento.
            </li>
          </ol>
          <p className="text-xl text-black font-black">
            ¿Listos para revolucionar su metodología de recogida de datos y
            análisis?
          </p>
        </section>
      </article>
    </section>
  );
};

export default App;
