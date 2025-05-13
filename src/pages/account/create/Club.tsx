import CompanyName from "../../../assets/icons/CompanyName";
import Logo from "../../../assets/icons/Logo";

const Club: React.FC = () => {
  return (
    <section className="bg-white h-screen py-8 flex flex-col gap-4 xl:gap-8">
      <article className="flex items-center justify-center py-2">
        <span className="inline-flex flex-col items-center justify-center gap-4 p-2 rounded-lg">
          <Logo />
          <CompanyName />
        </span>
      </article>
      <article>
        <h2 className="text-2xl text-black text-center font-black">Crear una cuenta de club nueva</h2>
        <p>
          Introduce tu email para inscribirte en la aplicación
        </p>
      </article>
    </section>
  )
}


export default Club;