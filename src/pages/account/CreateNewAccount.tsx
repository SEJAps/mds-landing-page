import { Link } from "react-router";
import CompanyName from "../../assets/icons/CompanyName";
import Logo from "../../assets/icons/Logo";

const CreateNewAccount: React.FC = () => {
  return (
    <section className="bg-white h-screen py-8 flex flex-col gap-4 xl:gap-8">
      <article className="flex items-center justify-center py-2">
        <span className="inline-flex flex-col items-center justify-center gap-4 p-2 rounded-lg">
          <Logo />
          <CompanyName />
        </span>
      </article>
      <article className="bg-gradient-to-t from-[#141313] from-50%  to-[#FE7070] to-50% w-full max-w-72 min-h-[24rem] mx-auto rounded-2xl flex justify-center items-center">
        <section className="bg-gradient-to-t from-[#FE7070] from-50%  to-[#141313] to-50% rounded-full flex flex-col items-center justify-around w-48 h-48">
          <Link to="/account/create/account-club" className="font-black text-2xl text-shadow-gray-400 text-shadow-md">Club</Link>
          <Link to="/account/create/account-team" className="font-black text-2xl text-shadow-gray-400 text-shadow-md">Equipo</Link>
        </section>
      </article>
       <footer className="flex flex-wrap gap-2 max-w-[480px] mx-auto">
         <address className="w-full text-black flex items-end justify-center">
            <p className="text-gray-500 text-center text-xl  py-2">Copyright &copy; {new Date().getFullYear()} 
              <i className="text-2xl">{" "}<span className="text-[#32712F]">M</span><span className="text-[#CE302F]">D</span><span className="text-black">S</span></i>
              </p>
          </address>
       </footer>
    </section>
  );
};

export default CreateNewAccount;
