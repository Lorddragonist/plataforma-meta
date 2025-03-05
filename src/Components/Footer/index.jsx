const Footer = () => {
  return (
    <div className="hidden md:fixed bottom-0 bg-gray-950 w-full h-[200px] text-white font-light md:block sm:grid sm:grid-cols-2 flex items-center justify-center">
      <div className="flex gap-20 p-[40px]">
        <div className="flex flex-col">
          <div className="font-bold">Servicios</div>
          <div>
            <ul className="columns-2 gap-4">
              <li>Conectividad</li>
              <li>Colaboración</li>
              <li>Soluciones de Valor Agregado</li>
              <li>Equipos para su empresa</li>
              <li>Soluciones de voz</li>
              <li>Televisión</li>
              <li>Data Center</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Soluciones digitales</div>
          <div>
            <ul>
              <li>Soluciones Digitales</li>
              <li>Ciberseguridad</li>
              <li>Identidad Digital</li>
              <li>Claro Media</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Contrata Servicios</div>
          <div>
            <ul>
              <li>Dejanos tus datos</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Paga tu Factura</div>
          <div>
            <ul>
              <li>Portal de Pagos Empresas</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Claro Cloud</div>
          <div>
            <ul>
              <li>Productos</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Noticias</div>
          <div>
            <ul>
              <li>Blog Negocios</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
