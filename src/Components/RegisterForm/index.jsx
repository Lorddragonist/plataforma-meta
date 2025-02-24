const RegisterForm = () => {
    return (
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-red-600 text-xl font-bold text-center mb-4">¡Regístrate aquí!</h2>
        <form className="flex flex-col gap-2">
          <input className="p-2 border rounded" type="text" placeholder="Nombre" />
          <input className="p-2 border rounded" type="text" placeholder="Dirección" />
          <input className="p-2 border rounded" type="email" placeholder="Correo" />
          <input className="p-2 border rounded" type="tel" placeholder="Teléfono" />
          <input className="p-2 border rounded" type="password" placeholder="Contraseña" />
          <input className="p-2 border rounded" type="password" placeholder="Confirma tu contraseña" />
  
          <label className="flex items-center gap-2 text-sm mt-2">
            Acepto términos y condiciones
            <input type="checkbox" className="w-4 h-4"/>
          </label>
  
          <button className="bg-red-600 text-white py-2 rounded font-bold hover:bg-red-700">
            Regístrame
          </button>
        </form>
      </div>
    );
  };
  
  export default RegisterForm;
  