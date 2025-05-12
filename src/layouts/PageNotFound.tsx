import { Link } from "react-router";

const PageNotFound: React.FC = () => {
  return (
    <article className="flex bg-white flex-col items-center justify-center h-svh gap-20">
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-red-400">Page not found!</h1>
        <p className="text-gray-500 text-xl text-center">
          Ponte en contacto con nosotros para obtener más información.
        </p>
      </header>
      <section>
        <Link
          to="/"
          className="rounded-full bg-white text-black px-4 py-2 border-2 border-black font-black hover:bg-black hover:text-white hover:border-none transiton-all duration-300 ease-in-out"
        >
          Go home
        </Link>
      </section>
    </article>
  );
};
export default PageNotFound;
