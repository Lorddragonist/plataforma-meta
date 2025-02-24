import Layout from "../../Components/Layout";
import RegisterForm from "../../Components/RegisterForm";

function Home() {
  return (
    <Layout>
      <div className="static h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 pt-10">
          <img
            src="https://res.cloudinary.com/dehfpzadt/image/upload/v1740427688/mujer_profesional_hfoi30.jpg" // Reemplaza con la URL de tu imagen
            alt="Background"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
      {/* Contenedor del contenido */}
      <div className="absolute top-96 flex justify-between w-10/12">
        {/* Texto a la izquierda */}
        <div className="absolute top-1 text-white text-4xl font-bold w-1/2">
          <h1 className="leading-tight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Todo lo que necesitas para llegar a tus clientes
          </h1>
        </div>

        {/* Formulario a la derecha */}
        <RegisterForm />
      </div>
      <div className="bg-gray-300 w-full">Promos</div>
      <div className="bg-gray-950 w-full h-40 text-white font-semibold">
        Footer
      </div>
    </Layout>
  );
}

export default Home;
