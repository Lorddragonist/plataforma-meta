import Layout from "../../Components/Layout";
import RegisterForm from "../../Components/RegisterForm";

function Home() {
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dehfpzadt/image/upload/v1740427688/mujer_profesional_hfoi30.jpg" // Reemplaza con la URL de tu imagen
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Contenedor del contenido */}
      <div className="relative flex justify-between w-10/12">
        {/* Texto a la izquierda */}
        <div className="text-white text-4xl font-bold w-1/2">
          <h1 className="leading-tight">
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
