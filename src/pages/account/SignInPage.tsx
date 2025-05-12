import CompanyName from "../../assets/icons/CompanyName";
import Logo from "../../assets/icons/Logo";
import { Link } from "react-router";

const SignInPage: React.FC = () => {
  return (
    <section className="bg-white grid md:py-8 h-svh">
      <article className="flex items-center justify-center py-4">
        <span className="inline-flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
          <Logo />
          <CompanyName />
        </span>
      </article>
      <article className="p-4 flex flex-col gap-2">
        <header className="flex flex-col gap-2">
          <h2 className="text-black text-3xl font-black text-center">
            Inicia sesión
          </h2>
          <p className="text-gray-500 text-xl text-center">
            Introduce tu email y contraseña para acceder a tu cuenta.
          </p>
        </header>
        <form className="flex flex-col py-8 text-black gap-4 w-full lg:max-w-[480px] lg:mx-auto">
          <label className="inline-flex flex-col p-y2  gap-4">
            <input
              className="py-2 px-4 border-2 border-amber-950 rounded-2xl"
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label className="inline-flex flex-col p-y2 gap-4">
            <input
              className="py-2 px-4 border-2 border-amber-950 rounded-2xl"
              type="password"
              placeholder="Password"
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
          <article className="w-full flex flex-wrap gap-2 justify-between">
            <Link
            to="/account/forgot-password"
            className="text-black text-center"
          >
            Forgot your password?
          </Link>
          <Link to="/account/create-account" className="text-black text-center">
            Create new account?
          </Link>
          </article>
          <address className="w-full text-black flex items-end justify-center">
            <p className="text-gray-500 text-center text-xl  py-2">Copyright &copy; {new Date().getFullYear()} 
              <i className="text-2xl">{" "}<span className="text-[#32712F]">M</span><span className="text-[#CE302F]">D</span><span className="text-black">S</span></i>
              </p>
          </address>
        </footer>
      </article>
    </section>
  );
};

export default SignInPage;
