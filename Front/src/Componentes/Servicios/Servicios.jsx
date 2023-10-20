const Servicios = () => {
  return (
    <div id="Servicios"  className="flex flex-wrap justify-center mt-28  mx-auto h-full items-center xl:w-[90%] border-t-2">
      <div className=" w-full h-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
        <div className="gap-2 h-full flex justify-center items-center flex-col">
          <img src="/camion.gif" className="object-contain" alt="Envio" />
          <h1 className="text-center">Envios seguros</h1>
          <p className="text-center">
            En TechnoPremium, nos enorgullece ofrecer envíos seguros y
            confiables. Sabemos lo importante que es recibir tus productos en
            perfectas condiciones y a tiempo. Nuestro equipo de logística se
            asegurará de que tu pedido esté bien empaquetado y se transporte de
            manera segura hasta tu puerta. Tu satisfacción y tranquilidad son
            nuestras principales prioridades.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
        <div className="gap-2 h-full flex items-center flex-col">
          <img src="/confianza.gif" alt="Amor" />
          <h1 className="text-center">Confianza entre vendedor y cliente</h1>
          <p className="text-center">
            En TechnoPremium, construimos relaciones sólidas y duraderas con
            nuestros clientes. Valoramos la confianza que depositas en nosotros
            al elegirnos como tu proveedor de confianza. Nos esforzamos por
            ofrecer un servicio excepcional y garantizar tu satisfacción en cada
            paso del camino. Nuestro compromiso con la transparencia, la calidad
            y la atención al cliente nos diferencia..
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
        <div className="gap-2 h-full flex items-center flex-col">
          <img src="/pago.png" alt="pago" />
          <h1 className="text-center">
            Queremos ofrecerle una confianza en su pago
          </h1>
          <p className="text-center">
            Tu seguridad y tranquilidad son nuestras prioridades cuando se trata
            de procesar pagos. En TechnoPremium, utilizamos plataformas de pago
            seguras y confiables para garantizar que tus transacciones sean
            protegidas. Sabemos que la seguridad es fundamental cuando se trata
            de compras en línea, y nos comprometemos a proporcionarte un entorno
            de pago seguro.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
        <div className="gap-2 h-full flex items-center flex-col">
          <img src="serviciotecnico.png" alt="tecnico" />
          <h1 className="text-center">Servicio técnico propio</h1>
          <p className="text-center">
            En TechnoPremium, comprendemos que la tecnología puede necesitar
            reparaciones y mantenimiento en algún momento. Es por eso que
            ofrecemos un servicio técnico propio. Nuestro equipo de técnicos
            altamente capacitados está listo para atender tus necesidades de
            reparación y mantenimiento de productos. Ya sea que necesites
            solucionar un problema técnico o realizar un mantenimiento
            preventivo, estamos aquí para ayudarte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
