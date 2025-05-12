import CompanyName from "../../assets/icons/CompanyName";
import Logo from "../../assets/icons/Logo";
import { Link } from "react-router"

const SignInPage: React.FC = () => {
  return (
    <section className="bg-white h-dvh">
      <article className="flex items-center justify-center py-4">
        <span className="inline-flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
          <Logo />
          <CompanyName />
        </span>
      </article>
      <article className="h-56 p-4">
        <form className="flex flex-col py-8 px-8 text-black gap-4 max-w-[480px] mx-auto bg-amber-100 rounded-4xl border-2 border-amber-950" >
          <label className="inline-flex flex-col p-y2 px-4 gap-4" >
            <span className="text-black">Inster your email</span>
            <input className="py-2 px-4 border-2 border-amber-950 rounded-2xl" type="email" placeholder="Email" required />
          </label>
          <label className="inline-flex flex-col p-y2 px-4 gap-4" >
            <span className="text-black">Insert your password</span>
            <input className="py-2 px-4 border-2 border-amber-950 rounded-2xl" type="password" placeholder="Password" required />
          </label>
          <button type="submit" className="py-2 px-4 bg-amber-950 text-white rounded-2xl border-2 border-amber-950 font-black">
            Sign In
          </button>
        </form>
        <footer className="flex justify-between gap-4 p-4 max-w-[480px] mx-auto">
          <Link to="/account/forgot-password" className="text-black text-center">
            Forgot your password?
          </Link>
          <Link to="/account/create-account" className="text-black text-center">
            Create new acoount?</Link>
        </footer>
      </article>
    </section>
  )
}


export default SignInPage;