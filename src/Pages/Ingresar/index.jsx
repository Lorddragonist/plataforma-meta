import Layout from "../../Components/Layout";
import RegisterForm from "../../Components/RegisterForm";

const Ingresar = () => {
  return (
    <Layout>
      <div className="relative h-[650px] w-full flex items-center justify-center bg-gray-200">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 top-4">
          <img
            src="https://res.cloudinary.com/dehfpzadt/image/upload/v1741193318/pexels-canvastudio-3277806_d10yzy.jpg"
            alt="Background"
            className="w-full h-full object-cover block opacity-90"
          />
        </div>
        {/* Contenedor del contenido */}
        <div className="relative top-16 flex justify-between w-10/12">
          {/* Formulario a la derecha */}
          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
};

export default Ingresar;
