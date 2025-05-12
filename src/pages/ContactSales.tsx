import CompanyName from "../assets/icons/CompanyName";
import Logo from "../assets/icons/Logo";

const ContactSales: React.FC = () => {
    return (
         <section className="bg-white grid md:py-8">
              <article className="flex items-center justify-center py-2">
                <span className="inline-flex flex-col items-center justify-center gap-4 p-2 rounded-lg">
                  <Logo />
                  <CompanyName />
                </span>
              </article>
              <section className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-black">
                  ¡Hablemos de tus necesidades!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nuestros expertos de ventas están listos para ayudarte a
                  encontrar la mejor solución.
                </p>
                <form className="max-w-xl mx-auto bg-black p-8 rounded-lg shadow-md space-y-4">
                  <div>
                    <label
                      className="block text-left mb-2 font-medium"
                      htmlFor="name"
                    >
                      Nombre Completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left mb-2 font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="tu@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left mb-2 font-medium"
                      htmlFor="company"
                    >
                      Empresa
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tu empresa"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left mb-2 font-medium"
                      htmlFor="phone"
                    >
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-left mb-2 font-medium"
                      htmlFor="message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Contactar Ventas
                  </button>
                </form>
              </section>

              <footer className="flex flex-wrap gap-2 max-w-[480px] mx-auto">
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
            </section>
    )
}

export default ContactSales;