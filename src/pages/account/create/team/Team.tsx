import { Link } from "react-router";
import CompanyName from "../../../../assets/icons/CompanyName";
import Logo from "../../../../assets/icons/Logo";

const Team: React.FC = () => {
  return (
    <section className="bg-white py-8 flex flex-col gap-4 xl:gap-8">
      <article className="flex items-center justify-center py-2">
        <span className="inline-flex flex-col items-center justify-center gap-4 p-2 rounded-lg">
          <Logo />
          <CompanyName />
        </span>
      </article>
      <article className="p-4 flex flex-col gap-2">
        <header className="flex flex-col gap-2">
          <h2 className="text-black text-3xl font-black text-center">
            Crea una cuenta de equipo nueva
          </h2>
          <p className="text-gray-500 text-xl text-center">
            Introduce tu email y contraseña para inscribirte en la aplicación
          </p>
        </header>
        <form className="flex flex-col py-8 text-black gap-4 w-full lg:max-w-[480px] lg:mx-auto">
          <label htmlFor="email" className="inline-flex flex-col p-y2  gap-4">
            <input
              className="py-2 px-4 border-2 border-amber-950 rounded-2xl"
              type="email"
              placeholder="Email"
              id="email"
              autoComplete="on"
              required
            />
          </label>
          <label htmlFor="username" className="inline-flex flex-col p-y2 gap-4">
            <input
              className="py-2 px-4 border-2 border-amber-950 rounded-2xl"
              type="text"
              placeholder="Nombre de usuario"
              id="username"
              autoComplete="on"
              required
            />
          </label>
          <label htmlFor="password" className="inline-flex flex-col p-y2 gap-4">
            <input
              className="py-2 px-4 border-2 border-amber-950 rounded-2xl"
              type="password"
              placeholder="Password"
              id="password"
              autoComplete="on"
              required
            />
          </label>
          <label
            htmlFor="re-password"
            className="inline-flex flex-col p-y2 gap-4"
          >
            <input
              className="py-2 px-4 border-2 border-amber-950 rounded-2xl"
              type="re-password"
              placeholder="Repite el password"
              id="re-password"
              autoComplete="on"
              required
            />
          </label>
          <footer className="">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-black rounded-2xl border-2 border-amber-950"
            >
              Continue
            </button>
          </footer>
        </form>
        <footer className="flex flex-wrap gap-2 max-w-[480px] mx-auto">
          <article className="w-full flex flex-col gap-2 justify-between">
            <p className="text-stone-500 text-center text-2xl">
              No olvides de validar tu email
            </p>
            <p className="text-stone-500 text-center text-xl">
              Si continúas con el registro, aceptas nuestros,{" "}
              <Link className="text-black font-extrabold underline" to="/terms">
                términos de servicio
              </Link>{" "}
              y nuestra{" "}
              <Link className="text-black font-extrabold underline" to="/terms">
                política de privcacidad.
              </Link>
            </p>
          </article>
          <address className="w-full text-black flex items-end justify-center">
            <p className="text-gray-500 text-center text-xl  py-2">
              Copyright &copy; {new Date().getFullYear()}
              <i className="text-2xl">
                {" "}
                <span className="text-[#32712F]">M</span>
                <span className="text-[#CE302F]">D</span>
                <span className="text-black">S</span>
              </i>
            </p>
          </address>
        </footer>
      </article>
    </section>
  );
};

export default Team;
